import { useEffect, useRef, useState } from "react";
import { Point } from "../types";

// todo - change to useDrag and reuse it in resizable window (?)
export const useMovableWindow = (initialPosition: Point) => {
	const [position, setPosition] = useState(initialPosition);
	const [isDragged, setIsDragged] = useState(false);
	const movableElementRef = useRef<HTMLDivElement>();

	useEffect(
		function attachMouseDownAndMouseUpListeners() {
			const currentRef = movableElementRef.current;
			const onMouseDown = () => {
				console.log("mousedown active");
				setIsDragged(true);
			};
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
		[movableElementRef]
	);

	useEffect(
		function attachMouseMoveListenerOnMouseDown() {
			if (!isDragged) {
				return;
			}

			const onMouseMove = (event: MouseEvent) => {
				setPosition({ x: event.x, y: event.y });
			};
			window.addEventListener("mousemove", onMouseMove);

			return () => {
				window.removeEventListener("mousemove", onMouseMove);
			};
		},
		[isDragged]
	);

	return {
		movableElementRef,
		position,
		setPosition,
	};
};
