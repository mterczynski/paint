import { colorsReducer } from '../colors.reducer';
import { ActionTypes } from '../../action.types';
import { ColorState } from '../../../types';

describe('colorsReducer', () => {
	const getMockState = () => ({
		color1: {red: 0, green: 0, blue: 0, alpha: 128},
		color2: {red: 255, green: 255, blue: 255, alpha: 128},
		isEditColorsWindowOpened: false,
		lastUsedCustomColors: [],
		selectedMainColorIndex: 1 as 1 | 2
	} as ColorState);

test('SELECT_MAIN_COLOR_INDEX', () => {
		const initialState = getMockState();

		const result = colorsReducer(initialState, {
			type: ActionTypes.SELECT_MAIN_COLOR_INDEX,
			colorIndex: 2
		});

		expect(result).toEqual({
			...getMockState(),
			selectedMainColorIndex: 2
		});
	});

	describe('SET_SELECTED_MAIN_COLOR', () => {
		test('should work for primary color', () => {
			const initialState: ColorState = {
				...getMockState(),
				selectedMainColorIndex: 1
			};

			const result = colorsReducer(initialState, {
				type: ActionTypes.SET_SELECTED_MAIN_COLOR,
				newColor: {red: 0, green: 0, blue: 255, alpha: 128}
			});

			expect(result).toEqual({
				...initialState,
				color1: {red: 0, green: 0, blue: 255, alpha: 128}
			});
		});

		test('should work for secondary color', () => {
			const initialState: ColorState = {
				...getMockState(),
				selectedMainColorIndex: 2
			};

			const result = colorsReducer(initialState, {
				type: ActionTypes.SET_SELECTED_MAIN_COLOR,
				newColor: {red: 0, green: 0, blue: 255, alpha: 128}
			});

			expect(result).toEqual({
				...initialState,
				color2: {red: 0, green: 0, blue: 255, alpha: 128}
			});
		});
	});
});
