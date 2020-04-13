import { AvailableTools } from '../../types';

const cursorYOffset = 20;

const cursors = {
	pencil: `url(${require('../../assets/cursors/pencil.png')}) 0 ${cursorYOffset}, auto`,
	default: 'default',
};

export function getCursorForTool(tool: AvailableTools) {
	if(tool === AvailableTools.Pencil) {
		return cursors.pencil;
	} else {
		return cursors.default;
	}
}
