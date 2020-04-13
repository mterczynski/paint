import React from 'react';
import { useSelector } from 'react-redux';
import * as actionCreators from '../../../../../redux/action-creators';
import store from '../../../../../redux/store';

import { AppState, IndexOfMainColor, RGBAColor } from '../../../../../types';
import './Colors.scss';
import { rgbaColorToCssColor } from '../../../../../core/drawing/utils';

const basicColors = Object.freeze([
	// first row:
	Object.freeze([
		{red: 0, green: 0, blue: 0, alpha: 128},
		{red: 127, green: 127, blue: 127, alpha: 128},
		{red: 136, green: 0, blue: 21, alpha: 128},
		{red: 237, green: 28, blue: 36, alpha: 128},
		{red: 255, green: 127, blue: 39, alpha: 128},
		{red: 255, green: 242, blue: 0, alpha: 128},
		{red: 34, green: 177, blue: 76, alpha: 128},
		{red: 0, green: 162, blue: 232, alpha: 128},
		{red: 63, green: 72, blue: 204, alpha: 128},
		{red: 163, green: 73, blue: 127, alpha: 128},
	]),
	// second row:
	Object.freeze([
		{red: 255, green: 255, blue: 255, alpha: 128},
		{red: 195, green: 195, blue: 195, alpha: 128},
		{red: 185, green: 122, blue: 87, alpha: 128},
		{red: 255, green: 174, blue: 201, alpha: 128},
		{red: 255, green: 201, blue: 14, alpha: 128},
		{red: 239, green: 228, blue: 176, alpha: 128},
		{red: 181, green: 230, blue: 29, alpha: 128},
		{red: 153, green: 217, blue: 234, alpha: 128},
		{red: 112, green: 146, blue: 190, alpha: 128},
		{red: 200, green: 191, blue: 231, alpha: 128},
	]),
]);

const lastUsedCustomColors = Object.freeze([
	{red: 255, green: 111, blue: 0, alpha: 128},
	{red: 0, green: 0, blue: 0, alpha: 128},
	{red: 255, green: 255, blue: 255, alpha: 128},
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

function setSelectedMainColor(color: RGBAColor) {
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

const RowOfColors = ({ colors }: { colors: Readonly<(RGBAColor | null)[]> }) => {
	return <div className='Colors__colorRow'>
		{colors.map((color, i) => {
			if (color) {
				return (
					<div
						style={{ background: rgbaColorToCssColor(color) }}
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
						style={{ background: rgbaColorToCssColor(stateOfColors.color1) }}
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
						style={{ background: rgbaColorToCssColor(stateOfColors.color2) }}
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
