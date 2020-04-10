import React from 'react';
import { Dropdowns } from '../types';
import './Dropdown.scss';
import { useAppState } from '../hooks';

const Dropdown = ({ provider, disabled = false, children }: {
	provider: Dropdowns,
	disabled?: boolean,
	children: React.ReactNode,
}) => {
	const openedDropdown = useAppState().openedDropdown;

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
