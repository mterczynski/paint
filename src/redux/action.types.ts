import { AvailableTools, Dropdowns, Tabs, ToolSize, MouseButton } from '../types';
import { ColorsActions } from './colors/colors.action-types';

export enum ActionTypes {
	APP_CLICK = 'APP_CLICK',
	CHANGE_BRUSH = 'CHANGE_BRUSH',
	MAXIMIZE = 'MAXIMIZE',
	SELECT_TOOL = 'SELECT_TOOL',
	SET_ACTIVE_TAB = 'SET_ACTIVE_TAB',
	SET_CANVAS_CONTEXT = 'SET_CANVAS_CONTEXT',
	SET_DROPDOWN = 'SET_DROPDOWN',
	SET_PRESSED_MOUSE_BUTTON_ON_CANVAS='SET_PRESSED_MOUSE_BUTTON_ON_CANVAS',
	SET_TOOL_SIZE = 'SET_TOOL_SIZE',
	TOGGLE_BOTTOM_BAR = 'TOGGLE_BOTTOM_BAR',
	TOGGLE_BRUSH = 'TOGGLE_BRUSH',
	TOGGLE_RIBBON = 'TOGGLE_RIBBON',
}

export type Actions = AppClickAction |
	MaximizeAction |
	SelectToolAction |
	SetActiveTabAction |
	SetCanvasContextAction |
	SetDropdownAction |
	SetPressedMouseButtonOnCanvasAction |
	SetToolSizeAction |
	ToggleBottomBarAction |
	ToggleBrushAction |
	ToggleRibbonAction |
	ColorsActions; // contains multiple actions

interface AppClickAction {
	type: ActionTypes.APP_CLICK;
}

interface MaximizeAction {
	type: ActionTypes.MAXIMIZE;
}

interface SelectToolAction {
	type: ActionTypes.SELECT_TOOL;
	toolId: AvailableTools;
}

interface SetActiveTabAction {
	type: ActionTypes.SET_ACTIVE_TAB;
	tab: Tabs;
}

interface SetCanvasContextAction {
	type: ActionTypes.SET_CANVAS_CONTEXT;
	context: CanvasRenderingContext2D | null
}

interface SetDropdownAction {
	type: ActionTypes.SET_DROPDOWN;
	dropdown: Dropdowns;
}

interface SetPressedMouseButtonOnCanvasAction {
	type: ActionTypes.SET_PRESSED_MOUSE_BUTTON_ON_CANVAS,
	newPressedButton: MouseButton
}

interface SetToolSizeAction {
	type: ActionTypes.SET_TOOL_SIZE;
	toolSize: ToolSize;
}

interface ToggleBottomBarAction {
	type: ActionTypes.TOGGLE_BOTTOM_BAR;
}

interface ToggleBrushAction {
	type: ActionTypes.TOGGLE_BRUSH;
}

interface ToggleRibbonAction {
	type: ActionTypes.TOGGLE_RIBBON;
}
