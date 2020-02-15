import * as actionTypes from './action-types';
import { dropdowns } from './enums/dropdowns';
import { tabs } from './enums/tabs';

const initialState = {
	isMaximized: false, // boolean
	isBottomBarVisible: false,

	openedDropdown: dropdowns.none,
	preventNextAppClick: false, // boolean

	zoom: 1, // from [0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8]
	selection: null,
	selectionMode: 1, // 1 or 2
	selectedTool: null, // from 1-6 or null
	isBrushActive: false, // boolean
	toolSize: 3, // from 1-4

	colors: {
		color1: 'black', // css color
		color2: 'white', // css color
		selectedMainColorIndex: 1, // 1 or 2
		lastUsedCustomColors: new Array(10).fill(null), // array of nulls or css colors
		isEditColorsWindowOpened: false,
	},

	imageSettings: {
		width: 500, // in px
		height: 500 // in px
	}
};

const colorReducer = (state, action) => {
	switch(action.type) {
		case actionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex
			};
		case actionTypes.SET_SELECTED_MAIN_COLOR:
			if (state.selectedMainColorIndex == 1) {
				return {
					...state,
					color1: action.newColor
				};
			} else {
				return {
					...state,
				 	color2: action.newColor
				};
			}
	}

	return state;
}

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
		case actionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true
			};
	}

	return {
		...state,
		colors: colorReducer(state.colors, action)
	};
};

export default rootReducer;
