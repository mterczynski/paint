import React from 'react';
import Tab from '../tab/Tab';
import Group from './group/Group';
import Brushes from './groups/brushes/Brushes';
import Clipboard from './groups/clipboard/Clipboard';
import Colors from './groups/colors/Colors';
import Image from './groups/image/Image';
import Paint3d from './groups/paint3d/Paint3d';
import Shapes from './groups/shapes/Shapes';
import Size from './groups/size/Size';
import Tools from './groups/tools/Tools';

import './MainToolsTab.scss';

const MainToolsTab = () => {
	return (
		<Tab>
			<div className='MainToolsTab'>
				<Group>
					<Clipboard />
				</Group>
				<Group>
					<Image />
				</Group>
				<Group>
					<Tools />
				</Group>
				<Group>
					<Brushes />
				</Group>
				<Group>
					<Shapes />
				</Group>
				<Group>
					<Size />
				</Group>
				<Group>
					<Colors />
				</Group>
				<Group>
					<Paint3d />
				</Group>
			</div>
		</Tab>
	);
};

export default MainToolsTab;
