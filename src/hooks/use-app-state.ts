import { useSelector } from 'react-redux';
import { AppState } from '../types';

export const useAppState = () => {
	return useSelector((state: AppState) => state);
};
