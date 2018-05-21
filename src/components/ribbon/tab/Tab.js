import React from 'react';
import store from '../../../redux/store';
import * as actions from '../../../redux/actions';
import { connect } from "react-redux";

require('./Tab.css');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class TabComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render(){
		return <div className="Tab">
			{this.props.children}
		</div>
	}
}

const Tab = connect(mapStateToProps)(TabComponent);

export default Tab;