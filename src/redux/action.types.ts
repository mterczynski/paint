import { AvailableTools, Dropdowns, Tabs, ToolSize, MouseButton } from '../types';
import { ColorsActions } from './colors/colors.action-types';

export enum GenericActionTypes {
	APP_CLICK = 'APP_CLICK',
	CHANGE_BRUSH = 'CHANGE_BRUSH',
	MAXIMIZE = 'MAXIMIZE',
	SELECT_TOOL = 'SELECT_TOOL',
	SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
	SET_CANVAS_CONTEXT = 'SET_CANVAS_CONTEXT',
	SET_DROPDOWN = 'SET_DROPDOWN',
	SET_PRESSED_MOUSE_BUTTON_ON_CANVAS = 'SET_PRESSED_MOUSE_BUTTON_ON_CANVAS',
	SET_TOOL_SIZE = 'SET_TOOL_SIZE',
	TOGGLE_BOTTOM_BAR = 'TOGGLE_BOTTOM_BAR',
	TOGGLE_BRUSH = 'TOGGLE_BRUSH',
	TOGGLE_RIBBON = 'TOGGLE_RIBBON',
}

export type GenericActions = AppClickAction |
	MaximizeAction |
	SelectToolAction |
	SetActiveTabAction |
	SetCanvasContextAction |
	SetDropdownAction |
	SetPressedMouseButtonOnCanvasAction |
	SetToolSizeAction |
	ToggleBottomBarAction |
	ToggleBrushAction |
	ToggleRibbonAction;

export type Actions = GenericActions | ColorsActions;

interface AppClickAction {
	type: GenericActionTypes.APP_CLICK;
}

interface MaximizeAction {
	type: GenericActionTypes.MAXIMIZE;
}

interface SelectToolAction {
	type: GenericActionTypes.SELECT_TOOL;
	toolId: AvailableTools;
}

interface SetActiveTabAction {
	type: GenericActionTypes.SET_ACTIVE_TAB;
	tab: Tabs;
}

interface SetCanvasContextAction {
	type: GenericActionTypes.SET_CANVAS_CONTEXT;
	context: CanvasRenderingContext2D | null
}

interface SetDropdownAction {
	type: GenericActionTypes.SET_DROPDOWN;
	dropdown: Dropdowns;
}

interface SetPressedMouseButtonOnCanvasAction {
	type: GenericActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS,
	newPressedButton: MouseButton
}

interface SetToolSizeAction {
	type: GenericActionTypes.SET_TOOL_SIZE;
	toolSize: ToolSize;
}

interface ToggleBottomBarAction {
	type: GenericActionTypes.TOGGLE_BOTTOM_BAR;
}

interface ToggleBrushAction {
	type: GenericActionTypes.TOGGLE_BRUSH;
}

interface ToggleRibbonAction {
	type: GenericActionTypes.TOGGLE_RIBBON;
}
