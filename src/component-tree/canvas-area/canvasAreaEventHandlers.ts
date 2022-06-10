import { fillWithBucket } from '../../core/drawing';
import {store} from '../../redux/store';
import { getMousePositionRelativeToCanvas } from './utils';
import { AvailableTools, MouseButton } from '../../types';
import { pickColor } from '../../core/drawing/pick-color';
import { setColor1, setColor2 } from '../../redux/colors/colors.action-creators';
import { getCanvasContext } from '../../core/drawing/utils/get-canvas-context';

export const canvasAreaEventHandlers = {
	click: {
		pickColorIfNeeded(canvasRef: React.RefObject<HTMLCanvasElement>, mouseEvent: React.MouseEvent, mouseButton: MouseButton) {
			const storeState = store.getState();
			const canvasContext = getCanvasContext(canvasRef);

			if (!canvasRef.current || !canvasContext) {
				return;
			}


			if (storeState.selectedTool === AvailableTools.ColorPicker) {
				const mousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);
				const pickedColor = pickColor({
					canvasContext,
					mousePosition,
					imageSize: {
						width: storeState.imageSettings.widthInPx,
						height: storeState.imageSettings.heightInPx,
					}
				});

				const opaqueColor = {
					...pickedColor,
					alpha: 255
				};

				if (mouseButton === MouseButton.Primary) {
					store.dispatch(setColor1(opaqueColor));
				} else {
					store.dispatch(setColor2(opaqueColor));
				}
			}
		}
	},
	mouseDown: {
		fillWithBucketIfNeeded(canvasRef: React.RefObject<HTMLCanvasElement>, clickEvent: React.MouseEvent) {
			const storeState = store.getState();
			const context = getCanvasContext(canvasRef);

			if (!canvasRef.current || !context) return;

			const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, clickEvent);

			if (storeState.selectedTool === AvailableTools.Fill) {
				const fillColor = storeState.mouseButtonPressedOnCanvas === MouseButton.Primary ?
					storeState.colors.color1 :
					storeState.colors.color2;

				fillWithBucket({
					context,
					mousePositionRelativeToCanvas: currentMousePosition,
					fillColor,
					canvasSize: {
						width: storeState.imageSettings.widthInPx,
						height: storeState.imageSettings.heightInPx,
					}
				});
			}
		}
	}
};
