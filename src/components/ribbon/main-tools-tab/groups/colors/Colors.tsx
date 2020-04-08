import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../../../redux/action-creators';
import store from '../../../../../redux/store';

import { AppState, IndexOfMainColor } from '../../../../../types';
import './Colors.scss';

const basicColors = Object.freeze([
	// first row:
	Object.freeze([
		'rgb(0,0,0)',
		'rgb(127,127,127)',
		'rgb(136,0,21)',
		'rgb(237,28,36)',
		'rgb(255,127,39)',
		'rgb(255,242,0)',
		'rgb(34,177,76)',
		'rgb(0,162,232)',
		'rgb(63,72,204)',
		'rgb(163,73,164)',
	]),
	// second row:
	Object.freeze([
		'rgb(255,255,255)',
		'rgb(195,195,195)',
		'rgb(185,122,87)',
		'rgb(255,174,201)',
		'rgb(255,201,14)',
		'rgb(239,228,176)',
		'rgb(181,230,29)',
		'rgb(153,217,234)',
		'rgb(112,146,190)',
		'rgb(200,191,231)',
	]),
]);

const lastUsedCustomColors = Object.freeze([
	'rgb(255, 111, 0)',
	'rgb(0, 0, 0)',
	'rgb(255, 255, 255)',
	null,
	null,
	null,
	null,
	null,
	null,
	null,
]);

function selectMainColorIndex(colorIndex: IndexOfMainColor) {
	store.dispatch(actionCreators.selectMainColorIndex(colorIndex));
}

function setSelectedMainColor(color: string) {
	store.dispatch(actionCreators.setSelectedMainColor(color));
}

const EditColors = () => {
	return <div className='Colors__editColors'>
		<img
			className='Colors__editColorsIcon'
			src={require('../../../../../assets/icons/main-tools-tab/7_colors.png')}
			alt=''
		/>
		<div className='Colors__colorBoxText'>
			Edytuj
			<br />
			kolory
		</div>
	</div>;
};

const RowOfColors = ({ colors }: { colors: Readonly<(string | null)[]> }) => {
	return <div className='Colors__colorRow'>
		{colors.map((color, i) => {
			if (color) {
				return (
					<div
						style={{ background: color }}
						key={i}
						className='Colors__colorBox Colors__colorBox--tiny'
						onClick={() => setSelectedMainColor(color)}
					/>
				);
			}

			return (
				<div
					className='Colors__colorBox Colors__colorBox--tiny--disabled'
					key={i}
				/>
			);
		})}
	</div>;
};

const Colors = () => {
	const stateOfColors = useSelector((appState: AppState) => appState.colors);

	return (
		<div className='Colors'>
			<div className='Colors__content'>
				<div
					className={
						(stateOfColors.selectedMainColorIndex === 1
							? 'Colors__mainColor--active'
							: '') + ' Colors__mainColor'
					}
					onClick={() => selectMainColorIndex(1)}
				>
					<div
						style={{ background: stateOfColors.color1 }}
						className='Colors__colorBox'
					/>
					<div className='Colors__colorBoxText'>
						Kolor <br /> 1
					</div>
				</div>

				<div
					className={
						(stateOfColors.selectedMainColorIndex === 2
							? 'Colors__mainColor--active'
							: '') + ' Colors__mainColor'
					}
					onClick={() => selectMainColorIndex(2)}
				>
					<div
						style={{ background: stateOfColors.color2 }}
						className='Colors__colorBox Colors__colorBox--small'
					/>
					<div className='Colors__colorBoxText'>
						Kolor
						<br />2
					</div>
				</div>

				<div className='Colors__colors'>
					<RowOfColors colors={basicColors[0]}></RowOfColors>
					<RowOfColors colors={basicColors[1]}></RowOfColors>
					<RowOfColors colors={lastUsedCustomColors}></RowOfColors>
				</div>

				<EditColors></EditColors>
			</div>
			<div className='Colors__description'>Kolory</div>
		</div>
	);
};

export default Colors;
