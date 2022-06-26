import { drawLine } from "../draw-line";

describe("drawLine", () => {
	test("should execute without error", () => {
		const canvas = document.createElement("canvas");

		drawLine({
			color: "black",
			context: canvas.getContext("2d") as CanvasRenderingContext2D,
			from: { x: 10, y: 20 },
			to: { x: 20, y: 30 },
		});
	});
});
