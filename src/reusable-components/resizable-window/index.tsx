import { useState } from "react";
import styled from "styled-components";
import { Point, RectangleSize } from "../../types";
import { ResizeHandler } from "./resize-handler";
import { RectangleSidePositions, Side } from "./types";

const ResizableWindowContainer = styled.div<{
	sides: RectangleSidePositions;
}>`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	left: ${({ sides }) => `${sides.left}px`};
	top: ${({ sides }) => `${sides.top}px`};
	background: white;
	border: 1px solid rgb(24, 131, 215);
	box-shadow: 0px 0px 15px 0 rgba(0, 0, 0, 0.35);
	width: ${({ sides }) => `${sides.right - sides.left}px`};
	height: ${({ sides }) => `${sides.bottom - sides.top}px`};
`;

interface ResizableWindowProps {
	initialSize: RectangleSize;
	initialPosition: Point;
	children?: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler;
	onContextMenu?: React.MouseEventHandler;
}

export const ResizableWindow = ({
	initialSize,
	initialPosition,
	children,
	className,
	onClick,
	onContextMenu,
}: ResizableWindowProps) => {
	const [sides, setSides] = useState<RectangleSidePositions>({
		left: initialPosition.x,
		top: initialPosition.y,
		right: initialPosition.x + initialSize.width,
		bottom: initialPosition.y + initialSize.height,
	});

	return (
		<ResizableWindowContainer
			sides={sides}
			className={className}
			onClick={onClick}
			onContextMenu={onContextMenu}
		>
			<ResizeHandler
				side={Side.top}
				onChange={({ y }) => setSides({ ...sides, top: y })}
			></ResizeHandler>

			<ResizeHandler
				side={Side.bottom}
				onChange={({ y }) => setSides({ ...sides, bottom: y })}
			></ResizeHandler>

			<ResizeHandler
				side={Side.left}
				onChange={({ x }) => setSides({ ...sides, left: x })}
			></ResizeHandler>

			<ResizeHandler
				side={Side.right}
				onChange={({ x }) => setSides({ ...sides, right: x })}
			></ResizeHandler>
			{children}
		</ResizableWindowContainer>
	);
};
