import React from 'react';

import { useSelector } from 'react-redux';
import { AppState, AvailableTools } from '../../types';
import './CanvasArea.scss';

const cursors = Object.freeze({
	[AvailableTools.Pencil]: `url(${require('../../assets/cursors/pencil.png')}), auto`,
	[AvailableTools.None]: 'default',
});

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);

	const cursor: string = cursors[selectedTool];

	return (
		<div className='CanvasArea'>
			<canvas className='CanvasArea__canvas' width='500' height='500' style={{cursor}}/>
		</div>
	);
};

export default CanvasArea;
