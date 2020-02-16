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

class ToolsComponent extends React.Component<PropTypes> {
	selectTool(toolId: AvailableTools) {
		store.dispatch(actions.selectTool(toolId));
	}

	getToolClassName(tool: AvailableTools, iconType: 1 | 2 | 3) {
		return `Tools__icon-${iconType} ` + (this.props.selectedTool === tool ? 'Tools__icon--active' : '');
	}

	render() {
		return <div className='Tools'>
			<div className='Tools__iconRow'>
				<div onClick={() => this.selectTool(AvailableTools.Pencil)}
					className={this.getToolClassName(AvailableTools.Pencil, 1)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/1.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Fill)}
					className={this.getToolClassName(AvailableTools.Fill, 2)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/2.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Text)}
					className={this.getToolClassName(AvailableTools.Text, 3)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/3.png')} alt=''/>
				</div>
			</div>

			<div className='Tools__iconRow'>
				<div onClick={() => this.selectTool(AvailableTools.Eraser)}
					className={this.getToolClassName(AvailableTools.Eraser, 1)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/4.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.ColorPicker)}
					className={this.getToolClassName(AvailableTools.ColorPicker, 2)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/5.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Magnifier)}
					className={this.getToolClassName(AvailableTools.Magnifier, 3)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/6.png')} alt=''/>
				</div>
			</div>

			<div className='Tools__description'>
				Narzędzia
			</div>
		</div>;
	}
}

const Tools = connect(mapStateToProps)(ToolsComponent);

export default Tools;
