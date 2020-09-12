import { AvailableTools, Tabs, ToolSize, MouseButton, Popup } from '../types';
import { Dropdowns } from '../types';
import { GenericActions, GenericActionTypes } from './action.types';

export const appClick = (): GenericActions => {
	return { type: GenericActionTypes.APP_CLICK };
};

export const maximize = (): GenericActions => ({
	type: GenericActionTypes.MAXIMIZE,
});

export const selectTool = (toolId: AvailableTools): GenericActions => {
	return { type: GenericActionTypes.SELECT_TOOL, toolId };
};

export const setActiveTab = (tab: Tabs): GenericActions => {
	return { type: GenericActionTypes.SET_ACTIVE_TAB, tab };
};

export const setCanvasContext = (context: CanvasRenderingContext2D | null): GenericActions => {
	return { type: GenericActionTypes.SET_CANVAS_CONTEXT, context };
};

export const setDropdown = (dropdown: Dropdowns): GenericActions => {
	return { type: GenericActionTypes.SET_DROPDOWN, dropdown };
};

export const setPopup = (popup: Popup): GenericActions => {
	return { type: GenericActionTypes.SET_POPUP, popup};
};

export const setPressedMouseButtonOnCanvas = (newPressedButton: MouseButton): GenericActions => {
	return { type: GenericActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS, newPressedButton };
};

export const setToolSize = (toolSize: ToolSize): GenericActions => {
	return { type: GenericActionTypes.SET_TOOL_SIZE, toolSize };
};

export const toggleBottomBar = (): GenericActions => ({
	type: GenericActionTypes.TOGGLE_BOTTOM_BAR,
});

export const toggleRibbon = (): GenericActions => {
	return {type: GenericActionTypes.TOGGLE_RIBBON};
};
