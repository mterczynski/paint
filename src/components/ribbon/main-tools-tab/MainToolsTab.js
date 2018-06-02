import React from 'react';
import store from '../../../redux/store';
import * as actions from '../../../redux/actions';
import { connect } from "react-redux";

require('./MainToolsTab.scss');

import Tab from '../tab/Tab';
import Group from './group/Group';

import Brushes from './groups/brushes/Brushes';
import Clipboard from './groups/clipboard/Clipboard';
import Tools from './groups/tools/Tools';
import Size from './groups/size/Size';
import Paint3d from './groups/paint3d/Paint3d';

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
				<Group> <Clipboard/> </Group>
				<Group> <Tools/> </Group>
				<Group> <Brushes/> </Group>
				<Group> <Size/> </Group>
				<Group> <Paint3d/> </Group>
				{/* <div>Schowek</div>
				<div>Obraz</div>
				<div>Narzędzia</div>
				<div>Pędzle</div>
				<div>Kształty</div>
				<div>Rozmiar</div>
				<div>Kolory</div>
				<div>Paint 3d</div>	 */}
			</div>		
		</Tab>
	}
}

const MainToolsTab = connect(mapStateToProps)(MainToolsTabComponent);

export default MainToolsTab;