import { useLang } from "../../../hooks";
import { Figure } from "./Figure";

import zoomInImage from "/assets/icons/view-tab/zoomIn.png";
import zoomOutImage from "/assets/icons/view-tab/zoomOut.png";
import maximizeImage from "/assets/icons/view-tab/maximize.png";

const Zoom = () => {
	const lang = useLang();

	return (
		<div className="ViewTab__group">
			<div className="ViewTab__content">
				<Figure imgPath={zoomInImage}>{lang.viewTab.zoom.zoomIn.title}</Figure>
				<Figure imgPath={zoomOutImage}>
					{lang.viewTab.zoom.zoomOut.title}
				</Figure>
				<Figure imgPath={maximizeImage}>
					100
					<br />%
				</Figure>
			</div>
			<h1 className="ViewTab__description">{lang.viewTab.zoom.title}</h1>
		</div>
	);
};

export default Zoom;
