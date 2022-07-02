import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Side } from "./types";

const baseBorderStyles = `
	background: transparent;
	z-index: 1;
	position: absolute;
`;
const VerticalBorder = styled.div<{ side: Side.top | Side.bottom }>`
	${baseBorderStyles}
	width: calc(100% + 6px);
	cursor: ns-resize;
	height: 6px;
	left: -3px;

	${({ side }) => (side === Side.top ? `top: -3px` : `bottom: -3px`)};
`;

const HorizontalBorder = styled.div<{ side: Side.left | Side.right }>`
	${baseBorderStyles}
	height: calc(100% + 6px);
	cursor: ew-resize;
	width: 6px;
	top: -3px;

	${({ side }) => (side === Side.left ? `left: -3px` : `right: -3px`)};
`;

export const ResizeHandler = ({
	onChange,
	side,
}: {
	onChange: (mousePosition: { x: number; y: number }) => unknown;
	side: Side;
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

	return side === Side.left || side === Side.right ? (
		<HorizontalBorder ref={ref} side={side}></HorizontalBorder>
	) : (
		<VerticalBorder ref={ref} side={side}></VerticalBorder>
	);
};
