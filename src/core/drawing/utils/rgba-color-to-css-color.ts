import { RGBAColor } from '../../../types';

export function rgbaColorToCssColor({red, green, blue, alpha}: RGBAColor) {
	return `rgba(${red},${green},${blue},${alpha})`;
}
