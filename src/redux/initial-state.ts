import { languages } from '../lang';
import { AppState, AvailableTools, Tabs } from '../types';
import { Dropdowns } from '../types';

export const initialState: AppState = {
	language: languages.PL,
	isMaximized: false,
	isBottomBarVisible: false,

	openedDropdown: Dropdowns.none,
	preventNextAppClick: false,

	zoom: 1,
	selectedTool: AvailableTools.Pencil,
	isBrushActive: false,
	toolSize: 3,
	activeTab: Tabs.MainTools,

	colors: {
		color1: 'rgb(0,0,0)',
		color2: 'rgb(255,255,255)',
		selectedMainColorIndex: 1,
		lastUsedCustomColors: new Array(10).fill(null),
		isEditColorsWindowOpened: false,
	},

	imageSettings: {
		widthInPx: 500,
		heightInPx: 500,
	},
};
