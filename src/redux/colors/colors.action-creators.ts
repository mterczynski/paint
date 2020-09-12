import { ColorsActionTypes, ColorsActions } from './colors.action-types';
import { RGBAColor, IndexOfMainColor } from '../../types';
import { HSLColor } from '../../types/hsl-color';

export const selectMainColorIndex = (colorIndex: IndexOfMainColor): ColorsActions => {
	return { type: ColorsActionTypes.SELECT_MAIN_COLOR_INDEX, colorIndex };
};

export const setColor1 = (newColor: RGBAColor): ColorsActions => {
	return { type: ColorsActionTypes.SET_COLOR_1, newColor };
};

export const setColor2 = (newColor: RGBAColor): ColorsActions => {
	return { type: ColorsActionTypes.SET_COLOR_2, newColor };
};

export const setSelectedMainColor = (newColor: RGBAColor): ColorsActions => {
	return { type: ColorsActionTypes.SET_SELECTED_MAIN_COLOR, newColor };
};

export const setColorPickerColor = (newColor: HSLColor): ColorsActions => {
	return {type: ColorsActionTypes.SET_COLOR_PICKER_COLOR, newColor};
};
