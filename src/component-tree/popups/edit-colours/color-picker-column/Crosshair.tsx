import { Point } from "../../../../types";
import crosshairImage from "/assets/cursors/crosshair.png";

export const Crosshair = ({ position }: { position: Point }) => {
	return (
		<img
			style={{
				transform: "translate(-50%, -50%)",
				position: "absolute",
				left: position.x + "px",
				top: position.y + "px",
			}}
			src={crosshairImage}
			alt=""
			draggable="false"
		></img>
	);
};
