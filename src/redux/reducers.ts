import { AppState, ColorState } from '../types';
import { Dropdowns } from '../types/dropdowns';
import * as actionTypes from './action-types';
import { initialState } from './initial-state';

const colorReducer = (state: ColorState, action) => {
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
				openedDropdown: Dropdowns.none,
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
