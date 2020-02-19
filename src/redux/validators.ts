export function isRGBColor(input: string) {
	const regex = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
	if (regex.exec(input) == null) {
		console.warn('Input must be rgb color');
	}
}
