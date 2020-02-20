import { AvailableTools, IndexOfMainColor, ToolSize } from '../types';
import { Dropdowns } from '../types/dropdowns';
import { ActionTypes } from './action-types.enum';
import { isRGBColor } from './validators';

export const maximize = () => ({
	type: ActionTypes.MAXIMIZE,
});

export const toggleBottomBar = () => ({
	type: ActionTypes.TOGGLE_BOTTOM_BAR,
});

export const selectMainColorIndex = (colorIndex: IndexOfMainColor) => {
	return { type: ActionTypes.SELECT_MAIN_COLOR_INDEX, colorIndex };
};

export const selectTool = (toolId: AvailableTools) => {
	return { type: ActionTypes.SELECT_TOOL, toolId };
};

export const setDropdown = (dropdown: Dropdowns) => {
	return { type: ActionTypes.SET_DROPDOWN, dropdown };
};

export const setToolSize = (toolSize: ToolSize) => {
	return { type: ActionTypes.SET_TOOL_SIZE, toolSize };
};

export const appClick = () => {
	return { type: ActionTypes.APP_CLICK };
};

export const setSelectedMainColor = (newColor: string) => {
	isRGBColor(newColor);
	return { type: ActionTypes.SET_SELECTED_MAIN_COLOR, newColor };
};
