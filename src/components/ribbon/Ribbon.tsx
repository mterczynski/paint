import React from 'react';
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

import { useSelector } from 'react-redux';
import { AppState, Tabs } from '../../types';
import { HelpIcon } from './HelpIcon';
import { MainToolsTabLink, ViewTabLink } from './links';
import './Ribbon.scss';
import { RibbonToggler } from './RibbonToggler';

const Ribbon = () => {
	const activeTab = useSelector((appState: AppState) => appState.activeTab);
	const isRibbonCollapsed = useSelector((state: AppState) => state.isRibbonCollapsed);

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

			{isRibbonCollapsed === false ? (
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
