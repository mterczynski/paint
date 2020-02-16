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
	selectTool(toolId) {
		store.dispatch(actions.selectTool(toolId));
	}

	render() {
		return <div className='Tools'>
			<div className='Tools__iconRow'>
				<div onClick={() => this.selectTool(AvailableTools.Pencil)}
				className={'Tools__icon-1 ' + (this.props.selectedTool === AvailableTools.Pencil ? 'Tools__icon--active' : '')}>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/1.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Fill)}
				className={'Tools__icon-2 ' + (this.props.selectedTool === AvailableTools.Fill ? 'Tools__icon--active' : '')}>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/2.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Text)}
				className={'Tools__icon-3 ' + (this.props.selectedTool === AvailableTools.Text ? 'Tools__icon--active' : '')}>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/3.png')} alt=''/>
				</div>
			</div>

			<div className='Tools__iconRow'>
				<div onClick={() => this.selectTool(AvailableTools.Eraser)}
				className={'Tools__icon-1 ' + (this.props.selectedTool === AvailableTools.Eraser ? 'Tools__icon--active' : '')}>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/4.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.ColorPicker)}
					className={'Tools__icon-2 ' + (
						this.props.selectedTool === AvailableTools.ColorPicker ? 'Tools__icon--active' : ''
					)}
				>
					<img className='Tools__iconImage' draggable='false'
					src={require('../../../../../assets/icons/main-tools-tab/3_tools/5.png')} alt=''/>
				</div>

				<div onClick={() => this.selectTool(AvailableTools.Magnifier)}
				className={'Tools__icon-3 ' + (this.props.selectedTool === AvailableTools.Magnifier ? 'Tools__icon--active' : '')}>
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
