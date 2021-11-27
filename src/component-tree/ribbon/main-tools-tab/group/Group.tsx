import * as React from 'react';

import './Group.scss';

const Group = ({children}: {children: React.ReactNode}) => (
	<div className='MainToolsTab__group'>{children}</div>
);

export default Group;
