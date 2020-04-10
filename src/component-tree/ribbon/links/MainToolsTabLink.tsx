import React from 'react';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { Tabs } from '../../../types';
import { useAppState } from '../../../hooks';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actionCreators.setActiveTab(tab));
};

export const MainToolsTabLink = () => {
	const activeTab = useAppState().activeTab;

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
