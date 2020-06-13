import { AvailableTools, IndexOfMainColor, Tabs, ToolSize, MouseButton, RGBAColor } from '../types';
import { Dropdowns } from '../types';
import { Actions, ActionTypes } from './action.types';

export const appClick = (): Actions => {
	return { type: ActionTypes.APP_CLICK };
};

export const maximize = (): Actions => ({
	type: ActionTypes.MAXIMIZE,
});

export const selectMainColorIndex = (colorIndex: IndexOfMainColor): Actions => {
	return { type: ActionTypes.SELECT_MAIN_COLOR_INDEX, colorIndex };
};

export const selectTool = (toolId: AvailableTools): Actions => {
	return { type: ActionTypes.SELECT_TOOL, toolId };
};

export const setActiveTab = (tab: Tabs): Actions => {
	return { type: ActionTypes.SET_ACTIVE_TAB, tab };
};

export const setCanvasContext = (context: CanvasRenderingContext2D | null): Actions => {
	return { type: ActionTypes.SET_CANVAS_CONTEXT, context };
};

export const setColor1 = (newColor: RGBAColor): Actions => {
	return { type: ActionTypes.SET_COLOR_1, newColor };
};

export const setColor2 = (newColor: RGBAColor): Actions => {
	return { type: ActionTypes.SET_COLOR_2, newColor };
};

export const setDropdown = (dropdown: Dropdowns): Actions => {
	return { type: ActionTypes.SET_DROPDOWN, dropdown };
};

export const setPressedMouseButtonOnCanvas = (newPressedButton: MouseButton): Actions => {
	return { type: ActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS, newPressedButton };
};

export const setSelectedMainColor = (newColor: RGBAColor): Actions => {
	return { type: ActionTypes.SET_SELECTED_MAIN_COLOR, newColor };
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
