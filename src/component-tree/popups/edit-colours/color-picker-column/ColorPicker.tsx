import React from 'react';

const assets = {
	hueAndSaturationPicker: require('../../../../assets/hue-and-saturation-picker.png')
};

export const HueAndSaturationPicker = () => {
	return <div>
		<img
			width='175px'
			height='187px'
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
