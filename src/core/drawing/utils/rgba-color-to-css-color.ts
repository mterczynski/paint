import { RGBAColor } from '../../../types';

export function rgbaColorToCssColor({red, green, blue, alpha}: RGBAColor) {
	const cssAlpha = Math.min(1, alpha / 128);

	return `rgba(${red},${green},${blue},${cssAlpha})`;
}
