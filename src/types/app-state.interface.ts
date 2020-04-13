import { AvailableTools } from '.';
import { Lang } from '../lang';
import { Dropdowns } from './';
import { RGBAColor } from './rgba-color';

export type AvailableZoomLevels = 0.125 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type IndexOfMainColor = 1 | 2;
export type ToolSize = 1 | 2 | 3 | 4;

export enum Tabs {
	MainTools = 'MainTools',
	View = 'View',
}

export interface ColorState {
	color1: RGBAColor;
	color2: RGBAColor;
	isEditColorsWindowOpened: boolean;
	lastUsedCustomColors: (null | string)[]; // array of nulls and rgb colors, size of array: 10
	selectedMainColorIndex: IndexOfMainColor;
}

export enum MouseButton {
	None = 'None',
	Primary = 'Primary',
	Secondary = 'Secondary'
}

export interface AppState {
	activeTab: Tabs;
	colors: ColorState;
	imageSettings: {
		widthInPx: number,
		heightInPx: number,
	};
	isBottomBarVisible: boolean;
	isBrushActive: boolean;
	isMaximized: boolean;
	isRibbonCollapsed: boolean;
	language: Lang;
	openedDropdown: Dropdowns;
	preventNextAppClick: boolean;
	selectedTool: AvailableTools;
	toolSize: ToolSize;
	zoom: AvailableZoomLevels;
	canvasContext: CanvasRenderingContext2D | null,
	mouseButtonPressedOnCanvas: MouseButton
}
