import React from 'react';
import { RibbonIcon, IconImage } from './RibbonStyles';

export const HelpIcon = () => {
	return <RibbonIcon>
		<IconImage
			draggable='false'
			src={require('../../assets/icons/top/help.png')}
		/>
	</RibbonIcon>;
};
