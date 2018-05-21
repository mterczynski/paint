import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";

require('./CanvasArea.css');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};

class CanvasAreaComponent extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="CanvasArea">
			<canvas className="CanvasArea__canvas" width="500" height="500">
			</canvas>
		</div>
	}
}

const CanvasArea = connect(mapStateToProps)(CanvasAreaComponent);

export default CanvasArea;