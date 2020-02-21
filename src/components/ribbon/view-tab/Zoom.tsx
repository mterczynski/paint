import React from 'react';

const Figure = ({imgPath, children}: {
	imgPath: string,
	children: React.ReactNode,
}) => {
	return <figure className='ViewTab__figure'>
		<img
			draggable='false'
			alt=''
			className='ViewTab__icon'
			src={require(imgPath)}
		/>
		<figcaption className='ViewTab__figcaption'>
			{children}
		</figcaption>
	</figure>;
};

const Zoom = () => {
	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<Figure imgPath={'../../../assets/icons/view-tab/zoomIn.png'}>Powiększ</Figure>
			<Figure imgPath={'../../../assets/icons/view-tab/zoomOut.png'}>Pomniejsz</Figure>
			<Figure imgPath={'../../../assets/icons/view-tab/maximize.png'}>
				100
				<br/>
				%
			</Figure>
		</div>
		<h1 className='ViewTab__description'>Powiększenie</h1>
	</div>;
};

export default Zoom;
