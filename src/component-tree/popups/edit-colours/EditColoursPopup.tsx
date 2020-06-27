import { Popup } from '../Popup';
import React from 'react';
import styled from 'styled-components';
import { BasicColours } from './colours-column/sub-components/BasicColours';
import { CustomColours} from './colours-column/sub-components/CustomColours';

const StyledContent = styled.div`
	background: rgb(240, 240, 240);
`;

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
	return <Popup title='Edit Colours' width='400px'>
		<StyledContent>
			<div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
				<BasicColours/>
				<CustomColours/>
				<CloseButtons/>
			</div>

			<div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
				<ColorPicker/>
				<ColorOptions/>
				<AddToCustomColours/>
			</div>
		</StyledContent>
	</Popup>;
};
