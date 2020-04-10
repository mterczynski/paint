import { fillWithBucket } from '../fill-with-bucket';

describe('fillWithBucket', () => {
	test('should fill whole canvas with one color if canvas is blank', () => {
		const mockCanvas = document.createElement('canvas');
		mockCanvas.width = 5;
		mockCanvas.height = 2;
		const context = mockCanvas.getContext('2d') as CanvasRenderingContext2D;

		fillWithBucket({
			context,
			fillColor: 'rgb(7, 10, 20)',
			mousePositionRelativeToCanvas: {x: 0, y: 0}
		});

		const pixelData = Array.from(context.getImageData(0, 0, 100, 100).data);

		expect(pixelData).toEqual([
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
		]);
	});
});
