import * as actionTypes from './action-types';

import {isFromRange, isInteger, isNumber} from './validators';

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

export const selectColor = (colorId) => {
	isInteger(colorId);
	isFromRange(colorId, 1, 2);
	return {type: actionTypes.SELECT_COLOR, colorId};
}

export const selectTool = (toolId) => {
	isInteger(toolId);
	isFromRange(toolId, 1, 6);
	return {type: actionTypes.SELECT_TOOL, toolId};
}