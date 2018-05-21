import * as actionTypes from './action-types';

const tabs = {
	tools: 'tools',
	view: 'view'
}

const initialState = {
	currentTab: tabs.tools
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TAB:
			break;
	}
	return state;
};

export default rootReducer;