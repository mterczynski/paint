import Dropdown from "../../../../../reusable-components/dropdown";
import { store } from "../../../../../redux/store";
import { Dropdowns } from "../../../../../types";

import "./Image.scss";
import { useLang } from "../../../../../hooks";
import { setDropdown } from "../../../../../redux/root-slice";

import arrowDownImage from "/assets/icons/arrow_down.png";
import selectionFieldImage from "/assets/icons/main-tools-tab/2_image/1.png";
import secondImage from "/assets/icons/main-tools-tab/2_image/2.png"; // todo - rename
import thirdImage from "/assets/icons/main-tools-tab/2_image/3.png"; // todo - rename
import fourthImage from "/assets/icons/main-tools-tab/2_image/4.png"; // todo - rename

function openDropdown() {
	store.dispatch(setDropdown(Dropdowns.selection));
}

const Image = () => {
	const lang = useLang();

	return (
		<div className="Image">
			<div className="Image__content">
				<div className="Image__leftColumn">
					<div className="Image__selectionIcon">
						<img src={selectionFieldImage} alt="" />
					</div>

					<div className="Image__expandSelectionButton" onClick={openDropdown}>
						{lang.homeTabs.image.select.title}
						<br />
						<img src={arrowDownImage} alt="" />
					</div>
				</div>

				<ul className="Image__rightColumn">
					<li>
						<img src={secondImage} alt="" /> {lang.homeTabs.image.crop.title}
					</li>

					<li>
						<img src={thirdImage} alt="" /> {lang.homeTabs.image.resize.title}
					</li>

					<li>
						<img src={fourthImage} alt="" />{" "}
						<span>{lang.homeTabs.image.rotate.title} </span>
						<img
							className="Image__rotateLi-arrowDown"
							src={arrowDownImage}
							alt=""
						/>
					</li>
				</ul>
			</div>

			<Dropdown provider={Dropdowns.selection}>
				<ul className="Image__list">
					<li className="Image__li">Size 1px</li>
					<li className="Image__li">Size 2px</li>
					<li className="Image__li">Size 3px</li>
					<li className="Image__li">Size 4px</li>
				</ul>
			</Dropdown>

			<div className="Image__description">{lang.homeTabs.image.title}</div>
		</div>
	);
};

export default Image;
