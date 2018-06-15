import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return { 
		openedDropdown: state.openedDropdown,
	};
};

require('./dropdown.scss');

export class UnmappedDropdown extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.openedDropdown !== this.props.provider){
			return null;
		}

		if(this.props.disabled){
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