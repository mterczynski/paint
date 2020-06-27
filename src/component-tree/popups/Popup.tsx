import React from 'react';
import styled from 'styled-components';

const images = {
	close: require('../../assets/icons/popups/close.png'),
	closeActive: require('../../assets/icons/popups/close-active.png'),
};

const a = `background: ${images.close};`;

const StyledPopup = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid black;
	background: white;
`;

const PopupHeader = styled.header`
	font-size: 0.73em;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
`;

const StyledXIcon = styled.button`
  display: block;
	text-align: center;
	background: url(${images.close});
	width: 31px;
	height: 29px;
	border: none;
	&:hover {
		background: url(${images.closeActive});
		color: white;
	}
	&:focus {
		outline: none;
	}
`;

function closePopup() {
	// todo
	// store.dispatch();
}

export const Popup = ({title, children, width}: {title: string, children: any, width: string}) => {
	return <StyledPopup style={{width}}>
		<PopupHeader>
			<div style={{height: '100%', paddingLeft: '8px'}}>{title}</div>
			<StyledXIcon onClick={closePopup}/>
		</PopupHeader>
		<div>
			{children}
		</div>
	</StyledPopup>;
};
