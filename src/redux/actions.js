import * as actionTypes from './action-types';

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
	if(![1,2,3,4,5,6,7,8,9].includes(brushId)){
		throw new Error('brush ID must be integer from 1 to 9');
	}
	return {type: actionTypes.CHANGE_BRUSH, brushId};
}

export const selectColor = (colorId) => {
	if(colorId !== 1 && colorId !== 2 && colorId !== '1' && colorId !== '2'){
		throw new Error('color id must be 1 or 2');
	}
	return {type: actionTypes.SELECT_COLOR, colorId};
}