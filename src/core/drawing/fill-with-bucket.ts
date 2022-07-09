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
	const start = Date.now();
	let timeSpentReplacing = 0;
	let timeSpentGettingPixelColors = 0;
	let timeSpentCheckingIfColorsAreTheSame = 0;
	let timeSpentInAddTileNeighborsToOpenList = 0;
	let timeSpentInWhile = 0;
	let timeSpentInTestMark = 0;
	let timeSpentUnhashing = 0;
	let timeSpentHashing = 0;

	const imageSize = canvasSize;
	const imageData = context.getImageData(
		0,
		0,
		canvasSize.width,
		canvasSize.height
	);

	const startX = mousePositionRelativeToCanvas.x;
	const startY = mousePositionRelativeToCanvas.y;

	const openList: Map<string, 1> = new Map();
	const closedList: Map<string, 1> = new Map();

	const clickedPixelColor = getPixelColor({
		imageData: imageData.data,
		imageSize,
		pixelPosition: mousePositionRelativeToCanvas,
	});

	const beforeHash = Date.now();
	const hashedPoint = hashPoint(mousePositionRelativeToCanvas);
	const afterHash = Date.now();

	timeSpentHashing += afterHash - beforeHash;

	closedList.set(hashedPoint, 1);
	replacePixelColor({
		imageData: imageData.data,
		imageSize,
		newColor: fillColor,
		pixelPosition: mousePositionRelativeToCanvas,
	});

	function addTileNeighborsToOpenList(tile: { x: number; y: number }) {
		const beforeAddTileNeighborsToOpenList = Date.now();
		function isNotOnAnyList(hashedPoint: string) {
			return !openList.has(hashedPoint) && !closedList.has(hashedPoint);
		}

		(function checkUp() {
			const up = { x: tile.x, y: tile.y - 1 };
			const hashedUp = hashPoint(up);

			if (up.y >= 0 && isNotOnAnyList(hashedUp)) {
				openList.set(hashedUp, 1);
			}
		})();

		(function checkRight() {
			const right = { x: tile.x + 1, y: tile.y };
			const hashedRight = hashPoint(right);

			if (right.x < imageSize.width && isNotOnAnyList(hashedRight)) {
				openList.set(hashedRight, 1);
			}
		})();

		(function checkDown() {
			const down = { x: tile.x, y: tile.y + 1 };
			const hashedDown = hashPoint(down);

			if (down.y < imageSize.height && isNotOnAnyList(hashedDown)) {
				openList.set(hashedDown, 1);
			}
		})();

		(function checkLeft() {
			const left = { x: tile.x - 1, y: tile.y };
			const hashedLeft = hashPoint(left);

			if (left.x >= 0 && isNotOnAnyList(hashedLeft)) {
				openList.set(hashedLeft, 1);
			}
		})();

		const afterAddTileNeighborsToOpenList = Date.now();

		timeSpentInAddTileNeighborsToOpenList =
			afterAddTileNeighborsToOpenList - beforeAddTileNeighborsToOpenList;
	}

	addTileNeighborsToOpenList({ x: startX, y: startY });

	while (openList.size > 0) {
		const beforeWhileIteration = Date.now();
		const beforeTestMark = Date.now();
		const [[hashedTile]] = openList;
		const beforeUnHash = Date.now();
		const tile = unhashPoint(hashedTile);
		const afterUnhash = Date.now();
		timeSpentUnhashing += afterUnhash - beforeUnHash;

		const beforeGetPixelColor = Date.now();
		const tileColor = getPixelColor({
			pixelPosition: tile,
			imageData: imageData.data,
			imageSize,
		});
		const afterGetPixelColor = Date.now();

		timeSpentGettingPixelColors += afterGetPixelColor - beforeGetPixelColor;

		const beforeAreColorsTheSame = Date.now();
		const areColorsTheSame = areRGBAColorsTheSame(tileColor, clickedPixelColor);
		const afterAreColorsTheSame = Date.now();

		timeSpentCheckingIfColorsAreTheSame =
			afterAreColorsTheSame - beforeAreColorsTheSame;

		const afterTestMark = Date.now();
		timeSpentInTestMark += afterTestMark - beforeTestMark;

		// check if the tile should be painted
		if (areRGBAColorsTheSame(tileColor, clickedPixelColor)) {
			const beforeReplace = Date.now();
			// if yes, paint it, add it to closed list, add its adjacent tiles to open list (if they are not there)
			replacePixelColor({
				imageData: imageData.data,
				imageSize,
				newColor: fillColor,
				pixelPosition: tile,
			});
			const afterReplace = Date.now();

			timeSpentReplacing += afterReplace - beforeReplace;

			addTileNeighborsToOpenList(tile);
		}

		closedList.set(hashedTile, 1);
		openList.delete(hashedTile);
		const afterWhileIteration = Date.now();

		timeSpentInWhile += afterWhileIteration - beforeWhileIteration;
	}

	const beforePutImageData = Date.now();
	context.putImageData(imageData, 0, 0);
	const afterPutImageData = Date.now();

	const end = Date.now();
	console.log({
		total: end - start,
		timeSpentReplacing,
		timeSpentGettingPixelColors,
		timeSpentCheckingIfColorsAreTheSame,
		timeSpentPuttingImageData: afterPutImageData - beforePutImageData,
		timeSpentInAddTileNeighborsToOpenList,
		timeSpentInWhile,
		timeSpentInTestMark,
		timeSpentUnhashing,
		timeSpentHashing,
	});
}
