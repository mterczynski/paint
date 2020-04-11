import { getPixelColor } from '../get-pixel-color';

describe('getPixelColor', () => {
	test('it should return pixel color when provided with image data and pixel position', () => {
		const mockImageData = Uint8ClampedArray.of(
			255, 1, 0, 128,
			255, 2, 0, 128,
			255, 3, 0, 128,

			1, 255, 0, 128,
			2, 255, 0, 128,
			3, 255, 0, 128,

			1, 0, 255, 128,
			2, 0, 255, 128,
			3, 0, 255, 128,
		);

		const imageSize = {
			width: 3,
			height: 3
		};

		const pixelPosition = {
			y: 2,
			x: 0
		};

		const pixelColor = getPixelColor({
			pixelPosition,
			imageSize,
			imageData: mockImageData
		});

		expect(pixelColor).toEqual({
			red: 1,
			green: 0,
			blue: 255,
			alpha: 128
		});
	});
});
