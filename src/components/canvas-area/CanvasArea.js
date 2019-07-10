import React from 'react';

require('./CanvasArea.scss');

const CanvasArea = () => (
	<div className="CanvasArea">
		<canvas className="CanvasArea__canvas" width="500" height="500" />
	</div>
);

export default CanvasArea;
