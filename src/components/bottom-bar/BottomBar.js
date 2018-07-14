import React from 'react';
import { connect } from "react-redux";

require('./BottomBar.scss');

const srcs = {
	axis: require('../../assets/icons/bottom-bar/axis.png'),
	floppy: require('../../assets/icons/bottom-bar/floppy.png'),
	image_size: require('../../assets/icons/bottom-bar/image_size.png'),
	minus: require('../../assets/icons/bottom-bar/minus.png'),
	minus_hover: require('../../assets/icons/bottom-bar/minus_hover.png'),
	minus_pressed: require('../../assets/icons/bottom-bar/minus_pressed.png'),
	plus: require('../../assets/icons/bottom-bar/plus.png'),
	plus_hover: require('../../assets/icons/bottom-bar/plus_hover.png'),
	plus_pressed: require('../../assets/icons/bottom-bar/plus_pressed.png'),
	selection: require('../../assets/icons/bottom-bar/selection.png'),
	slider: require('../../assets/icons/bottom-bar/slider.png'),
	dots: require('../../assets/icons/bottom-bar/dots.png'),
}

const mapStateToProps = (state) => {
	return { 
		isBottomBarVisible: state.isBottomBarVisible,
		image: {
			width: state.imageSettings.width,
			height: state.imageSettings.height,
		},
	};
};
  
class BottomBarComponent extends React.Component{
	render(){
		if(!this.props.isBottomBarVisible){
			return null;
		}
		return <div className="BottomBar">
			<div className="BottomBar__col BottomBar__col--small">
				<img className="BottomBar__iconImage" draggable="false" 
				src={srcs.axis} alt=""/>
			</div>
			<div className="BottomBar__col BottomBar__col--small">
				<img className="BottomBar__iconImage--top1" draggable="false" 
				src={srcs.selection} alt=""/>
			</div>
			<div className="BottomBar__col BottomBar__col--small">
				<img className="BottomBar__iconImage--top1" draggable="false" 
				src={srcs.image_size} alt="" style={{marginRight: '6px'}}/>
				{this.props.image.width} &times; {this.props.image.height}piks.
			</div>
			<div className="BottomBar__col BottomBar__col--small"></div>
			<div className="BottomBar__col BottomBar__col--stretched"></div>
			<div className="BottomBar__col BottomBar__col--medium"> 
				<span className="BottomBar__zoom-indicator">100%</span>
				
				
				<div className="BottomBar__minus"></div>

				<div className="BottomBar__slider">
					<div className="BottomBar__slider-background"></div>
					<img draggable="false" src={srcs.slider} alt=""
					className="BottomBar__slider-image"/>
				</div>

				<div className="BottomBar__plus"></div>

				<img className="BottomBar__iconImage--dots" draggable="false" src={srcs.dots} alt=""/>
			</div>
		</div>	
	}
}

const BottomBar = connect(mapStateToProps)(BottomBarComponent);

export default BottomBar;