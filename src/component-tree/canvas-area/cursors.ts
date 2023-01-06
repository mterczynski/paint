import { AvailableTools } from "../../types";

import pencil from '/assets/cursors/pencil.png'
import bucket from '/assets/cursors/bucket.png'
import colorPicker from '/assets/cursors/color-picker.png'

const cursorYOffset = 20;

const cursors = {
	pencil: `url(${pencil}) 0 ${cursorYOffset}, auto`,
	bucket: `url(${bucket}) 0 ${cursorYOffset}, auto`,
	colorPicker: `url(${colorPicker}) 0 ${cursorYOffset}, auto`,
	default: "default",
};

export function getCursorForTool(tool: AvailableTools) {
	if (tool === AvailableTools.Pencil) {
		return cursors.pencil;
	} else if (tool === AvailableTools.Fill) {
		return cursors.bucket;
	} else if (tool === AvailableTools.ColorPicker) {
		return cursors.colorPicker;
	} else {
		return cursors.default;
	}
}
