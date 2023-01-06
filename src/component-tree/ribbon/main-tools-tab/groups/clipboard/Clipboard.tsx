import "./Clipboard.scss";
import { useLang } from "../../../../../hooks";
import clipboardImage from "/assets/icons/main-tools-tab/1_clipboard/1.png"; // todo - rename (?)
import arrowDownImage from "/assets/icons/arrow_down.png";
import scissorsImage from "/assets/icons/main-tools-tab/1_clipboard/scissors.png";
import activeClipboardImage from "/assets/icons/main-tools-tab/1_clipboard/3_active.png"; // todo - rename (?)

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
							src={clipboardImage}
							alt=""
						/>
					</div>

					<div className="Clipboard__pasteGroupBottom">
						<div>{lang.paste.title}</div>
						<img
							className="Clipboard__arrowDown"
							draggable="false"
							src={arrowDownImage}
							alt=""
						/>
					</div>
				</div>

				<div className="Clipboard__buttons">
					<div className="Clipboard__button">
						<img
							draggable="false"
							src={scissorsImage}
							className="Clipboard__buttonImage"
							alt=""
						/>

						<span className="Clipboard_buttonText"> {lang.cut.title}</span>
					</div>

					<div className="Clipboard__button">
						<img
							draggable="false"
							src={activeClipboardImage}
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
