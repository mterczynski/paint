import { getMousePositionRelativeToCanvas } from '../get-mouse-position-relative-to-canvas';

describe('getMousePositionRelativeToCanvas', () => {
	test('should return mouse coordinates inside a canvas', () => {
		const expected = {x: 450, y: 450};

		const mockMousePosition = {clientX: 500, clientY: 500};
		const mockCanvas = {
			getBoundingClientRect() {
				return {
					left: 50,
					top: 50,
				};
			},
		};

		const result = getMousePositionRelativeToCanvas(mockCanvas, mockMousePosition);

		expect(result).toEqual(expected);
	});
});
