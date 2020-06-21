import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { AppState, Tabs } from '../../../types';
import { useLang } from '../../../hooks';
import { StyledTab } from '../RibbonStyles';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actionCreators.setActiveTab(tab));
};

export const ViewTabLink = () => {
	const lang = useLang();
	const activeTab = useSelector((appState: AppState) => appState.activeTab);

	return <StyledTab
		onClick={() => setActiveTab(Tabs.View)}
		active={activeTab === Tabs.View}
	>
		{lang.viewTab.title}
	</StyledTab>;
};
