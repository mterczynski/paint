import { ColorPosition } from './types/ColorPosition.interface';

// todo -refactor, change order of args
export function isColorActive(selectedColorPosition: ColorPosition | null, colorPosition: ColorPosition) {
	if(!selectedColorPosition) {
		return false;
	}

	return selectedColorPosition.rowIndex === colorPosition.rowIndex &&
		selectedColorPosition.columnIndex === colorPosition.columnIndex;
}
