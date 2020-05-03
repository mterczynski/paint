import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../types';
import './BottomBar.scss';
import { useLang } from '../../hooks';

const images = {
	axis: require('../../assets/icons/bottom-bar/axis.png'),
	floppy: require('../../assets/icons/bottom-bar/floppy.png'),
	image_size: require('../../assets/icons/bottom-bar/image_size.png'),
	minus: require('../../assets/icons/bottom-bar/minus.png'),
	minus_hover: require('../../assets/icons/bottom-bar/minus_hover.png'),
	minus_pressed: require('../../assets/icons/bottom-bar/minus_pressed.png'),
	plus: require('../../assets/icons/bottom-bar/plus.png'),
	plus_hover: require('../../assets/icons/bottom-bar/plus_hover.png'),
	plus_pressed: require('../../assets/icons/bottom-bar/plus_pressed.png'),
	selection: require('../../assets/icons/bottom-bar/selection.png'),
	slider: require('../../assets/icons/bottom-bar/slider.png'),
	dots: require('../../assets/icons/bottom-bar/dots.png'),
};

const BottomBar = () => {
	const lang = useLang().statusBar;
	const isBottomBarVisible = useSelector((state: AppState) => state.isBottomBarVisible);
	const image = {
		height: useSelector((state: AppState) => state.imageSettings.heightInPx),
		width: useSelector((state: AppState) => state.imageSettings.widthInPx),
	};

	if (!isBottomBarVisible) {
		return null;
	}

	return (
		<div className='BottomBar'>
			<div className='BottomBar__col BottomBar__col--small'>
				<img
					className='BottomBar__iconImage'
					draggable='false'
					src={images.axis}
					alt=''
				/>
			</div>
			<div className='BottomBar__col BottomBar__col--small'>
				<img
					className='BottomBar__iconImage--top1'
					draggable='false'
					src={images.selection}
					alt=''
				/>
			</div>
			<div className='BottomBar__col BottomBar__col--small'>
				<img
					className='BottomBar__iconImage--top1'
					draggable='false'
					src={images.image_size}
					alt=''
					style={{ marginRight: '6px' }}
				/>
				{image.width} &times; {image.height}{lang.pixels}
			</div>
			<div className='BottomBar__col BottomBar__col--small' />
			<div className='BottomBar__col BottomBar__col--stretched' />
			<div className='BottomBar__col BottomBar__col--medium'>
				<span className='BottomBar__zoom-indicator'>100%</span>

				<div className='BottomBar__minus' />

				<div className='BottomBar__slider'>
					<div className='BottomBar__slider-background' />
					<img
						draggable='false'
						src={images.slider}
						alt=''
						className='BottomBar__slider-image'
					/>
				</div>

				<div className='BottomBar__plus' />

				<img
					className='BottomBar__iconImage--dots'
					draggable='false'
					src={images.dots}
					alt=''
				/>
			</div>
		</div>
	);
};

export default BottomBar;
