import { IndexOfMainColor, RGBAColor } from '../../types';
import { HSLColor } from '../../types/hsl-color';

export enum ColorsActionTypes {
	SET_SELECTED_MAIN_COLOR = 'SET_SELECTED_MAIN_COLOR',
	SELECT_MAIN_COLOR_INDEX = 'SELECT_MAIN_COLOR_INDEX',
	SET_COLOR_1 = 'SET_COLOR_1',
	SET_COLOR_2 = 'SET_COLOR_2',
	SET_COLOR_PICKER_COLOR = 'SET_COLOR_PICKER_COLOR',
}

export type ColorsActions = SelectMainColorIndexAction |
	SetColor1Action |
	SetColor2Action |
	SetSelectedMainColorAction |
	SetColorPickerColor;

interface SelectMainColorIndexAction {
	type: ColorsActionTypes.SELECT_MAIN_COLOR_INDEX;
	colorIndex: IndexOfMainColor;
}

interface SetColor1Action {
	type: ColorsActionTypes.SET_COLOR_1;
	newColor: RGBAColor;
}

interface SetColor2Action {
	type: ColorsActionTypes.SET_COLOR_2;
	newColor: RGBAColor;
}

interface SetColorPickerColor {
	type: ColorsActionTypes.SET_COLOR_PICKER_COLOR;
	newColor: HSLColor;
}

interface SetSelectedMainColorAction {
	type: ColorsActionTypes.SET_SELECTED_MAIN_COLOR;
	newColor: RGBAColor;
}
