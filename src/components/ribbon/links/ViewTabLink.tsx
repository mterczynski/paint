import React from 'react';
import { useSelector } from 'react-redux';
import * as actions from '../../../redux/actions';
import store from '../../../redux/store';
import { AppState, Tabs } from '../../../types';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actions.setActiveTab(tab));
};

export const ViewTabLink = () => {
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
