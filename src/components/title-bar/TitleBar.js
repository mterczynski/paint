import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";

require('./TitleBar.css');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class TitleBarComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		return <div className="TitleBar">
			TitleBar
		</div>
	}
}

const TitleBar = connect(mapStateToProps)(TitleBarComponent);

export default TitleBar;