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

const TopBorder = styled.div`
	height: 6px;
	top: -3px;
	left: -3px;
	width: calc(100% + 6px);
	background: red;
	opacity: 0;
	z-index: 2;
	position: absolute;
	cursor: ns-resize;
`;

const BottomBorder = styled.div`
	height: 6px;
	bottom: -3px;
	left: -3px;
	width: calc(100% + 6px);
	background: red;
	opacity: 0;
	z-index: 2;
	position: absolute;
	cursor: ns-resize;
`;

const TopResizeHandler = ({
	onTopChange,
}: {
	onTopChange: (mouseY: number) => unknown;
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
				onTopChange(event.clientY);
			};
			window.addEventListener("mousemove", onMouseMove);

			return () => {
				window.removeEventListener("mousemove", onMouseMove);
			};
		},
		[isDragged, onTopChange]
	);

	return <TopBorder ref={ref}></TopBorder>;
};

const BottomResizeHandler = ({
	onBottomChange,
}: {
	onBottomChange: (mouseY: number) => unknown;
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
				onBottomChange(event.clientY);
			};
			window.addEventListener("mousemove", onMouseMove);

			return () => {
				window.removeEventListener("mousemove", onMouseMove);
			};
		},
		[isDragged, onBottomChange]
	);

	return <BottomBorder ref={ref}></BottomBorder>;
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
			<TopResizeHandler
				onTopChange={(mouseY) => setSides({ ...sides, top: mouseY })}
			></TopResizeHandler>

			<BottomResizeHandler
				onBottomChange={(mouseY) => setSides({ ...sides, bottom: mouseY })}
			></BottomResizeHandler>
			{children}
		</ResizableWindowContainer>
	);
};
