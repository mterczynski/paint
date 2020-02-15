import React from 'react';
import { useSelector } from 'react-redux';

import './dropdown.scss';

const Dropdown = ({ provider, disabled = false, children }) => {
	const openedDropdown = useSelector(state => state.openedDropdown);

	if (openedDropdown !== provider || disabled) {
		return null;
	}

	return (
		<div className="Dropdown">
			<div styleName="Dropdown__content">{children}</div>
		</div>
	);
};

export default Dropdown;
