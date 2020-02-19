import React from 'react';
import * as actions from '../../redux/actions';
import store from '../../redux/store';

import './TitleBar.scss';

function maximizeWindow() {
	store.dispatch(actions.maximize());
}

const TitleBar = () => {
	return (
		<div className='TitleBar'>
			<div className='TitleBar__window-icons'>
				<div className='TitleBar__window-icons__icon TitleBar__window-icons__icon__minimizeTile'>
					<div className='TitleBar__window-icons__icon__minimize' />
				</div>

				<div
					className='TitleBar__window-icons__icon'
					onClick={maximizeWindow}
				>
					<img
						draggable='false'
						src={require('./../../assets/icons/top/maximize.png')}
						className='TitleBar__window-icons__icon__image'
					/>
				</div>

				<div className='TitleBar__window-icons__icon TitleBar__window-icons__icon--close'>
					<img
						draggable='false'
						src={require('./../../assets/icons/top/close.png')}
						className='TitleBar__window-icons__icon__image'
					/>
				</div>
			</div>
		</div>
	);
};

export default TitleBar;
