import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexOfMainColor, RGBAColor } from "../types";
import { initialState } from "./initial-state";

export const colorsSlice = createSlice({
	name: "colors",
	initialState: initialState.colors,
	reducers: {
		selectMainColorIndex(state, action: PayloadAction<IndexOfMainColor>) {
			state.selectedMainColorIndex = action.payload;
		},
		setColor1(state, action: PayloadAction<RGBAColor>) {
			state.color1 = action.payload;
		},
		setColor2(state, action: PayloadAction<RGBAColor>) {
			state.color2 = action.payload;
		},
		setSelectedMainColor(state, action: PayloadAction<RGBAColor>) {
			if (state.selectedMainColorIndex === 1) {
				state.color1 = action.payload;
			} else {
				state.color2 = action.payload;
			}
		},
	},
});

export const {
	selectMainColorIndex,
	setColor1,
	setColor2,
	setSelectedMainColor,
} = colorsSlice.actions;

export const colorsReducer = colorsSlice.reducer;
