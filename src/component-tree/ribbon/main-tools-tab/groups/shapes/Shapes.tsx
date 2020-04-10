import React from 'react';

import './Shapes.scss';

const lastShapeIndex = 23;

const shapeImageUrls = [...Array(lastShapeIndex)].map(
	(e, i) => require(`../../../../../assets/icons/main-tools-tab/5_shapes/${i + 1}.png`),
);

const shapeDescriptions = Object.freeze([
	// first row:
	'Linia',
	'Krzywa',
	'Owal',
	'Prostokąt',
	'Zaokrąglony prostokąt',
	'Wielokąt',
	'Trójkąt',
	// second row:
	'Trójkąt prostokątny',
	'Romb',
	'Pięciokąt',
	'Sześciokąt',
	'Strzałka w prawo',
	'Strzałka w lewo',
	'Strzałka w górę',
	// thrid row:
	'Strzałka w dół',
	'Gwiazda czwororamienna',
	'Gwiazda pięcioramienna',
	'Gwiazda sześcioramienna',
	'Zaokrąglone prostokątne objaśnienie',
	'Owalne objaśnienie',
	'Objaśnienie w kształcie chmury',
	// fourth row:
	'Serce',
	'Błyskawica',
]);

const Shapes = () => {
	// images:
	const arrDown = require('../../../../../assets/icons/arrow_down.png');
	const contourActive = require('../../../../../assets/icons/main-tools-tab/5_shapes/contour_active.png');
	const fill = require('../../../../../assets/icons/main-tools-tab/5_shapes/fill_active.png');

	return (
		<div className='Shapes'>
			<div className='Shapes__content'>
				<div className='Shapes__shapeList'>
					<div className='Shapes__shapeListContent'>
						{shapeImageUrls.map((shape, i) => (
							<img
								draggable='false'
								className='Shapes__shape'
								src={shape}
								alt=''
								key={i}
							/>
						))}
					</div>
					<div className='Shapes__shapeListControls' />
				</div>

				<div className='Shapes__options'>
					<div className='Shapes__option Shapes__option--first'>
						<img draggable='false' src={contourActive} alt='' />
						<span> Kontur </span>
						<img draggable='false' alt='' src={arrDown} />
					</div>

					<div className='Shapes__option Shapes__option--second'>
						<img draggable='false' src={fill} alt='' />
						<span> Wypełnienie </span>
						<img draggable='false' alt='' src={arrDown} />
					</div>
				</div>
			</div>
			<div className='Shapes__description'>Kształty</div>
		</div>
	);
};

export default Shapes;