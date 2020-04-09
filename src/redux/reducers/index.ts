import { AppState, Dropdowns } from '../../types';
import { Actions, ActionTypes } from '../action.types';
import { initialState } from '../initial-state';
import { colorReducer } from './colors.reducer';

export const rootReducer = (state = initialState, action: Actions): AppState => {
	switch (action.type) {
		case ActionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}
			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: Dropdowns.none,
			};

		case ActionTypes.MAXIMIZE:
			return { ...state, isMaximized: true };

		case ActionTypes.SELECT_TOOL:
			return { ...state, selectedTool: action.toolId };

		case ActionTypes.SET_ACTIVE_TAB:
			return {...state, activeTab: action.tab};

		case ActionTypes.SET_CANVAS_CONTEXT:
			return {...state, canvasContext: action.context};

		case ActionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true,
			};

		case ActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS:
			return {
				...state,
				mouseButtonPressedOnCanvas: action.newPressedButton
			};

		case ActionTypes.SET_TOOL_SIZE:
			return { ...state, toolSize: action.toolSize };

		case ActionTypes.TOGGLE_BOTTOM_BAR:
			return { ...state, isBottomBarVisible: !state.isBottomBarVisible };

		case ActionTypes.TOGGLE_BRUSH:
			return { ...state, isBrushActive: !state.isBrushActive };

		case ActionTypes.TOGGLE_RIBBON:
			return {...state,	isRibbonCollapsed: !state.isRibbonCollapsed};
	}

	return {
		...state,
		colors: colorReducer(state.colors, action),
	};
};
