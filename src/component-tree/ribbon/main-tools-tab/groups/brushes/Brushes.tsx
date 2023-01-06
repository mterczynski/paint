import "./Brushes.scss";
import { useLang } from "../../../../../hooks";
import mainBrushImage from "/assets/icons/main-tools-tab/4_brushes/1.png";
import arrowDownImage from "/assets/icons/arrow_down.png";

const Brushes = () => {
	const lang = useLang();

	return (
		<div className="Brushes">
			<div className="Brushes__content">
				<div className="Brushes__top">
					<img
						className="Brushes__mainIcon"
						draggable="false"
						src={mainBrushImage}
						alt=""
					/>
				</div>
				<div className="Brushes__bottom">
					<div>{lang.homeTabs.brushes.title}</div>

					<img
						className="Brushes__arrowDown"
						draggable="false"
						src={arrowDownImage}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Brushes;
