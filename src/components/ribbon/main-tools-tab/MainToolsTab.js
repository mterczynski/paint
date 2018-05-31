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
		return <Tab>
			<div className="MainToolsTab">
				<div>Schowek</div>
				<div>Obraz</div>
				<div>Narzędzia</div>
				<div>Pędzle</div>
				<div>Kształty</div>
				<div>Rozmiar</div>
				<div>Kolory</div>
				<div>Paint 3d</div>	
			</div>		
		</Tab>
	}
}

const MainToolsTab = connect(mapStateToProps)(MainToolsTabComponent);

export default MainToolsTab;