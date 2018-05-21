import React from 'react';
import store from '../../../redux/store';
import * as actions from '../../../redux/actions';
import { connect } from "react-redux";

require('./MainToolsTab.css');

import Tab from '../tab/Tab';

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class MainToolsTabComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		return <Tab className="MainToolsTab">
			<div className="MainToolsTab__window-icons">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Tab>
	}
}

const MainToolsTab = connect(mapStateToProps)(MainToolsTabComponent);

export default MainToolsTab;