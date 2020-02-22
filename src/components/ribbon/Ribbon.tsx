import React, { useState } from 'react';
import * as actions from '../../redux/actions';
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { AppState, Tabs } from '../../types';
import './Ribbon.scss';

const HelpIcon = () => {
	return <div className='Ribbon__head__icons__icon'>
		<img
			draggable='false'
			className='Ribbon__head__icons__icon__image'
			src={require('../../assets/icons/top/help.png')}
		/>
	</div>;
};

function setActiveTab(tab: Tabs) {
	store.dispatch(actions.setActiveTab(tab));
}

const MainToolsTabLink = () => {
	const activeTab = useSelector((appState: AppState) => appState.activeTab);

	return <div
		onClick={() => setActiveTab(Tabs.MainTools)}
		className={
			'Ribbon__head__tabNames__tab ' +
			(activeTab === Tabs.MainTools
				? 'Ribbon__head__tabNames__tab--active'
				: '')
		}
	>
		Narzędzia główne
</div>;
};

const ViewTabLink = () => {
	const activeTab = useSelector((appState: AppState) => appState.activeTab);

	return <div
		onClick={() => setActiveTab(Tabs.View)}
		className={
			'Ribbon__head__tabNames__tab ' +
			(activeTab === Tabs.View
				? 'Ribbon__head__tabNames__tab--active'
				: '')
		}
	>
		Widok
</div>;
};

const Ribbon = () => {
	const activeTab = useSelector((appState: AppState) => appState.activeTab);
	const [isCollapsed, setIsColapsed] = useState(false);

	function toggleRibbon() {
		setIsColapsed(!isCollapsed);
	}

	const RibbonToggler = () => {
		return <div
			className='Ribbon__head__icons__icon'
			onClick={toggleRibbon}
		>
			<img
				draggable='false'
				className={
					'Ribbon__head__icons__icon__image ' +
					(isCollapsed
						? 'Ribbon__head__icons__icon__image--reversed'
						: '')
				}
				src={require('../../assets/icons/top/collapse.png')}
			/>
		</div>;
	};

	return (
		<div className='Ribbon'>
			<div className='Ribbon__head'>
				<div className='Ribbon__head__tabNames'>
					<div className='Ribbon__head__tabNames__file'>Plik</div>
					<MainToolsTabLink></MainToolsTabLink>
					<ViewTabLink></ViewTabLink>
				</div>

				<div className='Ribbon__head__icons'>
					<RibbonToggler></RibbonToggler>
					<HelpIcon></HelpIcon>
				</div>
			</div>

			{isCollapsed === false ? (
				<div className='Ribbon__body'>
					{activeTab === Tabs.MainTools ? (
						<MainToolsTab />
					) : (
							<ViewTab />
						)}
				</div>
			) : null}
		</div>
	);
};

export default Ribbon;
