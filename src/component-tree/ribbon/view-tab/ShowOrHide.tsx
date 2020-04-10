import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { AppState } from '../../../types';

function toggleBottomBar() {
	store.dispatch(actionCreators.toggleBottomBar());
}

export const ShowOrHide = () => {
	const isBottomBarVisible = useSelector((state: AppState) => state.isBottomBarVisible);

	return <div className='ViewTab__group'>
	<div className='ViewTab__content'>
		<ul className='ViewTab__list'>
			<li>
				<label className='ViewTab__label'>
					<input type='checkbox' className='ViewTab__checkboxInput' />
					<span className='ViewTab__customCheckbox' />
					<span className='ViewTab__checkboxDesc'>Linijki</span>
				</label>
			</li>

			<li>
				<label className='ViewTab__label'>
					<input type='checkbox' className='ViewTab__checkboxInput' />
					<span className='ViewTab__customCheckbox' />
					<span className='ViewTab__checkboxDesc'>Linie siatki</span>
				</label>
			</li>

			<li>
				<label className='ViewTab__label'>
					<input
						type='checkbox'
						className='ViewTab__checkboxInput'
						checked={isBottomBarVisible}
						onChange={toggleBottomBar}
					/>
					<span className='ViewTab__customCheckbox' />
					<span className='ViewTab__checkboxDesc'>Pasek stanu</span>
				</label>
			</li>
		</ul>
	</div>
	<h1 className='ViewTab__description'>Pokazywanie lub ukrywanie</h1>
</div>;
};

export default ShowOrHide;
