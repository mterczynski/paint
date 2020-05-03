import React from 'react';
import { useLang } from '../../../hooks';

const Display = () => {
	const lang = useLang().viewTab.display;

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<figure className='ViewTab__figure'>
				<img
					draggable='false'
					className='ViewTab__icon'
					alt=''
					src={require('../../../assets/icons/view-tab/fullScreen.png')}
				/>
				<figcaption className='ViewTab__figcaption'>
					{lang.fullScreen.title}
				</figcaption>
			</figure>

			<figure className='ViewTab__figure'>
				<img
					draggable='false'
					alt=''
					className='ViewTab__icon'
					src={require('../../../assets/icons/view-tab/miniature.png')}
				/>
				<figcaption className='ViewTab__figcaption'>
					{lang.thumbnail.title}
				</figcaption>
			</figure>
		</div>
		<h1 className='ViewTab__description'>{lang.title}</h1>
	</div>;
};

export default Display;
