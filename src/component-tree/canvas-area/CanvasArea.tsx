import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { drawWithPencil } from '../../core/drawing';
import * as actionCreators from '../../redux/action-creators';
import store from '../../redux/store';
import { AppState, AvailableTools, MouseButton, Point } from '../../types';
import './CanvasArea.scss';
import { canvasAreaEventHandlers } from './canvasAreaEventHandlers';
import { getCursorForTool } from './cursors';
import { getMousePositionRelativeToCanvas } from './utils';

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

	function mouseUpHandler() {
		const onMouseUp = () => {
			store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.None));

			setLastMousePosition(null);
		};

		window.addEventListener('mouseup', onMouseUp);

		return () => window.removeEventListener('mouseup', onMouseUp);
	}

	function mouseMoveHandler() {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}

	function canvasContextHandler() {
		const context = canvasRef.current && canvasRef.current.getContext('2d');
		store.dispatch(actionCreators.setCanvasContext(context));

		return () => { store.dispatch(actionCreators.setCanvasContext(null)); };
	}

	const onMouseMove = useCallback((mouseEvent: MouseEvent) => {
		if (!canvasRef.current || mouseButtonPressedOverCanvas === MouseButton.None) {
			return;
		}

		const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			drawWithPencil({ lastMousePosition, currentMousePosition });
		}

		setLastMousePosition(currentMousePosition);
	}, [mouseButtonPressedOverCanvas, lastMousePosition, selectedTool]);

	function onMouseDown(e: React.MouseEvent) {
		dispatchPressedMouseButtonEvent(e);
		canvasAreaEventHandlers.mouseDown.fillWithBucketIfNeeded(canvasRef, e);
	}

	function onClick(mouseEvent: React.MouseEvent, mouseButton: MouseButton.Primary | MouseButton.Secondary) {
		canvasAreaEventHandlers.click.pickColorIfNeeded(canvasRef, mouseEvent, mouseButton);
	}

	function fillCanvasWithWhite() {
		const storeState = store.getState();
		const context = storeState.canvasContext;

		if (!canvasRef.current || !context) return;

		const canvasWidth = storeState.imageSettings.widthInPx;
		const canvasHeight = storeState.imageSettings.heightInPx;

		context.fillStyle = 'rgb(255,255,255)'; // white
		context.fillRect(0, 0, canvasWidth, canvasHeight);
	}

	useEffect(mouseUpHandler, []);
	useEffect(mouseMoveHandler, [mouseButtonPressedOverCanvas, lastMousePosition, onMouseMove]);
	useEffect(canvasContextHandler, [canvasRef]);
	useEffect(fillCanvasWithWhite, []);

	return (
		<div className='CanvasArea'>
			<canvas className='CanvasArea__canvas' width='500' height='500'
				onMouseDown={onMouseDown}
				onClick={e => onClick(e, MouseButton.Primary)}
				onContextMenu={e => onClick(e, MouseButton.Secondary)}
				style={{ cursor }}
				ref={canvasRef} />
		</div>
	);
};

export default CanvasArea;
