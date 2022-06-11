import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, AvailableTools, Dropdowns, MouseButton, Popup, Tabs, ToolSize } from '../types';
import { colorsReducer } from './colors-slice';
import { initialState } from './initial-state';

export const rootSlice = createSlice({
	name: 'root',
	initialState,
	reducers: {
		appClick(state) {
			if(!state.preventNextAppClick) {
				state.openedDropdown = Dropdowns.none;
			}
			state.preventNextAppClick = false;
		},
		maximize(state) {
			state.isMaximized = true;
		},
		selectTool(state, action: PayloadAction<AvailableTools>) {
			state.selectedTool = action.payload;
		},
		setActiveTab(state, action: PayloadAction<Tabs>) {
			state.activeTab = action.payload;
		},
		setDropdown(state, action: PayloadAction<Dropdowns>) {
			state.openedDropdown = action.payload;
			state.openedPopup = Popup.none;
			state.preventNextAppClick = true;
		},
		setPopup(state, action: PayloadAction<Popup>) {
			state.openedPopup = action.payload;
			state.openedDropdown = Dropdowns.none;
		},
		setPressedMouseButtonOnCanvas(state, action: PayloadAction<MouseButton>) {
			state.mouseButtonPressedOnCanvas = action.payload
		},
		setToolSize(state, action: PayloadAction<ToolSize>) {
			state.toolSize = action.payload;
		},
		toggleBottomBar(state) {
			state.isBottomBarVisible = !state.isBottomBarVisible;
		},
		toggleBrush(state) {
			state.isBrushActive = !state.isBrushActive;
		},
		toggleRibbon(state) {
			state.isRibbonCollapsed = !state.isRibbonCollapsed;
		}
	},
})

export const { appClick, maximize, selectTool, setActiveTab,
	setDropdown, setPopup, setPressedMouseButtonOnCanvas, setToolSize,
	toggleBottomBar, toggleBrush, toggleRibbon,
} = rootSlice.actions;

const rootReducerWithoutChildReducers = rootSlice.reducer;

export const rootReducer = (state: AppState | undefined, action: any) => {
	return {
		...rootReducerWithoutChildReducers(state, action),
		// child reducers are added here:
		colors: colorsReducer(state?.colors, action),
	}
}
