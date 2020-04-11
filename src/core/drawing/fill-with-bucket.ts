import { Point } from '../../types';
import { getPixelColor } from './utils';

interface RectangleSize {
	height: number,
	width: number
}

interface FillWithBucketArgs {
	context: CanvasRenderingContext2D,
	mousePositionRelativeToCanvas: Point,
	canvasSize: RectangleSize,
	fillColor: string
}

export function fillWithBucket({context, fillColor, canvasSize, mousePositionRelativeToCanvas}: FillWithBucketArgs) {

	const imageData = context.getImageData(0, 0, canvasSize.width, canvasSize.height).data;
	// const imageDataPixels = imageData.join(',')
	// 	.replace(/(\d+,\d+,\d+,\d+),/g, '$1x')
	// 	.split('x')
	// 	.map(subArray => subArray.split(',').map(value => Number(value)));

	const startX = mousePositionRelativeToCanvas.x;
	const startY = mousePositionRelativeToCanvas.y;

	const openList: {x: number, y: number}[] = [];
	const closedList: {x: number, y: number}[] = [];

	// const clickedPixelColor = getPixelColor({...mousePositionRelativeToCanvas, imageSize: canvasSize, imageData});
}
