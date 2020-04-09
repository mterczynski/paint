import { colorReducer } from '../colors.reducer';
import { ActionTypes } from '../../action.types';
import { ColorState } from '../../../types';

describe('colorsReducer', () => {
const getMockState = () => ({
		color1: 'red',
		color2: 'white',
		isEditColorsWindowOpened: false,
		lastUsedCustomColors: [],
		selectedMainColorIndex: 1 as 1 | 2
	} as ColorState);

test('SELECT_MAIN_COLOR_INDEX', () => {
		const initialState = getMockState();

		const result = colorReducer(initialState, {
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

			const result = colorReducer(initialState, {
				type: ActionTypes.SET_SELECTED_MAIN_COLOR,
				newColor: 'blue'
			});

			expect(result).toEqual({
				...initialState,
				color1: 'blue'
			});
		});

		test('should work for secondary color', () => {
			const initialState: ColorState = {
				...getMockState(),
				selectedMainColorIndex: 2
			};

			const result = colorReducer(initialState, {
				type: ActionTypes.SET_SELECTED_MAIN_COLOR,
				newColor: 'blue'
			});

			expect(result).toEqual({
				...initialState,
				color2: 'blue'
			});
		});
	});
});
