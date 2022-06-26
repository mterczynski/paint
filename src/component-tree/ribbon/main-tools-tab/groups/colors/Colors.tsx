import { useSelector } from "react-redux";
import { store } from "../../../../../redux/store";

import {
	AppState,
	IndexOfMainColor,
	Popup,
	RGBAColor,
} from "../../../../../types";
import "./Colors.scss";
import { rgbaColorToCssColor } from "../../../../../core/drawing/utils";
import { defaultColors } from "./default-colors";
import { useLang } from "../../../../../hooks";
import { setPopup } from "../../../../../redux/root-slice";
import {
	selectMainColorIndex,
	setSelectedMainColor,
} from "../../../../../redux/colors-slice";

const lastUsedCustomColors = Object.freeze([
	{ red: 255, green: 111, blue: 0, alpha: 255 },
	{ red: 0, green: 0, blue: 0, alpha: 255 },
	{ red: 255, green: 255, blue: 255, alpha: 255 },
	null,
	null,
	null,
	null,
	null,
	null,
	null,
]);

function dispatchSelectMainColorIndex(colorIndex: IndexOfMainColor) {
	store.dispatch(selectMainColorIndex(colorIndex));
}

function dispatchSetSelectedMainColor(color: RGBAColor) {
	store.dispatch(setSelectedMainColor(color));
}

function openEditColorsPopup() {
	store.dispatch(setPopup(Popup.editColors));
}

const EditColors = () => {
	const lang = useLang();

	return (
		<div className="Colors__editColors" onClick={openEditColorsPopup}>
			<img
				draggable="false"
				className="Colors__editColorsIcon"
				src={require("../../../../../assets/icons/main-tools-tab/7_colors.png")}
				alt=""
			/>
			<div className="Colors__colorBoxText">
				{lang.homeTabs.colors.editColors.title}
			</div>
		</div>
	);
};

const RowOfColors = ({
	colors,
}: {
	colors: Readonly<(RGBAColor | null)[]>;
}) => {
	return (
		<div className="Colors__colorRow">
			{colors.map((color, i) => {
				if (color) {
					return (
						<div
							style={{ background: rgbaColorToCssColor(color) }}
							key={i}
							className="Colors__colorBox Colors__colorBox--tiny"
							onClick={() => dispatchSetSelectedMainColor(color)}
						/>
					);
				}

				return (
					<div
						className="Colors__colorBox Colors__colorBox--tiny--disabled"
						key={i}
					/>
				);
			})}
		</div>
	);
};

const Colors = () => {
	const lang = useLang();
	const stateOfColors = useSelector((appState: AppState) => appState.colors);

	return (
		<div className="Colors">
			<div className="Colors__content">
				<div
					className={
						(stateOfColors.selectedMainColorIndex === 1
							? "Colors__mainColor--active"
							: "") + " Colors__mainColor"
					}
					onClick={() => dispatchSelectMainColorIndex(1)}
				>
					<div
						style={{ background: rgbaColorToCssColor(stateOfColors.color1) }}
						className="Colors__colorBox"
					/>
					<div className="Colors__colorBoxText">
						{lang.homeTabs.colors.color} <br /> 1
					</div>
				</div>

				<div
					className={
						(stateOfColors.selectedMainColorIndex === 2
							? "Colors__mainColor--active"
							: "") + " Colors__mainColor"
					}
					onClick={() => dispatchSelectMainColorIndex(2)}
				>
					<div
						style={{ background: rgbaColorToCssColor(stateOfColors.color2) }}
						className="Colors__colorBox Colors__colorBox--small"
					/>
					<div className="Colors__colorBoxText">
						{lang.homeTabs.colors.color} <br /> 2
					</div>
				</div>

				<div className="Colors__colors">
					<RowOfColors colors={defaultColors[0]}></RowOfColors>
					<RowOfColors colors={defaultColors[1]}></RowOfColors>
					<RowOfColors colors={lastUsedCustomColors}></RowOfColors>
				</div>

				<EditColors></EditColors>
			</div>
			<div className="Colors__description">{lang.homeTabs.colors.title}</div>
		</div>
	);
};

export default Colors;
