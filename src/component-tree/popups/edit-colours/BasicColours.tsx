import React from 'react';
import { Subheading } from './styles/Subheading';
import styled from 'styled-components';

const basicColors = [
	['rgb(255,128,128)',
	'rgb(255,255,128)',
	'rgb(128,255,128)',
	'rgb(0,255,128)',
	'rgb(128,255,255)',
	'rgb(0,128,255)',
	'rgb(255,128,192)',
	'rgb(255,128,255)'],

	// second row:
	['rgb(255,0,0)',
	'rgb(255,255,0)',
	'rgb(128,255,0)',
	'rgb(0,255,64)',
	'rgb(0,255,255)',
	'rgb(0,128,192)',
	'rgb(128,128,192)',
	'rgb(255,0,255)'],

	// third row:
	['rgb(128,64,64)',
	'rgb(255,128,64)',
	'rgb(0,255,0)',
	'rgb(0,128,128)',
	'rgb(0,64,128)',
	'rgb(128,128,255)',
	'rgb(128,0,64)',
	'rgb(255,0,128)'],

	// fourth row:
	['rgb(128,0,0)',
	'rgb(255,128,0)',
	'rgb(0,128,0)',
	'rgb(0,128,64)',
	'rgb(0,0,255)',
	'rgb(0,0,160)',
	'rgb(128,0,128)',
	'rgb(128,0,255)'],

	// fifth row:
	['rgb(64,0,0)',
	'rgb(128,64,0)',
	'rgb(0,64,0)',
	'rgb(0,64,64)',
	'rgb(0,0,128)',
	'rgb(0,0,64)',
	'rgb(64,0,64)',
	'rgb(64,0,128)'],

	// sixth row:
	['rgb(0,0,0)',
	'rgb(128,128,0)',
	'rgb(128,128,64)',
	'rgb(128,128,128)',
	'rgb(64,128,128)',
	'rgb(192,192,192)',
	'rgb(64,0,64)',
	'rgb(255,255,255)'],
];

const Row = styled.div`
	display: flex;
	margin-bottom: 6px;
`;

const TileInterior = styled.div<{color: string}>`
	border-left: 1px solid rgb(105, 105, 105);
	border-top: 1px solid rgb(105, 105, 105);
	border-right: 1px solid rgb(227, 227, 227);
	border-bottom: 1px solid rgb(227, 227, 227);
	width: 15px;
	height: 13px;
	background: ${props => props.color};
`;

const Tile = ({color}: {color: string}) => {
	return <div style={{
		borderLeft: '1px solid rgb(160,160,160)',
		borderTop: '1px solid rgb(160,160,160)',
		borderRight: '1px solid rgb(255,255,255)',
		borderBottom: '1px solid rgb(255,255,255)',
		marginRight: '8px'
	}}>
		<TileInterior color={color}/>
	</div>;
};

export const BasicColours = () => {
	return <div style={{paddingLeft: '6px'}}>
		<Subheading>Basic colours:</Subheading>

		{basicColors.map(row => <Row>
			{row.map(color => <Tile color={color}></Tile>)}
		</Row>)}
	</div>;
};
