import { usePencilDrawingStrategy } from '..';
import { MouseButton } from '../../../types';

describe('usePencilDrawingStrategy', () => {
	test('it should draw a line using primary color when using primary mouse button', () => {
		const mockCanvas = document.createElement('canvas');
		const mockStore = {
			getState: () => ({
				canvasContext: context,
				colors: {
					color1: {red: 0, green: 0, blue: 0, alpha: 128},
					color2: {red: 255, green: 0, blue: 0, alpha: 128},
					selectedMainColorIndex: 2 as 1 | 2
				},
				mouseButtonPressedOnCanvas: MouseButton.Primary
			})
		};
		const mockLastMousePosition = {
			x: 0,
			y: 0
		};
		const mockCurrentMousePosition = {
			x: 3,
			y: 0
		};
		const context = mockCanvas.getContext('2d') as CanvasRenderingContext2D;

		usePencilDrawingStrategy({
			currentMousePosition: mockCurrentMousePosition,
			lastMousePosition: mockLastMousePosition,
			store: mockStore
		});

		expect(Array.from(context.getImageData(0, 0, 3, 2).data)).toEqual([
			255, 0, 0, 128,
			255, 0, 0, 128,
			255, 0, 0, 128,

			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0,
		]);
	});

	test('it should draw a line using secondary color when using secondary mouse button', () => {
		const mockCanvas = document.createElement('canvas');
		const mockStore = {
			getState: () => ({
				canvasContext: context,
				colors: {
					color1: {red: 0, green: 0, blue: 0, alpha: 128},
					color2: {red: 0, green: 255, blue: 255, alpha: 128},
					selectedMainColorIndex: 1 as 1 | 2
				},
				mouseButtonPressedOnCanvas: MouseButton.Secondary
			})
		};
		const mockLastMousePosition = {
			x: 0,
			y: 0
		};
		const mockCurrentMousePosition = {
			x: 3,
			y: 0
		};
		const context = mockCanvas.getContext('2d') as CanvasRenderingContext2D;

		usePencilDrawingStrategy({
			currentMousePosition: mockCurrentMousePosition,
			lastMousePosition: mockLastMousePosition,
			store: mockStore
		});

		expect(Array.from(context.getImageData(0, 0, 3, 2).data)).toEqual([
			0, 255, 255, 128,
			0, 255, 255, 128,
			0, 255, 255, 128,

			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0,
		]);
	});
});
