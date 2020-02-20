import { ColorState } from '../types';
import { Dropdowns } from '../types/dropdowns';
import { ActionTypes } from './action-types.enum';
import { Action } from './action.type';
import { initialState } from './initial-state';

const colorReducer = (state: ColorState, action: Action) => {
	switch (action.type) {
		case ActionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex,
			};
		case ActionTypes.SET_SELECTED_MAIN_COLOR:
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

const rootReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionTypes.MAXIMIZE:
			return { ...state, isMaximized: true };
		case ActionTypes.TOGGLE_BOTTOM_BAR:
			return { ...state, isBottomBarVisible: !state.isBottomBarVisible };
		case ActionTypes.TOGGLE_BRUSH:
			return { ...state, isBrushActive: !state.isBrushActive };
		case ActionTypes.SELECT_TOOL:
			return { ...state, selectedTool: action.toolId };
		case ActionTypes.SET_TOOL_SIZE:
				return { ...state, toolSize: action.toolSize };
		case ActionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}

			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: Dropdowns.none,
			};
		case ActionTypes.SET_DROPDOWN:
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
