import React from 'react';
import { useSelector } from 'react-redux';
import * as actions from '../../../redux/actions';
import store from '../../../redux/store';
import { AppState, Tabs } from '../../../types';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actions.setActiveTab(tab));
};

export const MainToolsTabLink = () => {
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
