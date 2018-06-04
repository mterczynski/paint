import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";

require('./Size.scss');


const mapStateToProps = (state) => {
	return { 
		isBrushActive: state.isBrushActive
	};
};
  
class SizeComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			isListCollapsed: false
		}
	}

	render(){
		return <div className="Size">
			<div className="Size__content">
				<img draggable="false" className="Size__mainIcon"
				src={require('../../../../../assets/icons/main-tools-tab/6_size.png')} alt=""/>
				<div>
					Rozmiar
				</div>
				<img draggable="false" className="Size__arrowDown"
				src={require('../../../../../assets/icons/arrow_down.png')} alt=""/>
			</div>
		</div>		
	}
}

const Size = connect(mapStateToProps)(SizeComponent);

export default Size;