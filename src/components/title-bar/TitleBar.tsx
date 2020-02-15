import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import store from '../../redux/store';

import './TitleBar.scss';

const mapStateToProps = state => {
	return { };
};

class TitleBarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	maximizeWindow = () => {
		store.dispatch(actions.maximize());
	};

	render() {
		return (
			<div className="TitleBar">
				<div className="TitleBar__window-icons">
					<div className="TitleBar__window-icons__icon TitleBar__window-icons__icon__minimizeTile">
						<div className="TitleBar__window-icons__icon__minimize" />
					</div>

					<div
						className="TitleBar__window-icons__icon"
						onClick={this.maximizeWindow}
					>
						<img
							draggable="false"
							src={require('./../../assets/icons/top/maximize.png')}
							className="TitleBar__window-icons__icon__image"
						/>
					</div>

					<div className="TitleBar__window-icons__icon TitleBar__window-icons__icon--close">
						<img
							draggable="false"
							src={require('./../../assets/icons/top/close.png')}
							className="TitleBar__window-icons__icon__image"
						/>
					</div>
				</div>
			</div>
		);
	}
}

const TitleBar = connect(mapStateToProps)(TitleBarComponent);

export default TitleBar;
