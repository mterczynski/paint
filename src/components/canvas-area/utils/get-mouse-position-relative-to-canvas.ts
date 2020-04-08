export function getMousePositionRelativeToCanvas(
	canvas: {getBoundingClientRect: () => {left: number, top: number}},
	mouseEvent: {clientX: number, clientY: number},
) {
	const canvasPosition = canvas.getBoundingClientRect();
	const mouseX = mouseEvent.clientX - canvasPosition.left;
	const mouseY = mouseEvent.clientY - canvasPosition.top;

	return {x: mouseX, y: mouseY};
}
