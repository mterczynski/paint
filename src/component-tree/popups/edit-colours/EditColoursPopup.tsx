import { Popup } from '../Popup';
import React from 'react';
import styled from 'styled-components';
import { BasicColours } from './BasicColours';

const StyledContent = styled.div`
	background: rgb(240, 240, 240);
`;

const CustomColours = () => {
	return <></>;
};

const CloseButtons = () => {
	return <></>;
};

const ColorPicker = () => {
	return <></>;
};

const ColorOptions = () => {
	return <></>;
};

const AddToCustomColours = () => {
	return <></>;
};

export const EditColoursPopup = () => {
	return <Popup title='Edit Colours'>
		<StyledContent>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<BasicColours/>
				<CustomColours/>
				<CloseButtons/>
			</div>

			<div style={{display: 'flex', flexDirection: 'column'}}>
				<ColorPicker/>
				<ColorOptions/>
				<AddToCustomColours/>
			</div>
		</StyledContent>
	</Popup>;
};