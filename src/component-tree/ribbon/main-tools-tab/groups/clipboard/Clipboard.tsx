import "./Clipboard.scss";
import { useLang } from "../../../../../hooks";

const Clipboard = () => {
	const lang = useLang().homeTabs.clipboard;

	return (
		<div className="Clipboard">
			<div className="Clipboard__content">
				<div className="Clipboard__pasteGroup">
					<div className="Clipboard__pasteGroupTop">
						<img
							className="Clipboard__pasteImage"
							draggable="false"
							// src={require("../../../../../assets/icons/main-tools-tab/1_clipboard/1.png")}
							alt=""
						/>
					</div>

					<div className="Clipboard__pasteGroupBottom">
						<div>{lang.paste.title}</div>
						<img
							className="Clipboard__arrowDown"
							draggable="false"
							// src={require("../../../../../assets/icons/arrow_down.png")}
							alt=""
						/>
					</div>
				</div>

				<div className="Clipboard__buttons">
					<div className="Clipboard__button">
						<img
							draggable="false"
							// src={require("../../../../../assets/icons/main-tools-tab/1_clipboard/scissors.png")}
							className="Clipboard__buttonImage"
							alt=""
						/>

						<span className="Clipboard_buttonText"> {lang.cut.title}</span>
					</div>

					<div className="Clipboard__button">
						<img
							draggable="false"
							// src={require("../../../../../assets/icons/main-tools-tab/1_clipboard/3_active.png")}
							className="Clipboard__buttonImage"
							alt=""
						/>
						<span className="Clipboard__buttonText"> {lang.copy.title}</span>
					</div>
				</div>
			</div>
			<div className="Clipboard__description">{lang.title}</div>
		</div>
	);
};

export default Clipboard;
