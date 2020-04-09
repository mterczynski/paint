import { usePencilDrawingStrategy } from '..';
import { MouseButton } from '../../../types';

describe('usePencilDrawingStrategy', () => {
	test('it should execute without error', () => {
			const mockCanvas = document.createElement('canvas');
			const mockStore = {
				getState: () => ({
					canvasContext: context,
					colors: {
						color1: 'black',
						color2: 'red',
						selectedMainColorIndex: 2 as 2
					},
					mouseButtonPressedOnCanvas: MouseButton.Primary
				})
			};
			const mockLastMousePosition = {
				x: 500,
				y: 500
			};
			const mockCurrentMousePosition = {
				x: 600,
				y: 600
			};
			const context = mockCanvas.getContext('2d') as CanvasRenderingContext2D;

			usePencilDrawingStrategy({
				currentMousePosition: mockCurrentMousePosition,
				lastMousePosition: mockLastMousePosition,
				store: mockStore
			});
	});
});
