import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";
import Dropdown from '../../../../../componentWrappers/dropdown';

require('./Size.scss');

const mapStateToProps = (state) => {
	return { 
		isBrushActive: state.isBrushActive,
		isDropdownActive: state.isDropdownActive
	};
};
  
class SizeComponent extends React.Component{

	constructor(props) {
		super(props)

		this.openDropdown = this.openDropdown.bind(this);
	}

	setToolSize(toolSize){
		store.dispatch(actions.setToolSize(toolSize));
		store.dispatch(actions.closeDropdown());
	}

	openDropdown(){
		store.dispatch(actions.openDropdown());
	}

	render(){
		return <div className="Size">
			<div className="Size__content" onClick={this.openDropdown}>
				<img draggable="false" className="Size__mainIcon"
				src={require('../../../../../assets/icons/main-tools-tab/6_size.png')} alt=""/>
				<div>
					Rozmiar
				</div>
				<img draggable="false" className="Size__arrowDown"
				src={require('../../../../../assets/icons/arrow_down.png')} alt=""/>
			</div>

			<Dropdown>
				<ul className="Size__list">
					<li className="Size__li" onClick={()=>this.setToolSize(1)}>Size 1px</li>
					<li className="Size__li" onClick={()=>this.setToolSize(2)}>Size 2px</li>
					<li className="Size__li" onClick={()=>this.setToolSize(3)}>Size 3px</li>
					<li className="Size__li" onClick={()=>this.setToolSize(4)}>Size 4px</li>
				</ul>
			</Dropdown>
		</div>		
	}
}

const Size = connect(mapStateToProps)(SizeComponent);

export default Size;
