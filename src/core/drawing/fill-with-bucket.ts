import { Point } from '../../types';

interface FillWithBucketArgs {
	context: CanvasRenderingContext2D,
	mousePositionRelativeToCanvas: Point,
	canvasSize: {
		height: number,
		width: number
	}
	fillColor: string
}

export function fillWithBucket({context, fillColor, canvasSize, mousePositionRelativeToCanvas}: FillWithBucketArgs) {
	const imageData = context.getImageData(0, 0, canvasSize.width, canvasSize.height).data;
	const imageDataPixels = imageData.join(',')
		.replace(/(\d+,\d+,\d+,\d+),/g, '$1x')
		.split('x')
		.map(subArray => subArray.split(',').map(value => Number(value)));

	context.putImageData(imageData);
}
