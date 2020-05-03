import { PL_Lang } from './impl/pl.lang';
import { EN_Lang } from './impl/en.lang';

export * from './lang.type';

export const languages = Object.freeze({
	EN: EN_Lang,
	PL: PL_Lang,
});
