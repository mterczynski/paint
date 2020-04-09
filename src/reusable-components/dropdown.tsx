import React from 'react';
import { useSelector } from 'react-redux';

import { AppState, Dropdowns } from '../types';
import './dropdown.scss';

const Dropdown = ({ provider, disabled = false, children }: {
	provider: Dropdowns,
	disabled?: boolean,
	children: React.ReactNode,
}) => {
	const openedDropdown = useSelector((state: AppState) => state.openedDropdown);

	if (openedDropdown !== provider || disabled) {
		return null;
	}

	return (
		<div className='Dropdown'>
			<div className='Dropdown__content'>{children}</div>
		</div>
	);
};

export default Dropdown;
