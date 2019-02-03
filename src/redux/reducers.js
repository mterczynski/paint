import * as actionTypes from './action-types';
import { dropdowns } from './enums/dropdowns';
import { tabs } from './enums/tabs';

const initialState = {
	/* General: */
	isMaximized: false, // boolean
	isMinimized: false, // boolean

	currentTab: tabs.tools,

	openedDropdown: dropdowns.none,
	preventNextAppClick: false, // boolean

	zoom: 1, // from [0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8]
	mousePosition: null, // {x:number, y:number} or null if mouse is off canvas
	selection: null /* null or {
		size: {
			x: 399,
			y: 260
		},
		topLeftCorner: {
			x: 0,
			y: 0
		}
	} */,
	drawingModeSelection: null /* null or {
		startingPoint: {
			x: number,
			y: number
		}, // or null if selectionMode is 2
		maxLeft: null, // number if selectionMode is 2
		maxRight: null, // number if selectionMode is 2
		maxTop: null, // number if selectionMode is 2
		maxBottom: null // number if selectionMode is 2
	} */,
	isImageInClipboard: false, // boolean
	isRibbonAlwaysVisible: true, // boolean
	isRibbonVisible: true, // boolean, only used when isRibbonAlwaysVisible is set to false

	/* Main tools tab: */

	// 1_clipboard

	// 2_image
	selectionMode: 1, // or 2
	isResizeWindowOpened: false, // boolean

	// 3_tools
	selectedTool: null, // from 1-6 or null
	isToolSizeEnabled: false, // boolean

	// 4_brushes
	selectedBrush: 1, // from 1-9
	isBrushActive: false, // boolean

	// 5_shapes
	selectedShape: null, // from 1-23 or null
	shapeListLevel: 1, // from 1-3
	isShapeListExpanded: false, // boolean
	shapeOutline: 2, // from 1-7
	shapeFill: 1, // from 1-7

	// 6_size:
	toolSize: 3, // from 1-4

	// todo:

	// toolSizes:{
	// 	pencil: 3, // from 1-4
	// 	rubber: 3, // from 1-4
	// 	brushes: {
	// 		_1,
	// 		_2_and_3,
	// 		_4,
	// 		_5,
	// 		_6,
	// 		_7,
	// 		_8,
	// 		_9
	// 	}
	// }

	// 7_colors:
	colors: {
		color1: 'black', // css color
		color2: 'white', // css color
		selectedMainColor: 1, // or 2
		lastUsedCustomColors: new Array(10).fill(null), // array of nulls or css colors
		isEditColorsWindowOpened: false, // boolean
		editColorsWindow: {
			lastClickedBasicColor: null, // or int from 1-48
			islastClickedBasicColorSelected: false, // boolean
			islastClickedBasicColorFocused: false, // boolean

			hue: 0, // int from 0-239
			saturation: 0, // int from 0-240
			lightness: 0, // int from 0-240

			customColors: {
				saved: new Array(16).fill(null), // array of nulls or css colors
				nextSlot: 1, // int from 1-16

				focusedSlot: null, // or int from 1-16
				selectedSlot: null // or int from 1-16
			}
		}
	},

	/* View tab: */

	viewTab: {
		rulers: false, // boolean
		bottomBar: false, // boolean
		gridLines: false // boolean
	},

	/* Image settings: */

	imageSettings: {
		name: 'Bez tytułu', // shown in title-bar
		lastSaved: null, // or Date if file was saved
		fileSize: null, // or number if file was saved
		dpi: 96,
		unit: 'px', // or 'inch' or 'cm'
		colorMode: true, // boolean
		width: 500, // always in px
		height: 500 // always in px
	}
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.MAXIMIZE:
			return { ...state, isMaximized: true };
		case actionTypes.TOGGLE_BOTTOM_BAR:
			return { ...state, isBottomBarVisible: !state.isBottomBarVisible };
		case actionTypes.TOGGLE_BRUSH:
			return { ...state, isBrushActive: !state.isBrushActive };
		case actionTypes.SELECT_TOOL:
			return { ...state, selectedTool: action.toolId };
		case actionTypes.SELECT_MAIN_COLOR:
			return {
				...state,
				colors: { ...state.colors, selectedMainColor: action.colorId }
			};
		case actionTypes.SET_TOOL_SIZE:
			return { ...state, toolSize: action.toolSize };
		case actionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}
			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: dropdowns.none
			};
		case actionTypes.SET_SELECTED_MAIN_COLOR:
			if (state.colors.selectedMainColor == 1) {
				return {
					...state,
					colors: { ...state.colors, color1: action.newColor }
				};
			} else {
				return {
					...state,
					colors: { ...state.colors, color2: action.newColor }
				};
			}

		case actionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true
			};
	}
	return state;
};

export default rootReducer;
