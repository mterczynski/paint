import React from 'react';
import { useLang } from '../../../hooks';

const imgs = {
	zoomIn: require('../../../assets/icons/view-tab/zoomIn.png'),
	zoomOut: require('../../../assets/icons/view-tab/zoomOut.png'),
	maximize: require('../../../assets/icons/view-tab/maximize.png'),
};

const Figure = ({imgPath, children}: {
	imgPath: string,
	children: React.ReactNode,
}) => {
	return <figure className='ViewTab__figure'>
		<img
			draggable='false'
			alt=''
			className='ViewTab__icon'
			src={imgPath}
		/>
		<figcaption className='ViewTab__figcaption'>
			{children}
		</figcaption>
	</figure>;
};

const Zoom = () => {
	const lang = useLang();

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<Figure imgPath={imgs.zoomIn}>{lang.viewTab.zoom.zoomIn.title}</Figure>
			<Figure imgPath={imgs.zoomOut}>{lang.viewTab.zoom.zoomOut.title}</Figure>
			<Figure imgPath={imgs.maximize}>
				100
				<br/>
				%
			</Figure>
		</div>
		<h1 className='ViewTab__description'>{lang.viewTab.zoom.title}</h1>
	</div>;
};

export default Zoom;
