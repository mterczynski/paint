import { getPixelColor } from './utils';
import { RectangleSize } from '../../lang/types/rectangleSize.type';

interface PickColorArguments {
	canvasContextRef: CanvasRenderingContext2D,
	mousePosition: {x: number, y: number},
	imageSize: RectangleSize
}

export function pickColor({canvasContextRef, mousePosition, imageSize}: PickColorArguments) {
	return getPixelColor({
		pixelPosition: mousePosition,
		imageSize,
		imageData: canvasContextRef.getImageData(0, 0, imageSize.width, imageSize.height).data
	});
}
