import { RibbonIcon, IconImage } from "./RibbonStyles";
import helpImage from "/assets/icons/top/help.png";

export const HelpIcon = () => {
	return (
		<RibbonIcon>
			<IconImage draggable="false" src={helpImage} alt="" />
		</RibbonIcon>
	);
};
