import { ActionTypes } from './action-types.enum';
import { isDropdown, isFromRange, isInteger, isRGBColor } from './validators';

export const setTab = tabName => ({
	type: ActionTypes.SET_TAB,
	data: tabName,
});

export const maximize = () => ({
	type: ActionTypes.MAXIMIZE,
});

export const toggleBottomBar = () => ({
	type: ActionTypes.TOGGLE_BOTTOM_BAR,
});

export const toggleBrush = () => ({
	type: ActionTypes.TOGGLE_BRUSH,
});

export const changeBrush = brushId => {
	isInteger(brushId);
	isFromRange(brushId, 1, 9);
	return { type: ActionTypes.CHANGE_BRUSH, brushId };
};

export const selectMainColorIndex = colorIndex => {
	isInteger(colorIndex);
	isFromRange(colorIndex, 1, 2);
	return { type: ActionTypes.SELECT_MAIN_COLOR_INDEX, colorIndex };
};

export const selectTool = toolId => {
	isInteger(toolId);
	isFromRange(toolId, 1, 6);
	return { type: ActionTypes.SELECT_TOOL, toolId };
};

export const setDropdown = dropdown => {
	isDropdown(dropdown);
	return { type: ActionTypes.SET_DROPDOWN, dropdown };
};

export const setToolSize = toolSize => {
	isInteger(toolSize);
	isFromRange(toolSize, 1, 4);
	return { type: ActionTypes.SET_TOOL_SIZE, toolSize };
};

export const appClick = () => {
	return { type: ActionTypes.APP_CLICK };
};

export const setSelectedMainColor = newColor => {
	isRGBColor(newColor);
	return { type: ActionTypes.SET_SELECTED_MAIN_COLOR, newColor };
};
