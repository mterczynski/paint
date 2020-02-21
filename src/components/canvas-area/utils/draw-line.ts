import { Point } from '../types';

interface DrawLineArgs {
	color: string;
	context: CanvasRenderingContext2D;
	from: Point;
	to: Point;
}

export function drawLine({color, context, from, to}: DrawLineArgs) {
	context.beginPath();
	context.moveTo(from.x, from.y);
	context.lineTo(to.x, to.y);
	context.strokeStyle = color;
	context.stroke();
}
