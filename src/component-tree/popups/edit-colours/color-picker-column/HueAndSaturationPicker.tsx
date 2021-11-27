import { Crosshair } from "./Crosshair";

const assets = {
	hueAndSaturationPicker: require('../../../../assets/hue-and-saturation-picker.png'),
};

export const HueAndSaturationPicker = () => {
	return <div style={{
		width: '175px',
		height: '187px',
		overflow: 'hidden',
		position: 'relative'
	}}>
		<Crosshair/>
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
		></img>
	</div>;
};
