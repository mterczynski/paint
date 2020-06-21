import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState, Dropdowns } from '../types';

const DropdownContent = styled.div`
	position: absolute;
	border: 1px solid black;
	z-index: 1;
`;

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
			<DropdownContent>{children}</DropdownContent>
		</div>
	);
};

export default Dropdown;
