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