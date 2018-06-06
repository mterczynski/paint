import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";

require('./Tools.scss');

const mapStateToProps = (state) => {
	return { 
		selectedTool: state.selectedTool
	};
};
  
class ToolsComponent extends React.Component{

	selectTool(toolId){
		store.dispatch(actions.selectTool(toolId));
	}

	constructor(props) {
		super(props)
	}

	render(){
		return <div className="Tools">
			<div className="Tools__iconRow">
				<div onClick={()=>this.selectTool(1)}
				className={"Tools__icon-1 " + (this.props.selectedTool == 1 ? 'Tools__icon--active' : '')}>
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/1.png')} alt=""/>
				</div>
				
				<div onClick={()=>this.selectTool(2)}
				className={"Tools__icon-2 " + (this.props.selectedTool == 2 ? 'Tools__icon--active' : '')}>
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/2.png')} alt=""/>
				</div>

				<div onClick={()=>this.selectTool(3)}
				className={"Tools__icon-3 " + (this.props.selectedTool == 3 ? 'Tools__icon--active' : '')}>
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/3.png')} alt=""/>
				</div>
			</div>

			<div className="Tools__iconRow">
				<div onClick={()=>this.selectTool(4)}
				className={"Tools__icon-1 " + (this.props.selectedTool == 4 ? 'Tools__icon--active' : '')}>
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/4.png')} alt=""/>
				</div>

				<div onClick={()=>this.selectTool(5)}
				className={"Tools__icon-2 " + (this.props.selectedTool == 5 ? 'Tools__icon--active' : '')}>
					<img className="Tools__iconImage" draggable="false"
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/5.png')} alt=""/>
				</div>

				<div onClick={()=>this.selectTool(6)}
				className={"Tools__icon-3 " + (this.props.selectedTool == 6 ? 'Tools__icon--active' : '')}>
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
