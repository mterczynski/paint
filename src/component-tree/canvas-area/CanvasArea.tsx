import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools, MouseButton, Point } from '../../types';
import './CanvasArea.scss';
import { getCursorForTool } from './cursors';
import { getMousePositionRelativeToCanvas } from './utils';
import store from '../../redux/store';
import * as actionCreators from '../../redux/action-creators';
import { usePencilDrawingStrategy } from '../../core/drawing';
import { fillWithBucket } from '../../core/drawing/fill-with-bucket';
import { pickColor } from '../../core/drawing/pick-color';
import { setColor1, setColor2 } from '../../redux/colors/colors.action-creators';

function dispatchPressedMouseButtonEvent(e: React.MouseEvent) {
	if (e.button === 0) {
		store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.Primary));
	} else if (e.button === 2) {
		store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.Secondary));
	}
}

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const mouseButtonPressedOverCanvas = useSelector((state: AppState) => state.mouseButtonPressedOnCanvas);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [lastMousePosition, setLastMousePosition] = useState<null | Point>(null);

	const cursor = getCursorForTool(selectedTool);

	function mouseUpHandler () {
		const onMouseUp = () => {
			store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.None));

			setLastMousePosition(null);
		};

		window.addEventListener('mouseup', onMouseUp);

		return () => window.removeEventListener('mouseup', onMouseUp);
	}

	function mouseMoveHandler () {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}

	function canvasContextHandler() {
		const context = canvasRef.current && canvasRef.current.getContext('2d');
		store.dispatch(actionCreators.setCanvasContext(context));

		return () => {store.dispatch(actionCreators.setCanvasContext(null));};
	}

	function onMouseMove(mouseEvent: MouseEvent) {
		if (!canvasRef.current || mouseButtonPressedOverCanvas === MouseButton.None) {
			return;
		}

		const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			usePencilDrawingStrategy({lastMousePosition, currentMousePosition});
		}

		setLastMousePosition(currentMousePosition);
	}

	function onMouseDown(e: React.MouseEvent) {
		dispatchPressedMouseButtonEvent(e);

		const storeState = store.getState();
		const context = storeState.canvasContext;

		if(!canvasRef.current || !context) return;

		const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, e);

		if(storeState.selectedTool === AvailableTools.Fill) {
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

	function onClick(mouseEvent: React.MouseEvent, mouseButton: MouseButton.Primary | MouseButton.Secondary) {
		const storeState = store.getState();

		if (!canvasRef.current || !storeState.canvasContext) {
			return;
		}

		if(storeState.selectedTool === AvailableTools.ColorPicker) {
			const mousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);
			const pickedColor = pickColor({
				canvasContextRef: storeState.canvasContext,
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

			if(mouseButton === MouseButton.Primary) {
				store.dispatch(setColor1(opaqueColor));
			} else {
				store.dispatch(setColor2(opaqueColor));
			}
		}
	}

	function fillCanvasWithWhite() {
		const storeState = store.getState();
		const context = storeState.canvasContext;

		if(!canvasRef.current || !context) return;

		const canvasWidth = storeState.imageSettings.widthInPx;
		const canvasHeight = storeState.imageSettings.heightInPx;

		context.fillStyle = 'rgb(255,255,255)'; // white
		context.fillRect(0,0, canvasWidth, canvasHeight);
	}

	useEffect(mouseUpHandler, []);
	useEffect(mouseMoveHandler, [mouseButtonPressedOverCanvas, lastMousePosition]);
	useEffect(canvasContextHandler, [canvasRef]);
	useEffect(fillCanvasWithWhite, []);

	return (
		<div className='CanvasArea'>
			<canvas className='CanvasArea__canvas' width='500' height='500'
				onMouseDown={onMouseDown}
				onClick={e => onClick(e, MouseButton.Primary)}
				onContextMenu={e => onClick(e, MouseButton.Secondary)}
				style={{ cursor }}
				ref={canvasRef}/>
		</div>
	);
};

export default CanvasArea;
