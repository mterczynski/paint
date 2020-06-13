import { Point, RGBAColor } from '../../../types';
import { RectangleSize } from '../../../lang/types/rectangleSize.type';

export function getPixelColor({pixelPosition, imageData, imageSize}: {
	pixelPosition: Point
	imageData: Uint8ClampedArray,
	imageSize: RectangleSize
}): RGBAColor {
	const {x, y} = pixelPosition;
	const startIndex = (y * imageSize.width + x) * 4;

	return {
		red: imageData[startIndex],
		green: imageData[startIndex + 1],
		blue: imageData[startIndex + 2],
		alpha: imageData[startIndex + 3],
	};
}
