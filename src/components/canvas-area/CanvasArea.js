import React from 'react';
import { connect } from 'react-redux';

require('./CanvasArea.scss');

const mapStateToProps = state => {
	return { currentTab: state.currentTab };
};

class CanvasAreaComponent extends React.Component {
	render() {
		return (
			<div className="CanvasArea">
				<canvas className="CanvasArea__canvas" width="500" height="500" />
			</div>
		);
	}
}

const CanvasArea = connect(mapStateToProps)(CanvasAreaComponent);

export default CanvasArea;
