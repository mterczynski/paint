import { languages } from '../lang';
import { AppState, AvailableTools } from '../types';
import * as actionTypes from './action-types';
import { dropdowns } from './enums/dropdowns';

const initialState = {
	language: languages.PL,
	isMaximized: false,
	isBottomBarVisible: false,

	openedDropdown: dropdowns.none,
	preventNextAppClick: false,

	zoom: 1,
	selection: null,
	selectionMode: 1,
	selectedTool: AvailableTools.None,
	isBrushActive: false,
	toolSize: 3,

	colors: {
		color1: 'black',
		color2: 'white',
		selectedMainColorIndex: 1,
		lastUsedCustomColors: new Array(10).fill(null),
		isEditColorsWindowOpened: false,
	},

	imageSettings: {
		width: 500,
		height: 500,
	},
} as AppState;

const colorReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex,
			};
		case actionTypes.SET_SELECTED_MAIN_COLOR:
			if (state.selectedMainColorIndex === 1) {
				return {
					...state,
					color1: action.newColor,
				};
			} else {
				return {
					...state,
					color2: action.newColor,
				};
			}
	}

	return state;
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
		case actionTypes.SET_TOOL_SIZE:
				return { ...state, toolSize: action.toolSize };
		case actionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}

			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: dropdowns.none,
			};
		case actionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true,
			};
	}

	return {
		...state,
		colors: colorReducer(state.colors, action),
	};
};

export default rootReducer;
