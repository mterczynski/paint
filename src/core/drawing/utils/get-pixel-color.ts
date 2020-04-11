import { Point } from '../../../types';

interface RGBAColor {
	red: number,
	green: number,
	blue: number,
	alpha: number
}

interface RectangleSize {
	height: number,
	width: number
}

export function getPixelColor({pixelPosition, imageData, imageSize}: {
	pixelPosition: Point
	imageData: Uint8ClampedArray,
	imageSize: RectangleSize
}): RGBAColor {
	const {x, y} = pixelPosition;
	const startIndex = y * imageSize.width * 4 + x;

	return {
		red: imageData[startIndex],
		green: imageData[startIndex + 1],
		blue: imageData[startIndex + 2],
		alpha: imageData[startIndex + 3],
	};
}
