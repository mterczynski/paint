import React from 'react';
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

import { useSelector } from 'react-redux';
import { AppState, Tabs } from '../../types';
import { HelpIcon } from './HelpIcon';
import { MainToolsTabLink, ViewTabLink } from './links';
import { RibbonToggler } from './RibbonToggler';
import { useLang } from '../../hooks';
import { ActiveRibbonTab, RibbonContainer, RibbonHead, RibbonTabs, FileTab, HelperIcons } from './RibbonStyles';

const Ribbon = () => {
	const lang = useLang();
	const activeTab = useSelector((appState: AppState) => appState.activeTab);
	const isRibbonCollapsed = useSelector((state: AppState) => state.isRibbonCollapsed);

	const ActiveTab = () => {
		return isRibbonCollapsed === false ? (
			<ActiveRibbonTab>
				{activeTab === Tabs.MainTools ? (
					<MainToolsTab />
				) : (
						<ViewTab />
					)}
			</ActiveRibbonTab>
		) : null;
	};

	return (
		<RibbonContainer>
			<RibbonHead>
				<RibbonTabs>
					<FileTab>{lang.fileMenu.title}</FileTab>
					<MainToolsTabLink></MainToolsTabLink>
					<ViewTabLink></ViewTabLink>
				</RibbonTabs>

				<HelperIcons>
					<RibbonToggler></RibbonToggler>
					<HelpIcon></HelpIcon>
				</HelperIcons>
			</RibbonHead>

			<ActiveTab></ActiveTab>
		</RibbonContainer>
	);
};

export default Ribbon;
