import { Point, RGBAColor } from '../../types';
import { getPixelColor } from './utils';

interface RectangleSize {
	height: number,
	width: number
}

interface FillWithBucketArgs {
	context: CanvasRenderingContext2D,
	mousePositionRelativeToCanvas: Point,
	canvasSize: RectangleSize,
	fillColor: RGBAColor
}

function replacePixelColor({ imageData, newColor, pixelPosition, imageSize }: {
	imageData: Uint8ClampedArray,
	imageSize: RectangleSize
	newColor: RGBAColor,
	pixelPosition: Point
}) {
	const startIndex = (pixelPosition.x + pixelPosition.y * imageSize.width) * 4;

	imageData[startIndex] = newColor.red;
	imageData[startIndex + 1] = newColor.green;
	imageData[startIndex + 2] = newColor.blue;
	imageData[startIndex + 3] = newColor.alpha;
}

function areRGBAColorsTheSame(color1: RGBAColor, color2: RGBAColor) {
	return color1.red === color2.red &&
		color1.green === color2.green &&
		color1.blue === color2.blue &&
		color1.alpha === color2.alpha;
}

export function fillWithBucket({ context, fillColor, canvasSize, mousePositionRelativeToCanvas }: FillWithBucketArgs) {
	const imageSize = canvasSize;
	const imageData = context.getImageData(0, 0, canvasSize.width, canvasSize.height);

	const startX = mousePositionRelativeToCanvas.x;
	const startY = mousePositionRelativeToCanvas.y;

	const openList: { x: number, y: number }[] = [];
	const closedList: { x: number, y: number }[] = [];

	const clickedPixelColor = getPixelColor({
		imageData: imageData.data,
		imageSize,
		pixelPosition: mousePositionRelativeToCanvas
	});

	closedList.push(mousePositionRelativeToCanvas);
	replacePixelColor({
		imageData: imageData.data,
		imageSize,
		newColor: fillColor,
		pixelPosition: mousePositionRelativeToCanvas
	});

	function addTileNeighborsToOpenList(tile: { x: number, y: number }) {

		(function checkUp() {
			const comparisonFn = el => el.x === up.x && el.y === up.y;
			const up = { x: tile.x, y: tile.y - 1 };

			if (up.y >= 0 && !closedList.some(comparisonFn) && !openList.some(comparisonFn)) {
				openList.push(up);
			}
		})();

		(function checkRight() {
			const comparisonFn = el => el.x === right.x && el.y === right.y;
			const right = { x: tile.x + 1, y: tile.y };

			if (right.x < imageSize.width && !closedList.some(comparisonFn) && !openList.some(comparisonFn)) {
				openList.push(right);
			}
		})();

		(function checkDown() {
			const comparisonFn = el => el.x === down.x && el.y === down.y;
			const down = { x: tile.x, y: tile.y + 1 };

			if (down.y < imageSize.height && !closedList.some(comparisonFn) && !openList.some(comparisonFn)) {
				openList.push(down);
			}

		})();

		(function checkLeft() {
			const comparisonFn = el => el.x === left.x && el.y === left.y;
			const left = { x: tile.x - 1, y: tile.y };

			if (left.x >= 0 && !closedList.some(comparisonFn) && !openList.some(comparisonFn)) {
				openList.push(left);
			}
		})();
	}

	addTileNeighborsToOpenList({ x: startX, y: startY });

	while (openList.length > 0) {
		const tile = openList[0];
		const tileColor = getPixelColor({ pixelPosition: tile, imageData: imageData.data, imageSize });

		// check if the tile should be painted
		if (areRGBAColorsTheSame(tileColor, clickedPixelColor)) {
			// if yes, paint it, add it to closed list, add its adjacent tiles to open list (if they are not there)
			replacePixelColor({ imageData: imageData.data, imageSize, newColor: fillColor, pixelPosition: tile });
			addTileNeighborsToOpenList(tile);
		}

		closedList.push(tile);

		openList.shift();
	}

	context.putImageData(imageData, 0, 0);
}
