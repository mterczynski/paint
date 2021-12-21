import { useState } from "react";
import { Crosshair } from "./Crosshair";

const assets = {
	hueAndSaturationPicker: require('../../../../assets/hue-and-saturation-picker.png'),
};

export const HueAndSaturationPicker = () => {
	const [isMouseDown, setIsMouseDown] = useState(false);
	const [crosshairPosition, setCrosshairPosition] = useState({x: 0, y: 0});

	const onMouseDown = () => {
		setIsMouseDown(true);
	}

	const onMouseUp = () => {
		setIsMouseDown(false);
	}

	const onMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const x = event.nativeEvent.offsetX;
		const y = event.nativeEvent.offsetY;

		console.log('onMouseMove');

		setCrosshairPosition({x, y});
	}

	return <div style={{
		width: '175px',
		height: '187px',
		overflow: 'hidden',
		position: 'relative'
	}}>
		<Crosshair position={crosshairPosition}/>
		<img
			width='100%'
			height='100%'
			style={{
				border: '1px solid rgb(160,160,160)',
				borderBottomColor: 'rgb(240,240,240)',
				borderRightColor: 'rgb(240,240,240)',
			}}
			alt=''
			draggable='false'
			src={assets.hueAndSaturationPicker}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseMove={isMouseDown ? onMouseMove : undefined}
		></img>
	</div>;
};
