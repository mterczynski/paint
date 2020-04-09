import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools, MouseButton } from '../../types';
import './CanvasArea.scss';
import { cursors } from './cursors';
import { Point } from './types';
import { getMousePositionRelativeToCanvas } from './utils';
import store from '../../redux/store';
import * as actionCreators from '../../redux/action-creators';
import { usePencilDrawingStrategy } from '../../core/drawing';

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const mouseButtonPressedOverCanvas = useSelector((state: AppState) => state.mouseButtonPressedOnCanvas);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [lastMousePosition, setLastMousePosition] = useState<null | Point>(null);

	const cursor: string = cursors[selectedTool];

	useEffect(() => {
		const onMouseUp = () => {
			store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.None));

			setLastMousePosition(null);
		};

		window.addEventListener('mouseup', onMouseUp);

		return () => window.removeEventListener('mouseup', onMouseUp);
	}, []);

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}, [mouseButtonPressedOverCanvas, lastMousePosition]);

	useEffect(() => {
		const context = canvasRef.current && canvasRef.current.getContext('2d');
		store.dispatch(actionCreators.setCanvasContext(context));

		return () => {store.dispatch(actionCreators.setCanvasContext(null));};
	}, [canvasRef]);

	function onMouseMove(mouseEvent: MouseEvent) {
		if (!canvasRef.current || mouseButtonPressedOverCanvas === MouseButton.None) {
			return;
		}

		const context = store.getState().canvasContext;

		if(!context) {
			return;
		}

		const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			usePencilDrawingStrategy({lastMousePosition, currentMousePosition});
		}

		setLastMousePosition(currentMousePosition);
	}

	function onMouseDown(e: React.MouseEvent) {
		if (e.button === 0) {
			store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.Primary));
		} else if (e.button === 2) {
			store.dispatch(actionCreators.setPressedMouseButtonOnCanvas(MouseButton.Secondary));
		}
	}

	return (
		<div className='CanvasArea'>
			<canvas className='CanvasArea__canvas' width='500' height='500'
				onMouseDown={onMouseDown}
				style={{ cursor }}
				ref={canvasRef}/>
		</div>
	);
};

export default CanvasArea;
