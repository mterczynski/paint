import React from 'react';
import { connect } from "react-redux";

require('./Tab.scss');

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class TabComponent extends React.Component{
	render(){
		return <div className="Tab">
			{this.props.children}
		</div>
	}
}

const Tab = connect(mapStateToProps)(TabComponent);

export default Tab;