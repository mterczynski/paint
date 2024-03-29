import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { AppState } from "../../types";
import { RibbonIcon, IconImage } from "./RibbonStyles";
import { toggleRibbon } from "../../redux/root-slice";
import collapseImage from "/assets/icons/top/collapse.png";

const dispatchToggleRibbon = () => {
	store.dispatch(toggleRibbon());
};

export const RibbonToggler = () => {
	const isRibbonCollapsed = useSelector(
		(state: AppState) => state.isRibbonCollapsed
	);

	return (
		<RibbonIcon onClick={dispatchToggleRibbon}>
			<IconImage
				draggable="false"
				reversed={isRibbonCollapsed}
				src={collapseImage}
				alt=""
			/>
		</RibbonIcon>
	);
};
