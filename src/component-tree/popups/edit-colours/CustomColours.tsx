import React, { useState } from 'react';
import { Subheading } from './styles/Subheading';
import styled from 'styled-components';
import { ColorTile } from './ColorTile';

const initialCustomColors = [
	['rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)'],

	// second row:
	['rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)',
	'rgb(255,255,255)'],
];

const Row = styled.div`
	display: flex;
	margin-bottom: 1px;
`;

interface ColorPosition {
	rowIndex: number,
	columnIndex: number
}

function isColorActive(selectedColorPosition: ColorPosition | null, colorPosition: ColorPosition) {
	if(!selectedColorPosition) {
		return false;
	}

	return selectedColorPosition.rowIndex === colorPosition.rowIndex &&
		selectedColorPosition.columnIndex === colorPosition.columnIndex;
}

export const CustomColours = () => {
	const [selectedColor, setSelectedColor] = useState<null | {rowIndex: number, columnIndex: number}>(null);

	return <div style={{paddingLeft: '6px'}}>
		<Subheading>Custom colours:</Subheading>

		{initialCustomColors.map((row, rowIndex) => <Row key={rowIndex}>
			{row.map((color, columnIndex) =>
				<ColorTile
					color={color}
					key={columnIndex}
					active={isColorActive(selectedColor, {rowIndex, columnIndex})}
					onClick={() => setSelectedColor({rowIndex, columnIndex})}
				/>
			)}
		</Row>)}
	</div>;
};
