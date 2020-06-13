import { ColorState } from '../../types';
import { Actions, ActionTypes } from '../action.types';

export const colorsReducer = (state: ColorState, action: Actions): ColorState => {
	switch (action.type) {
		case ActionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex,
			};

		case ActionTypes.SET_COLOR_1:
			return {
				...state,
				color1: action.newColor
			};

		case ActionTypes.SET_COLOR_2:
			return {
				...state,
				color2: action.newColor
			};

		case ActionTypes.SET_SELECTED_MAIN_COLOR:
			if (state.selectedMainColorIndex === 1) {
				return {
					...state,
					color1: action.newColor,
				};
			}
			return {
				...state,
				color2: action.newColor,
			};
	}

	return state;
};
