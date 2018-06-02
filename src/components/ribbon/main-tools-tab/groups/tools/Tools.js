import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";

require('./Tools.scss');

const mapStateToProps = (state) => {
	return { 
		
	};
};
  
class ToolsComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			isListCollapsed: false
		}
	}

	render(){
		return <div className="Tools">
			<div className="Tools__iconRow">
				<div className="Tools__icon-1">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/1.png')} alt=""/>
				</div>
				
				<div className="Tools__icon-2">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/2.png')} alt=""/>
				</div>

				<div className="Tools__icon-3">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/3.png')} alt=""/>
				</div>
			</div>

			<div className="Tools__iconRow">
				<div className="Tools__icon-1">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/4.png')} alt=""/>
				</div>

				<div className="Tools__icon-2">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/5.png')} alt=""/>
				</div>

				<div className="Tools__icon-3">
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/6.png')} alt=""/>
				</div>
			</div>

			<div className="Tools__description">
				Narzędzia
			</div>
		</div>		
	}
}

const Tools = connect(mapStateToProps)(ToolsComponent);

export default Tools;