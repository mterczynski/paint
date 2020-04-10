import React from 'react';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { Tabs } from '../../../types';
import { useAppState } from '../../../hooks';

const setActiveTab = (tab: Tabs) => {
	store.dispatch(actionCreators.setActiveTab(tab));
};

export const ViewTabLink = () => {
	const activeTab = useAppState().activeTab;

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
