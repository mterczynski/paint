import { AvailableTools } from "../../types";

const cursorYOffset = 20;

const cursors = {
	pencil: `url(${require("../../assets/cursors/pencil.png")}) 0 ${cursorYOffset}, auto`,
	bucket: `url(${require("../../assets/cursors/bucket.png")}) 0 ${cursorYOffset}, auto`,
	colorPicker: `url(${require("../../assets/cursors/color-picker.png")}) 0 ${cursorYOffset}, auto`,
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
