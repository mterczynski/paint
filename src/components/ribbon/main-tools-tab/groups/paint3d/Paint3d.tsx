import React from 'react';
import './Paint3d.scss';

const Paint3d = () => {
	return (
		<div className='Paint3d'>
			<div className='Paint3d__content'>
				<img
					draggable='false'
					className='Paint3d__mainIcon'
					src={require('../../../../../assets/icons/main-tools-tab/8_paint3d.png')}
					alt=''
				/>

				<div className='Paint3d__description'>Otwórz aplikację Paint 3D</div>
			</div>
		</div>
	);
};

export default Paint3d;
