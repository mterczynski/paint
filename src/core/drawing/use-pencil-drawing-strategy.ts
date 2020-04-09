import reduxStore from '../../redux/store';
import { MouseButton, Point } from '../../types';
import { drawLine } from '../../components/canvas-area/utils';

export function usePencilDrawingStrategy({lastMousePosition, currentMousePosition, store = reduxStore}: {
	lastMousePosition?: Point,
	currentMousePosition: Point,
	store?: {
		getState: () => {
			mouseButtonPressedOnCanvas: MouseButton,
			canvasContext: CanvasRenderingContext2D | null,
			colors: {
				color1: string,
				color2: string,
				selectedMainColorIndex: 1 | 2
			}
		}
	}
}) {
	const storeState = store.getState();
	const mouseButtonPressedOnCanvas = storeState.mouseButtonPressedOnCanvas;
	const context = storeState.canvasContext;

	if(!context) return;

	const firstColor = storeState.colors.color1;
	const secondColor = storeState.colors.color2;

	const mainColor = storeState.colors.selectedMainColorIndex === 1 ? firstColor : secondColor;
	const secondaryColor = mainColor === firstColor ? secondColor : firstColor;

	const drawingColor = mouseButtonPressedOnCanvas === MouseButton.Primary ? mainColor : secondaryColor;

		if (lastMousePosition) {
			drawLine({
				context,
				color: drawingColor,
				from: lastMousePosition,
				to: currentMousePosition,
			});
		}
}
