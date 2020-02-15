import React from 'react';

require('./Tab.scss');

const Tab = ({ children }) => {
	return <div className="Tab">{children}</div>;
};

export default Tab;
