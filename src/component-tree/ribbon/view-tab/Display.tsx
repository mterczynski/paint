import { useLang } from "../../../hooks";
import { Figure } from "./Figure";
import fullScreenImage from "/assets/icons/view-tab/fullScreen.png";
import miniatureImage from "/assets/icons/view-tab/miniature.png";

const Display = () => {
	const lang = useLang().viewTab.display;

	return (
		<div className="ViewTab__group">
			<div className="ViewTab__content">
				<Figure imgPath={fullScreenImage}>{lang.fullScreen.title}</Figure>

				<Figure imgPath={miniatureImage}>{lang.thumbnail.title}</Figure>
			</div>
			<h1 className="ViewTab__description">{lang.title}</h1>
		</div>
	);
};

export default Display;
