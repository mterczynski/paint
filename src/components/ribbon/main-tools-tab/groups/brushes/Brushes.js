import React from 'react';
import { connect } from 'react-redux';

require('./Brushes.scss');

const mapStateToProps = state => {
	return {
		isBrushActive: state.isBrushActive
	};
};

class BrushesComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isListCollapsed: false
		};
	}

	render() {
		return (
			<div className="Brushes">
				<div className="Brushes__content">
					<div className="Brushes__top">
						<img
							className="Brushes__mainIcon"
							draggable="false"
							src={require('../../../../../assets/icons/main-tools-tab/4_brushes/1.png')}
							alt=""
						/>
					</div>
					<div className="Brushes__bottom">
						<div>Pędzle</div>

						<img
							className="Brushes__arrowDown"
							draggable="false"
							src={require('../../../../../assets/icons/arrow_down.png')}
							alt=""
						/>
					</div>
				</div>
			</div>
		);
	}
}

const Brushes = connect(mapStateToProps)(BrushesComponent);

export default Brushes;
