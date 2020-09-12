import styled from 'styled-components';
import React from 'react';
import { ReactOnClickHandler } from '../../../../../types/onClickHandler';

const TileInterior = styled.div<{color: string}>`
	border-left: 1px solid rgb(105, 105, 105);
	border-top: 1px solid rgb(105, 105, 105);
	border-right: 1px solid rgb(227, 227, 227);
	border-bottom: 1px solid rgb(227, 227, 227);
	width: 15px;
	height: 13px;
	background: ${props => props.color};
`;

export const ColorTile = ({color, active, onClick}: {color: string, active: boolean, onClick?: ReactOnClickHandler}) => {
	const InteriorBorder = styled.div`
		border-left: 1px solid rgb(160,160,160);
		border-top: 1px solid rgb(160,160,160);
		border-right: 1px solid rgb(255,255,255);
		border-bottom: 1px solid rgb(255,255,255);
	`;

	const ActiveOutline = styled.div<{active?: boolean}>`
		outline: 1px dotted ${props => props.active ? `black` : `transparent`};
		border: 1px solid transparent;
		margin-right: 3px;
	`;

	const ActiveBorder = styled.div<{active?: boolean}>`
		border: 1px solid ${props => props.active ? `black` : `transparent`};
	`;

	return <ActiveOutline active={active} onClick={onClick}>
		<ActiveBorder active={active}>
			<InteriorBorder>
				<TileInterior color={color}/>
			</InteriorBorder>
		</ActiveBorder>
	</ActiveOutline>;
};
