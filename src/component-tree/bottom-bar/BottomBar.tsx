import { useSelector } from "react-redux";

import { AppState } from "../../types";
import "./BottomBar.scss";
import { useLang } from "../../hooks";

import axisImage from "/assets/icons/bottom-bar/axis.png";
import imageSizeImage from "/assets/icons/bottom-bar/image_size.png";
import selectionImage from "/assets/icons/bottom-bar/selection.png";
import sliderImage from "/assets/icons/bottom-bar/slider.png";
import dotsImage from "/assets/icons/bottom-bar/dots.png";

const BottomBar = () => {
	const zoom = useSelector((state: AppState) => state.zoom);
	const lang = useLang().statusBar;
	const isBottomBarVisible = useSelector(
		(state: AppState) => state.isBottomBarVisible
	);
	const image = {
		height: useSelector((state: AppState) => state.imageSettings.heightInPx),
		width: useSelector((state: AppState) => state.imageSettings.widthInPx),
	};

	if (!isBottomBarVisible) {
		return null;
	}

	return (
		<div className="BottomBar">
			<div className="BottomBar__col BottomBar__col--small">
				<img
					className="BottomBar__iconImage"
					draggable="false"
					src={axisImage}
					alt=""
				/>
			</div>
			<div className="BottomBar__col BottomBar__col--small">
				<img
					className="BottomBar__iconImage--top1"
					draggable="false"
					src={selectionImage}
					alt=""
				/>
			</div>
			<div className="BottomBar__col BottomBar__col--small">
				<img
					className="BottomBar__iconImage--top1"
					draggable="false"
					src={imageSizeImage}
					alt=""
					style={{ marginRight: "6px" }}
				/>
				{image.width} &times; {image.height}
				{lang.pixels}
			</div>
			<div className="BottomBar__col BottomBar__col--small" />
			<div className="BottomBar__col BottomBar__col--stretched" />
			<div className="BottomBar__col BottomBar__col--medium">
				<span className="BottomBar__zoom-indicator">{zoom * 100}%</span>

				<div className="BottomBar__minus" />

				<div className="BottomBar__slider">
					<div className="BottomBar__slider-background" />
					<img
						draggable="false"
						src={sliderImage}
						alt=""
						className="BottomBar__slider-image"
					/>
				</div>

				<div className="BottomBar__plus" />

				<img
					className="BottomBar__iconImage--dots"
					draggable="false"
					src={dotsImage}
					alt=""
				/>
			</div>
		</div>
	);
};

export default BottomBar;
