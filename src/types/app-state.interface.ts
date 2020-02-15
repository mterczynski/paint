import { AvailableTools } from ".";

type AvailableZoomLevels = 0.125 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface AppState {
	isMaximized: boolean,
	isBottomBarVisible: boolean,

	openedDropdown: any, // todo
	preventNextAppClick: boolean,

	zoom: AvailableZoomLevels,
	selection: null, // todo
	selectedTool: AvailableTools,
	isBrushActive: boolean,
	toolSize: 1 | 2 | 3 | 4,

	colors: {
		color1: string, // css color
		color2: string, // css color
		selectedMainColorIndex: 1 | 2,
		lastUsedCustomColors: Array<null | string> & {length: 10}, // array of nulls and css colors, size of array: 10
		isEditColorsWindowOpened: boolean,
	},

	imageSettings: {
		width: number, // in px
		height: number // in px
	}
}
