import { ActionTypes } from './action-types.enum';

export interface Action {
	type: ActionTypes;
	[key: string]: any;
}
