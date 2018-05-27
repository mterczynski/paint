import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";

require('./TitleBar.scss');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class TitleBarComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {};
		this.maximizeWindow = this.maximizeWindow.bind(this);
	}

	maximizeWindow(){
		store.dispatch(actions.maximize());
		console.log(store.getState());
	}

	render(){
		return <div className="TitleBar">
			<div className="TitleBar__window-icons">
				<div className="TitleBar__window-icons__icon">
					<img src={'dist/' + require('./../../assets/icons/top/minimize.png')}
					className="TitleBar__window-icons__icon__image"/>
				</div>

				<div className="TitleBar__window-icons__icon" onClick={this.maximizeWindow}>
					<img src={'dist/' + require('./../../assets/icons/top/maximize.png')}
					className="TitleBar__window-icons__icon__image"/>
				</div>

				<div className="TitleBar__window-icons__icon TitleBar__window-icons__icon--close">
					<img src={'dist/' + require('./../../assets/icons/top/close.png')}
					className="TitleBar__window-icons__icon__image"/>
				</div>
			</div>
		</div>
	}
}

const TitleBar = connect(mapStateToProps)(TitleBarComponent);

export default TitleBar;