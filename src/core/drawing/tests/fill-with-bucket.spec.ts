import { fillWithBucket } from '../fill-with-bucket';

function getMaxValueOffset(expected: number[], acutal: number[]) {
	if(expected.length !== acutal.length) {
		throw new Error('lengths of the arrays are not the same');
	}

	let maxOffset = 0;

	for(let i=0; i<expected.length; i++) {
		maxOffset = Math.max(maxOffset, Math.abs(expected[i] - acutal[i]));
	}

	return maxOffset;
}

describe('fillWithBucket', () => {
	test('should fill whole canvas with one color if canvas is blank', () => {
		const width = 5;
		const height = 2;

		const mockCanvas = document.createElement('canvas');
		mockCanvas.width = width;
		mockCanvas.height = height;
		const context = mockCanvas.getContext('2d') as CanvasRenderingContext2D;
		const fillColor = {
			red: 7,
			green: 10,
			blue: 20,
			alpha: 128
		};

		fillWithBucket({
			context,
			fillColor,
			mousePositionRelativeToCanvas: {x: 0, y: 0},
			canvasSize: {
				width,
				height
			}
		});

		const pixelData = Array.from(context.getImageData(0, 0, width, height).data);

		const maxValueOffset = getMaxValueOffset([
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,

			//  second row
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,
			7, 10, 20, 128,
		], pixelData);

		expect(maxValueOffset).toBeLessThanOrEqual(3);
	});

	// todo - try to implement tests with image files
});
