import { HueAndSaturationPicker } from "./HueAndSaturationPicker";

const LuminosityPicker = () => {
	return <div></div>;
};

export const ColorPicker = () => {
	return (
		<div>
			<HueAndSaturationPicker></HueAndSaturationPicker>
			<LuminosityPicker></LuminosityPicker>
		</div>
	);
};
