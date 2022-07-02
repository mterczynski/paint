import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Point, RectangleSize } from "../types";

/**
 * Information based on which we can calculate the size & position of rectangle
 * Each property represents a position of a side on X or Y axis
 *
 * X and Y axes are defined as:
 *
 * S ------> X
 * |
 * |
 * v
 * Y
 *
 * where S = (0,0) point
 */
interface RectangleSidePositions {
	/** position of the left side on X axis */
	left: number;
	/** position of the right side on X axis */
	right: number;
	/** position of the top side on Y axis */
	top: number;
	/** position of the bottom side on Y axis */
	bottom: number;
}

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

const VerticalBorder = styled.div<{ side: "top" | "bottom" }>`
	width: calc(100% + 6px);
	background: transparent;
	z-index: 1;
	position: absolute;
	cursor: ns-resize;
	height: 6px;
	left: -3px;

	${({ side }) => (side === "top" ? `top: -3px` : `bottom: -3px`)};
`;

const HorizontalBorder = styled.div<{ side: "left" | "right" }>`
	height: calc(100% + 6px);
	background: transparent;
	z-index: 1;
	position: absolute;
	cursor: ew-resize;
	width: 6px;
	top: -3px;

	${({ side }) => (side === "left" ? `left: -3px` : `right: -3px`)};
`;

const ResizeHandler = ({
	onChange,
	side,
}: {
	onChange: (mousePosition: { x: number; y: number }) => unknown;
	side: "left" | "top" | "right" | "bottom";
}) => {
	const [isDragged, setIsDragged] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(
		function attachMouseDownAndMouseUpListeners() {
			const currentRef = ref.current;
			const onMouseDown = () => setIsDragged(true);
			const onMouseUp = () => {
				setIsDragged(false);
			};
			currentRef?.addEventListener("mousedown", onMouseDown);
			window.addEventListener("mouseup", onMouseUp);

			return () => {
				currentRef?.removeEventListener("mousedown", onMouseDown);
				window?.removeEventListener("mouseup", onMouseUp);
			};
		},
		[ref]
	);

	useEffect(
		function attachMousemoveListenerOnMouseDown() {
			if (!isDragged) {
				return;
			}

			const onMouseMove = (event: MouseEvent) => {
				onChange({ x: event.x, y: event.y });
			};
			window.addEventListener("mousemove", onMouseMove);

			return () => {
				window.removeEventListener("mousemove", onMouseMove);
			};
		},
		[isDragged, onChange]
	);

	return side === "left" || side === "right" ? (
		<HorizontalBorder ref={ref} side={side}></HorizontalBorder>
	) : (
		<VerticalBorder ref={ref} side={side}></VerticalBorder>
	);
};

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
	const [sides, setSides] = useState({
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
				side="top"
				onChange={({ y }) => setSides({ ...sides, top: y })}
			></ResizeHandler>

			<ResizeHandler
				side="bottom"
				onChange={({ y }) => setSides({ ...sides, bottom: y })}
			></ResizeHandler>

			<ResizeHandler
				side="left"
				onChange={({ x }) => setSides({ ...sides, left: x })}
			></ResizeHandler>

			<ResizeHandler
				side="right"
				onChange={({ x }) => setSides({ ...sides, right: x })}
			></ResizeHandler>
			{children}
		</ResizableWindowContainer>
	);
};
