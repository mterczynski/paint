const assets = {
	hueAndSaturationPicker: require('../../../../assets/hue-and-saturation-picker.png'),
	crosshair: require('../../../../assets/cursors/crosshair.png')
};

const Crosshair = () => {
	return <img style={{
			transform: 'translate(-50%, -50%)',
			position: 'absolute'
		}}
		src={assets.crosshair}
		alt=''
		draggable='false'
	>
	</img>;
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

export const LuminosityPicker = () => {
	return <div></div>;
};

export const ColorPicker = () => {
	return <div>
		<HueAndSaturationPicker></HueAndSaturationPicker>
		<LuminosityPicker></LuminosityPicker>
	</div>;
};
