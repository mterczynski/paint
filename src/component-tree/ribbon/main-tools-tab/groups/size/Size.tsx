import React from 'react';
import Dropdown from '../../../../../reusable-components/Dropdown';
import * as actionCreators from '../../../../../redux/action-creators';
import store from '../../../../../redux/store';
import { Dropdowns, ToolSize } from '../../../../../types';
import './Size.scss';
import { useLang } from '../../../../../hooks';

function openDropdown() {
	store.dispatch(actionCreators.setDropdown(Dropdowns.size));
}

function setToolSize(toolSize: ToolSize) {
	store.dispatch(actionCreators.setToolSize(toolSize));
}

const Size = () => {
	const lang = useLang();

	return <div className='Size'>
		<div className='Size__content' onClick={openDropdown}>
			<img draggable='false' className='Size__mainIcon'
				src={require('../../../../../assets/icons/main-tools-tab/6_size.png')} alt='' />

			<div>
				{lang.homeTabs.size.title}
			</div>

			<img draggable='false' className='Size__arrowDown'
				src={require('../../../../../assets/icons/arrow_down.png')} alt='' />
		</div>

		<Dropdown provider={Dropdowns.size}>
			<ul className='Size__list'>
				<li className='Size__li' onClick={() => setToolSize(ToolSize.one)}>Size 1px</li>
				<li className='Size__li' onClick={() => setToolSize(ToolSize.two)}>Size 2px</li>
				<li className='Size__li' onClick={() => setToolSize(ToolSize.three)}>Size 3px</li>
				<li className='Size__li' onClick={() => setToolSize(ToolSize.four)}>Size 4px</li>
			</ul>
		</Dropdown>
	</div>;
};

export default Size;
