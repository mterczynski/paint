export function getMousePositionRelativeToCanvas(canvas: HTMLCanvasElement, mouseEvent: React.MouseEvent) {
	const canvasPosition = canvas.getBoundingClientRect();
	const mouseX = mouseEvent.clientX - canvasPosition.left;
	const mouseY = mouseEvent.clientY - canvasPosition.top;

	return {x: mouseX, y: mouseY};
}
