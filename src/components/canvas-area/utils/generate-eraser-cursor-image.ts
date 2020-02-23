function generateEraserCursorImageUrl({eraserColor, totalCursorWidthInPx}: {
	eraserColor: string,
	totalCursorWidthInPx: number,
}) {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d')!;

	canvas.width = totalCursorWidthInPx;
	canvas.height = totalCursorWidthInPx;

	// fill whole canvas with black:
	context.fillStyle = 'black';
	context.fillRect(0, 0, totalCursorWidthInPx, totalCursorWidthInPx);

	// fill canvas with eraserColor (except of borders):
	context.fillStyle = eraserColor;
	context.fillRect(1, 1, totalCursorWidthInPx - 2, totalCursorWidthInPx - 2);

	return canvas.toDataURL('image/jpeg');
}

// todo - think about how to support even totalCursorWidthInPx (and if I should do that in the first place)

export function generateEraserCursorImage({eraserColor, totalCursorWidthInPx}: {
	eraserColor: string,
	totalCursorWidthInPx: number,
}) {
	const imageUrl = generateEraserCursorImageUrl({eraserColor, totalCursorWidthInPx});

	return `url(${imageUrl}) 0 0, auto`;
}
