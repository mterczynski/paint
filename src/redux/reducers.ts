import { AppState, Dropdowns } from '../types';
import { GenericActions, GenericActionTypes } from './action.types';
import { initialState } from './initial-state';
import { colorsReducer } from './colors/colors.reducer';

export const rootReducer = (state = initialState, action: GenericActions): AppState => {
	switch (action.type) {
		case GenericActionTypes.APP_CLICK:
			if (state.preventNextAppClick) {
				return { ...state, preventNextAppClick: false };
			}
			return {
				...state,
				preventNextAppClick: false,
				openedDropdown: Dropdowns.none,
			};

		case GenericActionTypes.MAXIMIZE:
			return { ...state, isMaximized: true };

		case GenericActionTypes.SELECT_TOOL:
			return { ...state, selectedTool: action.toolId };

		case GenericActionTypes.SET_ACTIVE_TAB:
			return {...state, activeTab: action.tab};

		case GenericActionTypes.SET_CANVAS_CONTEXT:
			return {...state, canvasContext: action.context};

		case GenericActionTypes.SET_DROPDOWN:
			return {
				...state,
				openedDropdown: action.dropdown,
				preventNextAppClick: true,
			};

		case GenericActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS:
			return {
				...state,
				mouseButtonPressedOnCanvas: action.newPressedButton
			};

		case GenericActionTypes.SET_TOOL_SIZE:
			return { ...state, toolSize: action.toolSize };

		case GenericActionTypes.TOGGLE_BOTTOM_BAR:
			return { ...state, isBottomBarVisible: !state.isBottomBarVisible };

		case GenericActionTypes.TOGGLE_BRUSH:
			return { ...state, isBrushActive: !state.isBrushActive };

		case GenericActionTypes.TOGGLE_RIBBON:
			return {...state,	isRibbonCollapsed: !state.isRibbonCollapsed};
	}

	return {
		...state,
		colors: colorsReducer(state.colors, action),
	};
};
