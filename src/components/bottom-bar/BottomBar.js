import React from 'react';
import store from '../../redux/store';
import * as actions from '../../redux/actions';
import { connect } from "react-redux";

require('./BottomBar.css');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab,
	isBottomBarVisible: state.isBottomBarVisible };
};
  
class BottomBarComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		if(this.props.isBottomBarVisible){
			return <div className="BottomBar">
				<div className="BottomBar__col BottomBar__col--small"></div>
				<div className="BottomBar__col BottomBar__col--small"></div>
				<div className="BottomBar__col BottomBar__col--small">3 x  5piks.</div>
				<div className="BottomBar__col BottomBar__col--small"></div>
				<div className="BottomBar__col BottomBar__col--stretched"></div>
				<div className="BottomBar__col BottomBar__col--small"> 100% - suwak +</div>
			</div>
		} else {
			return <div style={{display:'none', position:'absolute'}}></div>
		}
		
	}
}

const BottomBar = connect(mapStateToProps)(BottomBarComponent);

export default BottomBar;