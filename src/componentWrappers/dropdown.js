import React from 'react';
import { connect } from "react-redux";
import store from '../redux/store';
import * as actions from '../redux/actions';

const mapStateToProps = (state) => {
	return { 
		isDropdownActive: state.isDropdownActive
	};
};

require('./dropdown.scss');

export class UnmappedDropdown extends React.Component{
	render(){
		if(!this.props.isDropdownActive){
			return null;
		}
		return <div className="Dropdown">
			<div className="Dropdown__content">
				{this.props.children}
			</div>
		</div>	
	}
}

const Dropdown = connect(mapStateToProps)(UnmappedDropdown);

export default Dropdown;