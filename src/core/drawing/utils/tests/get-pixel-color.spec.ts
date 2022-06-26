import { getPixelColor } from "../get-pixel-color";

describe("getPixelColor", () => {
	// prettier-ignore
	function getMockImageData() {
		return Uint8ClampedArray.of(
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
	}

	test("x=0, y=2", () => {
		const mockImageData = getMockImageData();

		const imageSize = {
			width: 3,
			height: 3,
		};

		const pixelPosition = {
			y: 2,
			x: 0,
		};

		const pixelColor = getPixelColor({
			pixelPosition,
			imageSize,
			imageData: mockImageData,
		});

		expect(pixelColor).toEqual({
			red: 1,
			green: 0,
			blue: 255,
			alpha: 128,
		});
	});

	test("x=1, y=2", () => {
		const mockImageData = getMockImageData();

		const imageSize = {
			width: 3,
			height: 3,
		};

		const pixelPosition = {
			y: 2,
			x: 1,
		};

		const pixelColor = getPixelColor({
			pixelPosition,
			imageSize,
			imageData: mockImageData,
		});

		expect(pixelColor).toEqual({
			red: 2,
			green: 0,
			blue: 255,
			alpha: 128,
		});
	});
});
