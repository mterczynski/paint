import React from 'react';

const Zoom = () => {
	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<figure className='ViewTab__figure'>
				<img
					draggable='false'
					className='ViewTab__icon'
					alt=''
					src={require('../../../assets/icons/view-tab/zoomIn.png')}
				/>
				<figcaption className='ViewTab__figcaption'>
					Powiększ
				</figcaption>
			</figure>

			<figure className='ViewTab__figure'>
				<img
					draggable='false'
					alt=''
					className='ViewTab__icon'
					src={require('../../../assets/icons/view-tab/zoomOut.png')}
				/>
				<figcaption className='ViewTab__figcaption'>
					Pomniejsz
				</figcaption>
			</figure>

			<figure className='ViewTab__figure'>
				<img
					draggable='false'
					alt=''
					className='ViewTab__icon'
					src={require('../../../assets/icons/view-tab/maximize.png')}
				/>
				<figcaption className='ViewTab__figcaption'>
					100
					<br />%
				</figcaption>
			</figure>
		</div>
		<h1 className='ViewTab__description'>Powiększenie</h1>
	</div>;
};

export default Zoom;
