import { AvailableTools } from '../../types';

const cursorYOffset = 20;

export const cursors = Object.freeze({
	[AvailableTools.Pencil]: `url(${require('../../assets/cursors/pencil.png')}) 0 ${cursorYOffset}, auto`,
	[AvailableTools.None]: 'default',
});
