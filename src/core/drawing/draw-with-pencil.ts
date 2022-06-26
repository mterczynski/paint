import { store as reduxStore } from "../../redux/store";
import { MouseButton, Point, RGBAColor } from "../../types";
import { drawLine } from "../../component-tree/canvas-area/utils";
import { rgbaColorToCssColor } from "./utils";

export function drawWithPencil({
	canvasContext,
	lastMousePosition,
	currentMousePosition,
	store = reduxStore,
}: {
	canvasContext: CanvasRenderingContext2D;
	lastMousePosition?: Point;
	currentMousePosition: Point;
	store?: {
		getState: () => {
			mouseButtonPressedOnCanvas: MouseButton;
			colors: {
				color1: RGBAColor;
				color2: RGBAColor;
				selectedMainColorIndex: 1 | 2;
			};
		};
	};
}) {
	const storeState = store.getState();
	const mouseButtonPressedOnCanvas = storeState.mouseButtonPressedOnCanvas;

	if (!canvasContext) return;

	const firstColor = storeState.colors.color1;
	const secondColor = storeState.colors.color2;

	const mainColor =
		storeState.colors.selectedMainColorIndex === 1 ? firstColor : secondColor;
	const secondaryColor = mainColor === firstColor ? secondColor : firstColor;

	const drawingColor =
		mouseButtonPressedOnCanvas === MouseButton.Primary
			? mainColor
			: secondaryColor;

	if (lastMousePosition) {
		drawLine({
			context: canvasContext,
			color: rgbaColorToCssColor(drawingColor),
			from: lastMousePosition,
			to: currentMousePosition,
		});
	}
}
