import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools } from '../../types';
import './CanvasArea.scss';
import { cursors } from './cursors';
import { Point } from './types';
import { drawLine, getMousePositionRelativeToCanvas } from './utils';

enum DrawingColor {
	None = 0,
	Main = 1,
	Secondary = 2,
}

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const colors = useSelector((state: AppState) => state.colors);

	const selectedColor = colors.selectedMainColorIndex === 1 ? colors.color1 : colors.color2;
	const secondaryColor = colors.selectedMainColorIndex === 1 ? colors.color2 : colors.color1;

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [lastMousePosition, setLastMousePosition] = useState<null | Point>(null);
	const [drawingColorMode, setDrawingColorMode] = useState(DrawingColor.None);

	const cursor: string = cursors[selectedTool];

	useEffect(() => {
		const onMouseUp = () => {
			setDrawingColorMode(DrawingColor.None);
			setLastMousePosition(null);
		};

		window.addEventListener('mouseup', onMouseUp);

		return () => window.removeEventListener('mouseup', onMouseUp);
	}, []);

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove);
		return () => window.removeEventListener('mousemove', onMouseMove);
	}, [drawingColorMode, lastMousePosition]);

	function onMouseMove(mouseEvent: MouseEvent) {
		if (!canvasRef.current || drawingColorMode === DrawingColor.None) {
			return;
		}

		const context = canvasRef.current.getContext('2d');

		if(!context) {
			return;
		}

		const drawingColor = drawingColorMode === DrawingColor.Main ? selectedColor : secondaryColor;
		const currentMousePosition = getMousePositionRelativeToCanvas(canvasRef.current, mouseEvent);

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			drawLine({
				context,
				color: drawingColor,
				from: lastMousePosition,
				to: currentMousePosition,
			});
		}

		setLastMousePosition(currentMousePosition);
	}

	function onMouseDown(e: React.MouseEvent) {
		if (e.button === 0) {
			setDrawingColorMode(DrawingColor.Main);
		} else if (e.button === 2) {
			setDrawingColorMode(DrawingColor.Secondary);
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
