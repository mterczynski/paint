import { languages } from '../lang';
import { AppState, AvailableTools, Tabs } from '../types';
import { Dropdowns } from '../types';

export const initialState: AppState = {
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
	isBottomBarVisible: false,
	isBrushActive: false,
	isMaximized: false,
	isRibbonCollapsed: false,
	language: languages.PL,
	openedDropdown: Dropdowns.none,
	preventNextAppClick: false,
	selectedTool: AvailableTools.Pencil,
	toolSize: 3,
	zoom: 1,
};
