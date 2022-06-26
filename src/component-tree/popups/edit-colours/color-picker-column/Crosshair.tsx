import { Point } from "../../../../types";

const assets = {
	crosshair: require("../../../../assets/cursors/crosshair.png"),
};

export const Crosshair = ({ position }: { position: Point }) => {
	return (
		<img
			style={{
				transform: "translate(-50%, -50%)",
				position: "absolute",
				left: position.x + "px",
				top: position.y + "px",
			}}
			src={assets.crosshair}
			alt=""
			draggable="false"
		></img>
	);
};
