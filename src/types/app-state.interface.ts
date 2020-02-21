import { AvailableTools } from '.';
import { Lang } from '../lang';
import { Dropdowns } from './';

export type AvailableZoomLevels = 0.125 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type IndexOfMainColor = 1 | 2;
export type ToolSize = 1 | 2 | 3 | 4;

export interface ColorState {
	color1: string; // css color
	color2: string; // css color
	selectedMainColorIndex: IndexOfMainColor;
	lastUsedCustomColors: Array<null | string>; // array of nulls and css colors, size of array: 10
	isEditColorsWindowOpened: boolean;
}

export interface AppState {
	language: Lang;
	isMaximized: boolean;
	isBottomBarVisible: boolean;

	openedDropdown: Dropdowns;
	preventNextAppClick: boolean;

	zoom: AvailableZoomLevels;
	selectedTool: AvailableTools;
	isBrushActive: boolean;
	toolSize: ToolSize;

	colors: ColorState;

	imageSettings: {
		width: number, // in px
		height: number, // in px
	};
}
