import React from 'react';
import store from '../../../redux/store';
import * as actions from '../../../redux/actions';
import { connect } from "react-redux";

require('./ViewTab.css');

import Tab from '../tab/Tab';

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class ViewTabComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		return <Tab className="ViewTab">
			ViewTab
		</Tab>
	}
}

const ViewTab = connect(mapStateToProps)(ViewTabComponent);

export default ViewTab;