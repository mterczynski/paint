import React from 'react';

require('./Group.scss');

const Group = (props)=>(
	<div className="MainToolsTab__group">
		{props.children}
	</div>
)

export default Group;