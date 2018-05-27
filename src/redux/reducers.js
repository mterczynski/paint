import * as actionTypes from './action-types';

const tabs = {
	tools: 'tools',
	view: 'view'
}

const initialState = {
	currentTab: tabs.tools,
	isMaximized: false
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.MAXIMIZE:
			return {...state, isMaximized: true};
	}
	return state;
};

export default rootReducer;