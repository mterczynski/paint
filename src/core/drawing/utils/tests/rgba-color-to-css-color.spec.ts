import { rgbaColorToCssColor } from '..';

describe('rgbaColorToCssColor', () => {
	test('should return valid css rgba color', () => {
		const color = {
			red: 123,
			green: 45,
			blue: 6,
			alpha: 7
		};

		expect(rgbaColorToCssColor(color)).toEqual('rgba(123,45,6,7)');
	});
});
