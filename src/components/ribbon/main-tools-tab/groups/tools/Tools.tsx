import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions';
import store from '../../../../../redux/store';

import { AvailableTools } from '../../../../../types';
import './Tools.scss';

interface PropTypes {
	selectedTool: number;
}

const mapStateToProps = state => {
	return {
		selectedTool: state.selectedTool,
	};
};

function selectTool(toolId: AvailableTools) {
	store.dispatch(actions.selectTool(toolId));
}

class ToolsComponent extends React.Component<PropTypes> {

	ToolComponent = ({tool, iconType}: {tool: AvailableTools, iconType: 1 | 2 | 3}) => {
		return <div onClick={() => selectTool(tool)}
			className={this.getToolClassName(tool, iconType)}
		>
			<img className='Tools__iconImage' draggable='false'
			src={require(`../../../../../assets/icons/main-tools-tab/3_tools/${tool}.png`)} alt=''/>
		</div>;
	}

	getToolClassName(tool: AvailableTools, iconType: 1 | 2 | 3) {
		return `Tools__icon-${iconType} ` + (this.props.selectedTool === tool ? 'Tools__icon--active' : '');
	}

	render() {
		return <div className='Tools'>
			<div className='Tools__iconRow'>
				<this.ToolComponent tool={AvailableTools.Pencil} iconType={1}></this.ToolComponent>
				<this.ToolComponent tool={AvailableTools.Fill} iconType={2}></this.ToolComponent>
				<this.ToolComponent tool={AvailableTools.Text} iconType={3}></this.ToolComponent>
			</div>

			<div className='Tools__iconRow'>
				<this.ToolComponent tool={AvailableTools.Eraser} iconType={1}></this.ToolComponent>
				<this.ToolComponent tool={AvailableTools.ColorPicker} iconType={2}></this.ToolComponent>
				<this.ToolComponent tool={AvailableTools.Magnifier} iconType={3}></this.ToolComponent>
			</div>

			<div className='Tools__description'>
				Narzędzia
			</div>
		</div>;
	}
}

const Tools = connect(mapStateToProps)(ToolsComponent);

export default Tools;
