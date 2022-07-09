import { Point, RGBAColor } from "../../types";
import { getPixelColor } from "./utils";
import { RectangleSize } from "../../lang/types/rectangleSize.type";

interface FillWithBucketArgs {
	context: CanvasRenderingContext2D;
	mousePositionRelativeToCanvas: Point;
	canvasSize: RectangleSize;
	fillColor: RGBAColor;
}

function replacePixelColor({
	imageData,
	newColor,
	pixelPosition,
	imageSize,
}: {
	imageData: Uint8ClampedArray;
	imageSize: RectangleSize;
	newColor: RGBAColor;
	pixelPosition: Point;
}) {
	const startIndex = (pixelPosition.x + pixelPosition.y * imageSize.width) * 4;

	imageData[startIndex] = newColor.red;
	imageData[startIndex + 1] = newColor.green;
	imageData[startIndex + 2] = newColor.blue;
	imageData[startIndex + 3] = newColor.alpha;
}

function areRGBAColorsTheSame(color1: RGBAColor, color2: RGBAColor) {
	return (
		color1.red === color2.red &&
		color1.green === color2.green &&
		color1.blue === color2.blue &&
		color1.alpha === color2.alpha
	);
}

function hashPoint(point: Point) {
	return `${point.x};${point.y}`;
}

function unhashPoint(hashedPoint: string): Point {
	const splitted = hashedPoint.split(";");

	return {
		x: Number(splitted[0]),
		y: Number(splitted[1]),
	};
}

export function fillWithBucket({
	context,
	fillColor,
	canvasSize,
	mousePositionRelativeToCanvas,
}: FillWithBucketArgs) {
	const imageSize = canvasSize;
	const imageData = context.getImageData(
		0,
		0,
		canvasSize.width,
		canvasSize.height
	);

	const startX = mousePositionRelativeToCanvas.x;
	const startY = mousePositionRelativeToCanvas.y;

	const openList: Set<string> = new Set();
	const closedList: Set<string> = new Set();

	const clickedPixelColor = getPixelColor({
		imageData: imageData.data,
		imageSize,
		pixelPosition: mousePositionRelativeToCanvas,
	});

	closedList.add(hashPoint(mousePositionRelativeToCanvas));
	replacePixelColor({
		imageData: imageData.data,
		imageSize,
		newColor: fillColor,
		pixelPosition: mousePositionRelativeToCanvas,
	});

	function addTileNeighborsToOpenList(tile: { x: number; y: number }) {
		(function checkUp() {
			const up = { x: tile.x, y: tile.y - 1 };
			const hashedUp = hashPoint(up);

			if (up.y >= 0 && !closedList.has(hashedUp)) {
				openList.add(hashedUp);
			}
		})();

		(function checkRight() {
			const right = { x: tile.x + 1, y: tile.y };
			const hashedRight = hashPoint(right);

			if (right.x < imageSize.width && !closedList.has(hashedRight)) {
				openList.add(hashedRight);
			}
		})();

		(function checkDown() {
			const down = { x: tile.x, y: tile.y + 1 };
			const hashedDown = hashPoint(down);

			if (down.y < imageSize.height && !closedList.has(hashedDown)) {
				openList.add(hashedDown);
			}
		})();

		(function checkLeft() {
			const left = { x: tile.x - 1, y: tile.y };
			const hashedLeft = hashPoint(left);

			if (left.x >= 0 && !closedList.has(hashedLeft)) {
				openList.add(hashedLeft);
			}
		})();
	}

	addTileNeighborsToOpenList(mousePositionRelativeToCanvas);

	while (openList.size > 0) {
		const [hashedTile] = openList;
		const tile = unhashPoint(hashedTile);
		const tileColor = getPixelColor({
			pixelPosition: tile,
			imageData: imageData.data,
			imageSize,
		});

		// check if the tile should be painted
		if (areRGBAColorsTheSame(tileColor, clickedPixelColor)) {
			// if yes, paint it, add it to closed list, add its adjacent tiles to open list (if they are not there)
			replacePixelColor({
				imageData: imageData.data,
				imageSize,
				newColor: fillColor,
				pixelPosition: tile,
			});
			addTileNeighborsToOpenList(tile);
		}

		closedList.add(hashedTile);
		openList.delete(hashedTile);
	}

	context.putImageData(imageData, 0, 0);
}
