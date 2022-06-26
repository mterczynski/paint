import { getPixelColor } from "./utils";
import { RectangleSize } from "../../lang/types/rectangleSize.type";

interface PickColorArguments {
	canvasContext: CanvasRenderingContext2D;
	mousePosition: { x: number; y: number };
	imageSize: RectangleSize;
}

export function pickColor({
	canvasContext,
	mousePosition,
	imageSize,
}: PickColorArguments) {
	return getPixelColor({
		pixelPosition: mousePosition,
		imageSize,
		imageData: canvasContext.getImageData(
			0,
			0,
			imageSize.width,
			imageSize.height
		).data,
	});
}
