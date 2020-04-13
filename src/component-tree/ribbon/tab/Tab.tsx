import React from 'react';

import './Tab.scss';

const Tab = ({ children }: {children: React.ReactNode}) => {
	return <div className='Tab'>{children}</div>;
};

export default Tab;
