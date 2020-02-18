import React, { useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools } from '../../types';
import './CanvasArea.scss';

const cursors = Object.freeze({
	[AvailableTools.Pencil]: `url(${require('../../assets/cursors/pencil.png')}) 0 20, auto`,
	[AvailableTools.None]: 'default',
});

const CanvasArea = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const [lastMousePosition, setLastMousePosition] = useState<null | {x: number, y: number}>(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const cursor: string = cursors[selectedTool];

	function onMouseMove(e: React.MouseEvent) {
		if (!canvasRef.current) {
			return;
		}

		const rect = canvasRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const currentMousePos = {x, y};

		if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
			const context = canvasRef.current.getContext('2d');

			if (!context) {
				return;
			}

			context.beginPath();
			context.moveTo(lastMousePosition.x, lastMousePosition.y);
			context.lineTo(currentMousePos.x, currentMousePos.y);
			context.strokeStyle = '#000000';
			context.stroke();
		}

		setLastMousePosition(currentMousePos);
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
