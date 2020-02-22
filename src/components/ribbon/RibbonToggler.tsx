import React from 'react';
import { useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import store from '../../redux/store';
import { AppState } from '../../types';

const toggleRibbon = () => {
	store.dispatch(actions.toggleRibbon());
};

export const RibbonToggler = () => {
	const isRibbonCollapsed = useSelector((state: AppState) => state.isRibbonCollapsed);

	return <div
		className='Ribbon__head__icons__icon'
		onClick={toggleRibbon}
	>
		<img
			draggable='false'
			className={
				'Ribbon__head__icons__icon__image ' +
				(isRibbonCollapsed
					? 'Ribbon__head__icons__icon__image--reversed'
					: '')
			}
			src={require('../../assets/icons/top/collapse.png')}
		/>
	</div>;
};
