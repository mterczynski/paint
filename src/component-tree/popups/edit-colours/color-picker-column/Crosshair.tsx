const assets = {
	crosshair: require('../../../../assets/cursors/crosshair.png')
};

export const Crosshair = () => {
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
