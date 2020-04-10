import { useAppState } from '.';

export const useLang = () => {
	return useAppState().language;
};
