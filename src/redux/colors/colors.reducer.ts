import { ColorState } from '../../types';
import { ColorsActionTypes, ColorsActions } from './colors.action-types';

export const colorsReducer = (state: ColorState, action: ColorsActions): ColorState => {
	switch (action.type) {
		case ColorsActionTypes.SELECT_MAIN_COLOR_INDEX:
			return {
				...state,
				selectedMainColorIndex: action.colorIndex,
			};

		case ColorsActionTypes.SET_COLOR_1:
			return {
				...state,
				color1: action.newColor
			};

		case ColorsActionTypes.SET_COLOR_2:
			return {
				...state,
				color2: action.newColor
			};

		case ColorsActionTypes.SET_SELECTED_MAIN_COLOR:
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
