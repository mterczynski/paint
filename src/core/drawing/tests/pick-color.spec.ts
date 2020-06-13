import { pickColor } from '../pick-color';

describe('pickColor', () => {
	test('it should return RGBA color of selected pixel on canvas', () => {
		const canvasSize = 100;
		const mockCanvas = document.createElement('canvas');
		mockCanvas.width = canvasSize;
		mockCanvas.height = canvasSize;
		const ctx = mockCanvas.getContext('2d') as CanvasRenderingContext2D;
		const x = 4;
		const y = 5;

		ctx.fillStyle = 'rgba(128, 114, 100, 1)';
		ctx.fillRect(x, y, 1, 1);

		const result = pickColor({
			canvasContextRef: ctx,
			mousePosition: {x,y},
			imageSize: {width: canvasSize, height: canvasSize}}
		);

		expect(result).toEqual({
			red: 128,
			green: 114,
			blue: 100,
			alpha: 255
		});
	});
});
