import React from 'react';
import { useSelector } from 'react-redux';

require('./dropdown.scss');

const Dropdown = ({ provider, disabled, children }) => {
	const openedDropdown = useSelector(state => state.openedDropdown);

	if (openedDropdown !== provider || disabled) {
		return null;
	}

	return (
		<div className="Dropdown">
			<div className="Dropdown__content">{children}</div>
		</div>
	);
};

export default Dropdown;
