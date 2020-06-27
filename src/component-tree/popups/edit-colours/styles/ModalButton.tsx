import styled from 'styled-components';

export const ModalButton = styled.button`
	background: rgb(225,225,225);
	border: 1px solid rgb(173, 173, 173);
	height: 19px;
	line-height: 19px;
	outline: none;
	transition-duration: 0.3s;
	font-size: 0.7em;
	color: black;
	&:active {
		border: 2px solid rgb(0,120,215);
	}
	&:hover {
		background: rgb(229, 241, 251);
		border: 1px solid rgb(0,120,215);
	}
`;
