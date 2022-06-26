import { useSelector } from "react-redux";
import { AppState } from "../types";

export const useLang = () => {
	return useSelector((state: AppState) => state.language);
};
