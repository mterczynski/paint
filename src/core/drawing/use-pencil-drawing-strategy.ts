import store from '../../redux/store';
import { MouseButton } from '../../types';
import { drawLine } from '../../components/canvas-area/utils';

export function usePencilDrawingStrategy({lastMousePosition, currentMousePosition}: {
	lastMousePosition,
	currentMousePosition,
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
