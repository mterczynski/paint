import { AvailableTools, IndexOfMainColor, Tabs, ToolSize, MouseButton, RGBAColor } from '../types';
import { Dropdowns } from '../types';
import { Actions, ActionTypes } from './action.types';

export const appClick = (): Actions => {
	return { type: ActionTypes.APP_CLICK };
};

export const maximize = (): Actions => ({
	type: ActionTypes.MAXIMIZE,
});

export const selectTool = (toolId: AvailableTools): Actions => {
	return { type: ActionTypes.SELECT_TOOL, toolId };
};

export const setActiveTab = (tab: Tabs): Actions => {
	return { type: ActionTypes.SET_ACTIVE_TAB, tab };
};

export const setCanvasContext = (context: CanvasRenderingContext2D | null): Actions => {
	return { type: ActionTypes.SET_CANVAS_CONTEXT, context };
};

export const setDropdown = (dropdown: Dropdowns): Actions => {
	return { type: ActionTypes.SET_DROPDOWN, dropdown };
};

export const setPressedMouseButtonOnCanvas = (newPressedButton: MouseButton): Actions => {
	return { type: ActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS, newPressedButton };
};

export const setToolSize = (toolSize: ToolSize): Actions => {
	return { type: ActionTypes.SET_TOOL_SIZE, toolSize };
};

export const toggleBottomBar = (): Actions => ({
	type: ActionTypes.TOGGLE_BOTTOM_BAR,
});

export const toggleRibbon = (): Actions => {
	return {type: ActionTypes.TOGGLE_RIBBON};
};
