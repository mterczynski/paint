import "./Paint3d.scss";
import { useLang } from "../../../../../hooks";

const Paint3d = () => {
	const lang = useLang();

	return (
		<div className="Paint3d">
			<div className="Paint3d__content">
				<img
					draggable="false"
					className="Paint3d__mainIcon"
					// src={require("../../../../../assets/icons/main-tools-tab/8_paint3d.png")}
					alt=""
				/>

				<div className="Paint3d__description">
					{lang.homeTabs.paint3d.title}
				</div>
			</div>
		</div>
	);
};

export default Paint3d;
