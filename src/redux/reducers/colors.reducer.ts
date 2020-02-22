import { ColorState } from '../../types';
import { ActionTypes } from '../action-types.enum';
import { Action } from '../action.type';

export const colorReducer = (state: ColorState, action: Action) => {
	switch (action.type) {
		case ActionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex,
			};
		case ActionTypes.SET_SELECTED_MAIN_COLOR:
			if (state.selectedMainColorIndex === 1) {
				return {
					...state,
					color1: action.newColor,
				};
			} else {
				return {
					...state,
					color2: action.newColor,
				};
			}
	}

	return state;
};
