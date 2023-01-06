import { useEffect, useRef, useState } from "react";
import { Crosshair } from "./Crosshair";

// const assets = {
// 	hueAndSaturationPicker: require("../../../../assets/hue-and-saturation-picker.png"),
// };

export const HueAndSaturationPicker = () => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [crosshairPosition, setCrosshairPosition] = useState({ x: 0, y: 0 });
	const [activeMouseMoveListener, setActiveMouseMoveListener] = useState<
		React.MouseEventHandler<HTMLImageElement> | undefined
	>(undefined);

	const updateCrosshairPosition = (mouseEvent: React.MouseEvent) => {
		const imagePosition = imageRef.current?.getBoundingClientRect();

		if (!imagePosition) {
			return;
		}

		setCrosshairPosition({
			x: mouseEvent.pageX - imagePosition.left,
			y: mouseEvent.pageY - imagePosition.top,
		});
	};

	const mouseMoveListener = (mouseEvent: React.MouseEvent) => {
		updateCrosshairPosition(mouseEvent);
	};

	const onMouseDown = (mouseEvent: React.MouseEvent) => {
		updateCrosshairPosition(mouseEvent);
		setActiveMouseMoveListener(() => mouseMoveListener);
	};

	useEffect(function setUpMouseListener() {
		const mouseUpListener = () => {
			setActiveMouseMoveListener(undefined);
		};
		window.addEventListener("mouseup", mouseUpListener);
		return () => {
			window.removeEventListener("mouseup", mouseUpListener);
		};
	}, []);

	return (
		<div
			style={{
				width: "175px",
				height: "187px",
				overflow: "hidden",
				position: "relative",
			}}
		>
			<Crosshair
				position={{ x: crosshairPosition.x, y: crosshairPosition.y }}
			/>
			<img
				ref={imageRef}
				width="100%"
				height="100%"
				style={{
					border: "1px solid rgb(160,160,160)",
					borderBottomColor: "rgb(240,240,240)",
					borderRightColor: "rgb(240,240,240)",
				}}
				alt=""
				draggable="false"
				// src={assets.hueAndSaturationPicker}
				onMouseDown={onMouseDown}
				onMouseMove={activeMouseMoveListener}
			></img>
		</div>
	);
};
