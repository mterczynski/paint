import { languages } from '../lang';
import { AppState, AvailableTools } from '../types';
import { Dropdowns } from '../types/dropdowns';

export const initialState: AppState = {
	language: languages.PL,
	isMaximized: false,
	isBottomBarVisible: false,

	openedDropdown: Dropdowns.none,
	preventNextAppClick: false,

	zoom: 1,
	selection: null,
	selectedTool: AvailableTools.None,
	isBrushActive: false,
	toolSize: 3,

	colors: {
		color1: 'black',
		color2: 'white',
		selectedMainColorIndex: 1,
		lastUsedCustomColors: new Array(10).fill(null),
		isEditColorsWindowOpened: false,
	},

	imageSettings: {
		width: 500,
		height: 500,
	},
};
