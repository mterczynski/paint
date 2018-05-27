import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

require('./Ribbon.scss');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class RibbonComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			activeTab: 'mainTools',
			isCollapsed: false
		}
		this.toggleRibbon = this.toggleRibbon.bind(this);
	}

	changeTab(tabName){
		this.setState({activeTab: tabName});
	}

	toggleRibbon(){
		this.setState({isCollapsed: !this.state.isCollapsed});
	}

	render(){
		return <div className="Ribbon">
			<div className="Ribbon__head">
				<div className="Ribbon__head__tabNames">
					<div className="Ribbon__head__tabNames__file">Plik</div>

					<div onClick={()=>this.changeTab('mainTools')}
					className={"Ribbon__head__tabNames__tab " + (this.state.activeTab == 'mainTools' ? "Ribbon__head__tabNames__tab--active" : '')}>
						Narzędzia główne
					</div>

					<div onClick={()=>this.changeTab('view')}
					className={"Ribbon__head__tabNames__tab " + (this.state.activeTab == 'view' ? "Ribbon__head__tabNames__tab--active" : '')}>
						Widok
					</div>
				</div>

				<div className="Ribbon__head__icons">
					<div className="Ribbon__head__icons__icon" onClick={this.toggleRibbon}>
						<img className={"Ribbon__head__icons__icon__image " + (this.state.isCollapsed ? 'Ribbon__head__icons__icon__image--reversed' : '')}
						src={'dist/' + require('../../assets/icons/top/collapse.png')}/>
					</div>

					<div className="Ribbon__head__icons__icon">
						<img className="Ribbon__head__icons__icon__image" 
						src={'dist/' + require('../../assets/icons/top/help.png')}/>
					</div>
				</div>
			</div>
			
			{this.state.isCollapsed == false? 
				<div className="Ribbon__body">
					{this.state.activeTab == 'mainTools' ?
						<MainToolsTab/>
						:
						<ViewTab/>
					}
				</div> : null
			}

		</div>
	}
}

const Ribbon = connect(mapStateToProps)(RibbonComponent);

export default Ribbon;