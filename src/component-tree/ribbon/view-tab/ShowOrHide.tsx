import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';
import store from '../../../redux/store';
import { AppState } from '../../../types';
import { useLang } from '../../../hooks';

function toggleBottomBar() {
	store.dispatch(actionCreators.toggleBottomBar());
}

export const ShowOrHide = () => {
	const lang = useLang();
	const isBottomBarVisible = useSelector((state: AppState) => state.isBottomBarVisible);

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<ul className='ViewTab__list'>
				<li>
					<label className='ViewTab__label'>
						<input type='checkbox' className='ViewTab__checkboxInput' />
						<span className='ViewTab__customCheckbox' />
						<span className='ViewTab__checkboxDesc'>{lang.viewTab.showOrHide.rulers.title}</span>
					</label>
				</li>

				<li>
					<label className='ViewTab__label'>
						<input type='checkbox' className='ViewTab__checkboxInput' />
						<span className='ViewTab__customCheckbox' />
						<span className='ViewTab__checkboxDesc'>{lang.viewTab.showOrHide.gridlines.title}</span>
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
						<span className='ViewTab__checkboxDesc'>{lang.viewTab.showOrHide.statusBar.title}</span>
					</label>
				</li>
			</ul>
		</div>
		<h1 className='ViewTab__description'>{lang.viewTab.showOrHide.title}</h1>
	</div>;
};

export default ShowOrHide;
