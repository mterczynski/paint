import React from 'react';
import * as actionCreators from '../../redux/action-creators';
import store from '../../redux/store';
import { useAppState } from '../../hooks';

const toggleRibbon = () => {
	store.dispatch(actionCreators.toggleRibbon());
};

export const RibbonToggler = () => {
	const isRibbonCollapsed = useAppState().isRibbonCollapsed;

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
