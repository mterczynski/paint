import { IndexOfMainColor, RGBAColor } from '../../types';

export enum ColorsActionTypes {
	SET_SELECTED_MAIN_COLOR = 'SET_SELECTED_MAIN_COLOR',
	SELECT_MAIN_COLOR_INDEX = 'SELECT_MAIN_COLOR_INDEX',
	SET_COLOR_1 = 'SET_COLOR_1',
	SET_COLOR_2 = 'SET_COLOR_2',
}

export type ColorsActions = SelectMainColorIndexAction |
	SetColor1Action |
	SetColor2Action |
	SetSelectedMainColorAction;

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

interface SetSelectedMainColorAction {
	type: ColorsActionTypes.SET_SELECTED_MAIN_COLOR;
	newColor: RGBAColor;
}
