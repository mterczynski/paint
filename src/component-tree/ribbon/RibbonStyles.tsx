import styled from 'styled-components';

export const ActiveRibbonTab = styled.div`
	position: relative;
	bottom: 0;
	width: 100%;
	height: 93px;
	box-sizing: border-box;
	background: rgb(245, 246, 247);
`;

export const RibbonContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	background: white;
	width: 100%;
	flex-shrink: 0;
`;

export const RibbonHead = styled.div`
	position: relative;
	width: 100%;
	height: 23px;
	box-sizing: border-box;
	top: 0;
`;

export const RibbonTabs = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	font-size: 11px;
	display: flex;
`;

export const FileTab = styled.div`
	position: relative;
	background: rgb(25, 121, 202);
	text-align: center;
	color: white;
	display: inline-block;
	box-sizing: border-box;
	height: 100%;
	padding: 0 19px;
	line-height: 23px;
	/* To do: animate on mouseenter and mouseleave instead of :hover */
	&:hover {
		background: rgb(41, 140, 225);
	}
`;

export const HelperIcons = styled.div`
	position: absolute;
	right: 0;
	display: flex;
`;

export const RibbonIcon = styled.div`
	display: inline-block;
	position: relative;
	height: 100%;
	width: 22px;
	height: 22px;
	box-sizing: border-box;
	&:hover {
		border: 1px solid rgb(171, 212, 254);
		background: rgb(241, 247, 254);
	}
`;

export const IconImage = styled.img<{reversed?: boolean}>`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	${props => props.reversed && `transform: translate(-50%, -50%) rotate(180deg);`}
`;

export const StyledTab = styled.div<{active?: boolean}>`
	padding: 0 13px;
	position: relative;
	height: calc(100% + 1px);
	z-index: 1;
	box-sizing: border-box;
	display: inline-block;
	line-height: 23px;
	border: 1px solid transparent;
	border-bottom: 1px solid #dadbdc !important;

	&:hover {
		background: rgb(253, 253, 255);
		border: 1px solid rgb(235, 236, 236);
		border-bottom: none;
	}

	${props => props.active && `
		background: rgb(245, 246, 247) !important;
		border: 1px solid rgb(218, 219, 220) !important;
		border-bottom: none !important;
	`}
`;
