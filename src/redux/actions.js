import * as actionTypes from './action-types';

export const setTab = (tabName) => ({ 
	type: actionTypes.SET_TAB, data: tabName
});