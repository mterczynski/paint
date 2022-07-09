import { useCallback, useEffect, useRef, useState } from "react";
import * as React from "react";
import { useSelector } from "react-redux";
import { drawWithPencil } from "../../core/drawing";
import { store } from "../../redux/store";
import { AppState, AvailableTools, MouseButton, Point } from "../../types";
import "./CanvasArea.scss";
import { canvasAreaEventHandlers } from "./canvasAreaEventHandlers";
import { getCursorForTool } from "./cursors";
import { getMousePositionRelativeToCanvas } from "./utils";
import { setPressedMouseButtonOnCanvas } from "../../redux/root-slice";

function dispatchPressedMouseButtonEvent(e: React.MouseEvent) {
	if (e.button === 0) {
		store.dispatch(setPressedMouseButtonOnCanvas(MouseButton.Primary));
	} else if (e.button === 2) {
		store.dispatch(setPressedMouseButtonOnCanvas(MouseButton.Secondary));
	}
}

const CanvasArea = () => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);
	const mouseButtonPressedOverCanvas = useSelector(
		(state: AppState) => state.mouseButtonPressedOnCanvas
	);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [lastMousePosition, setLastMousePosition] = useState<null | Point>(
		null
	);
	const canvasContext = canvasRef.current?.getContext("2d");

	const cursor = getCursorForTool(selectedTool);

	function mouseUpHandler() {
		const onMouseUp = () => {
			store.dispatch(setPressedMouseButtonOnCanvas(MouseButton.None));

			setLastMousePosition(null);
		};

		window.addEventListener("mouseup", onMouseUp);

		return () => window.removeEventListener("mouseup", onMouseUp);
	}

	function mouseMoveHandler() {
		window.addEventListener("mousemove", onMouseMove);
		return () => window.removeEventListener("mousemove", onMouseMove);
	}

	const onMouseMove = useCallback(
		(mouseEvent: MouseEvent) => {
			if (
				!canvasRef.current ||
				!canvasContext ||
				mouseButtonPressedOverCanvas === MouseButton.None
			) {
				return;
			}

			const currentMousePosition = getMousePositionRelativeToCanvas(
				canvasRef.current,
				mouseEvent
			);

			if (lastMousePosition && selectedTool === AvailableTools.Pencil) {
				drawWithPencil({
					canvasContext,
					lastMousePosition,
					currentMousePosition,
				});
			}

			setLastMousePosition(currentMousePosition);
		},
		[
			mouseButtonPressedOverCanvas,
			lastMousePosition,
			selectedTool,
			canvasContext,
		]
	);

	function onMouseDown(e: React.MouseEvent) {
		dispatchPressedMouseButtonEvent(e);
		canvasAreaEventHandlers.mouseDown.fillWithBucketIfNeeded(canvasRef, e);
	}

	function onClick(
		mouseEvent: React.MouseEvent,
		mouseButton: MouseButton.Primary | MouseButton.Secondary
	) {
		canvasAreaEventHandlers.click.pickColorIfNeeded(
			canvasRef,
			mouseEvent,
			mouseButton
		);
	}

	function fillCanvasWithWhite() {
		const storeState = store.getState();

		if (!canvasRef.current || !canvasContext) return;

		const canvasWidth = storeState.imageSettings.widthInPx;
		const canvasHeight = storeState.imageSettings.heightInPx;

		canvasContext.fillStyle = "rgb(255,255,255)"; // white
		canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
	}

	useEffect(mouseUpHandler, []);
	useEffect(mouseMoveHandler, [
		mouseButtonPressedOverCanvas,
		lastMousePosition,
		onMouseMove,
	]);
	useEffect(fillCanvasWithWhite, [canvasContext]);

	return (
		<div className="CanvasArea">
			<canvas
				className="CanvasArea__canvas"
				width="1400"
				height="600"
				onMouseDown={onMouseDown}
				onClick={(e) => onClick(e, MouseButton.Primary)}
				onContextMenu={(e) => onClick(e, MouseButton.Secondary)}
				style={{ cursor }}
				ref={canvasRef}
			/>
		</div>
	);
};

export default CanvasArea;
