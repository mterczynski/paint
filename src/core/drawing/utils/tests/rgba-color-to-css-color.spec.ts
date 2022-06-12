import { rgbaColorToCssColor } from '..';
import { RGBAColor } from '../../../../types';

describe('rgbaColorToCssColor', () => {
	test('should return valid css rgba color', () => {
		const color: RGBAColor = {
			red: 123,
			green: 45,
			blue: 6,
			alpha: 128
		};

		expect(rgbaColorToCssColor(color)).toEqual('rgba(123,45,6,0.5)');
	});
});
