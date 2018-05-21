import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

require('./Ribbon.css');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class RibbonComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		return <div className="Ribbon">
			<div className="Ribbon__tabs">
				{/* <MainToolsTab/> */}
				{/* <ViewTab/> */}
				{/* <div class="tabs">
					<div class="tab"></div>
					<div class="tab"></div>
					<div class="tab"></div>
				</div> */}
			</div>
		</div>
	}
}

const Ribbon = connect(mapStateToProps)(RibbonComponent);

export default Ribbon;