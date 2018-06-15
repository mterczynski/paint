import * as actionTypes from './action-types';

import {isFromRange, isInteger, isRGBColor, isDropdown} from './validators';

export const setTab = (tabName) => ({ 
	type: actionTypes.SET_TAB, data: tabName
});

export const maximize = () => ({ 
	type: actionTypes.MAXIMIZE,
});

export const toggleBottomBar = () => ({ 
	type: actionTypes.TOGGLE_BOTTOM_BAR,
});

export const toggleBrush = () => ({ 
	type: actionTypes.TOGGLE_BRUSH,
});

export const changeBrush = (brushId) => {
	isInteger(brushId);
	isFromRange(brushId, 1, 9);
	return {type: actionTypes.CHANGE_BRUSH, brushId};
}

export const selectMainColor = (colorId) => {
	isInteger(colorId);
	isFromRange(colorId, 1, 2);
	return {type: actionTypes.SELECT_MAIN_COLOR, colorId};
}

export const selectTool = (toolId) => {
	isInteger(toolId);
	isFromRange(toolId, 1, 6);
	return {type: actionTypes.SELECT_TOOL, toolId};
}

export const setDropdown = (dropdown) =>{
	isDropdown(dropdown);
	return {type: actionTypes.SET_DROPDOWN, dropdown};
}

export const setToolSize = (toolSize) => {
	isInteger(toolSize);
	isFromRange(toolSize, 1, 4);
	return {type: actionTypes.SET_TOOL_SIZE, toolSize};
}

export const appClick = () => {
	return {type: actionTypes.APP_CLICK};
}

export const setSelectedMainColor = (newColor) => {
	isRGBColor(newColor);
	return {type: actionTypes.SET_SELECTED_MAIN_COLOR, newColor};
}
