import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools } from '../../types';
import './CanvasArea.scss';

interface Point {
	x: number;
	y: number;
}

interface DrawLineArgs {
	color: string;
	context: CanvasRenderingContext2D;
	from: Point;
	to: Point;
}

const cursorYOffset = 20;

const cursors = Object.freeze({
	[AvailableTools.Pencil]: `url(${require('../../assets/cursors/pencil.png')}) 0 ${cursorYOffset}, auto`,
	[AvailableTools.None]: 'default',
});

function drawLine({color, context, from, to}: DrawLineArgs) {
	context.beginPath();
	context.moveTo(from.x, from.y);
	context.lineTo(to.x, to.y);
	context.strokeStyle = color;
	context.stroke();
}

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const colors = useSelector((state: AppState) => state.colors);

	const selectedColor = colors.selectedMainColorIndex === 1 ? colors.color1 : colors.color2;

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [lastMousePosition, setLastMousePosition] = useState<null | Point>(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const cursor: string = cursors[selectedTool];

	useEffect(() => {
		const onMouseUp = () => {
			setIsDrawing(false);
			setLastMousePosition(null);
		};

		window.addEventListener('mouseup', onMouseUp);

		return () => window.removeEventListener('mouseup', onMouseUp);
	}, []);

	function onMouseMove(mouseEvent: React.MouseEvent) {
		if (!canvasRef.current || !isDrawing) {
			return;
		}

		const canvasPosition = canvasRef.current.getBoundingClientRect();
		const mouseX = mouseEvent.clientX - canvasPosition.left;
		const mouseY = mouseEvent.clientY - canvasPosition.top;

		const currentMousePosition = {x: mouseX, y: mouseY};

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			const context = canvasRef.current.getContext('2d');

			if (context) {
				drawLine({
					context,
					color: selectedColor,
					from: lastMousePosition,
					to: currentMousePosition,
				});
			}
		}

		setLastMousePosition(currentMousePosition);
	}

	function onMouseDown() {
		setIsDrawing(true);
	}

	return (
		<div className='CanvasArea'>
			<canvas className='CanvasArea__canvas' width='500' height='500'
				onMouseDown={onMouseDown}
				style={{ cursor }}
				ref={canvasRef}
				onMouseMove={onMouseMove} />
		</div>
	);
};

export default CanvasArea;
