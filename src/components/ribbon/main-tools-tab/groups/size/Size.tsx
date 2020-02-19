import React from 'react';
import Dropdown from '../../../../../componentWrappers/dropdown';
import * as actions from '../../../../../redux/actions';
import store from '../../../../../redux/store';
import { Dropdowns } from '../../../../../types/dropdowns';

import './Size.scss';

function openDropdown() {
	store.dispatch(actions.setDropdown(Dropdowns.size));
}

function setToolSize(toolSize: 1 | 2 | 3 | 4) {
	store.dispatch(actions.setToolSize(toolSize));
}

const Size = () => {
	return <div className='Size'>
		<div className='Size__content' onClick={openDropdown}>
			<img draggable='false' className='Size__mainIcon'
				src={require('../../../../../assets/icons/main-tools-tab/6_size.png')} alt='' />

			<div>
				Rozmiar
			</div>

			<img draggable='false' className='Size__arrowDown'
				src={require('../../../../../assets/icons/arrow_down.png')} alt='' />
		</div>

		<Dropdown provider={Dropdowns.size}>
			<ul className='Size__list'>
				<li className='Size__li' onClick={() => setToolSize(1)}>Size 1px</li>
				<li className='Size__li' onClick={() => setToolSize(2)}>Size 2px</li>
				<li className='Size__li' onClick={() => setToolSize(3)}>Size 3px</li>
				<li className='Size__li' onClick={() => setToolSize(4)}>Size 4px</li>
			</ul>
		</Dropdown>
	</div>;
};

export default Size;
