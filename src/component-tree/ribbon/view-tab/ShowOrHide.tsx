import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { AppState } from '../../../types';
import { useLang } from '../../../hooks';

function toggleBottomBar() {
	store.dispatch(actionCreators.toggleBottomBar());
}

const Checkbox = ({checked, onChange, description}: {
	checked?: boolean,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
	description: string,
}) => {
	return <label className='ViewTab__label'>
		<input
			type='checkbox'
			className='ViewTab__checkboxInput'
			checked={checked}
			onChange={onChange}
		/>
		<span className='ViewTab__customCheckbox' />
		<span className='ViewTab__checkboxDesc'>{description}</span>
	</label>;
};

export const ShowOrHide = () => {
	const lang = useLang().viewTab.showOrHide;
	const isBottomBarVisible = useSelector((state: AppState) => state.isBottomBarVisible);

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<ul className='ViewTab__list'>
				<li><Checkbox description={lang.rulers.title}/></li>
				<li><Checkbox description={lang.statusBar.title}/></li>
				<li><Checkbox checked={isBottomBarVisible} onChange={toggleBottomBar} description={lang.statusBar.title}/></li>
			</ul>
		</div>
		<h1 className='ViewTab__description'>{lang.title}</h1>
	</div>;
};

export default ShowOrHide;
