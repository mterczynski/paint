import React from 'react';
import { connect } from 'react-redux';

require('./EditColors.scss');

const mapStateToProps = state => {
	return {
		isBrushActive: state.isBrushActive
	};
};

class EditColorsComponent extends React.Component {
	basicColors = [
		'rgb(255,128,128)',
		'rgb(255,255,128)',
		'rgb(128,255,128)',
		'rgb(0,255,128)',
		'rgb(128,255,255)',
		'rgb(0,128,255)',
		'rgb(255,128,192)',
		'rgb(255,128,255)',
		// second row:
		'rgb(255,0,0)',
		'rgb(255,255,0)',
		'rgb(128,255,0)',
		'rgb(0,255,64)',
		'rgb(0,255,255)',
		'rgb(0,128,192)',
		'rgb(128,128,192)',
		'rgb(255,0,255)',
		// third row:
		'rgb(128,64,64)',
		'rgb(255,128,64)',
		'rgb(0,255,0)',
		'rgb(0,128,128)',
		'rgb(0,64,128)',
		'rgb(128,128,255)',
		'rgb(128,0,64)',
		'rgb(255,0,128)',
		// fourth row:
		'rgb(128,0,0)',
		'rgb(255,128,0)',
		'rgb(0,128,0)',
		'rgb(0,128,64)',
		'rgb(0,0,255)',
		'rgb(0,0,160)',
		'rgb(128,0,128)',
		'rgb(128,0,255)',
		// fifth row:
		'rgb(64,0,0)',
		'rgb(128,64,0)',
		'rgb(0,64,0)',
		'rgb(0,64,64)',
		'rgb(0,0,128)',
		'rgb(0,0,64)',
		'rgb(64,0,64)',
		'rgb(64,0,128)',
		// sixth row:
		'rgb(0,0,0)',
		'rgb(128,128,0)',
		'rgb(128,128,64)',
		'rgb(128,128,128)',
		'rgb(64,128,128)',
		'rgb(192,192,192)',
		'rgb(64,0,64)',
		'rgb(255,255,255)'
	];

	constructor(props) {
		super(props);
		this.state = {
			isListCollapsed: false
		};
	}

	render() {
		return <div className="EditColors" />;
	}
}

const EditColors = connect(mapStateToProps)(EditColorsComponent);

export default EditColors;
