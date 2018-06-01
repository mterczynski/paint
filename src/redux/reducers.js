import * as actionTypes from './action-types';

const tabs = {
	tools: 'tools',
	view: 'view'
}

const initialState = {
	currentTab: tabs.tools,
	isMaximized: false,
	isBottomBarVisible: true,
	isBrushActive: false,
	activeBrush: 1,
	selectedColor: 1
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.MAXIMIZE:
			return {...state, isMaximized: true};
		case actionTypes.TOGGLE_BOTTOM_BAR:
			return {...state, isBottomBarVisible: !state.isBottomBarVisible};
		case actionTypes.TOGGLE_BRUSH:
			return {...state, isBrushActive: !state.isBrushActive};
	}
	return state;
};

export default rootReducer;