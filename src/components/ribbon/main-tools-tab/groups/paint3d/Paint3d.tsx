import React from 'react';
import { connect } from 'react-redux';

import './Paint3d.scss';

const mapStateToProps = state => {
	return {
	};
};

class Paint3dComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isListCollapsed: false
		};
	}

	render() {
		return (
			<div className="Paint3d">
				<div className="Paint3d__content">
					<img
						draggable="false"
						className="Paint3d__mainIcon"
						src={require('../../../../../assets/icons/main-tools-tab/8_paint3d.png')}
						alt=""
					/>

					<div className="Paint3d__description">Otwórz aplikację Paint 3D</div>
				</div>
			</div>
		);
	}
}

const Paint3d = connect(mapStateToProps)(Paint3dComponent);

export default Paint3d;
