import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { AppState, Tabs } from '../../../types';
import { useLang } from '../../../hooks';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actionCreators.setActiveTab(tab));
};

export const ViewTabLink = () => {
	const lang = useLang();
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
		{lang.viewTab.title}
	</div>;
};
