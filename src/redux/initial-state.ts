import { languages } from '../lang';
import { AppState, AvailableTools, Tabs, MouseButton } from '../types';
import { Dropdowns } from '../types';

export const initialState: AppState = {
	activeTab: Tabs.MainTools,
	canvasContext: null,
	colors: {
		color1: {red: 0, green: 0, blue: 0, alpha: 255},
		color2: {red: 255, green: 255, blue: 255, alpha: 255},
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
	mouseButtonPressedOnCanvas: MouseButton.None,
	openedDropdown: Dropdowns.none,
	preventNextAppClick: false,
	selectedTool: AvailableTools.Pencil,
	toolSize: 3,
	zoom: 1,
};
