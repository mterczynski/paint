import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";

require('./Shapes.scss');

const shapesImages = [];

for(let i=1; i<=23; i++){
	shapesImages.push(require(`../../../../../assets/icons/main-tools-tab/5_shapes/${i}.png`));
}

const shapesDescriptions = [
	// first row:
	'Linia',
	'Krzywa',
	'Owal',
	'Prostokąt',
	'Zaokrąglony prostokąt',
	'Wielokąt',
	'Trójkąt',
	// second row:
	'Trójkąt prostokątny',
	'Romb',
	'Pięciokąt',
	'Sześciokąt',
	'Strzałka w prawo',
	'Strzałka w lewo',
	'Strzałka w górę',
	// thrid row:
	'Strzałka w dół',
	'Gwiazda czwororamienna',
	'Gwiazda pięcioramienna',
	'Gwiazda sześcioramienna',
	'Zaokrąglone prostokątne objaśnienie',
	'Owalne objaśnienie',
	'Objaśnienie w kształcie chmury',
	// fourth row:
	'Serce',
	'Błyskawica'
]

const mapStateToProps = (state) => {
	return { 
		isBrushActive: state.isBrushActive
	};
};
  
class ShapesComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			isListCollapsed: false
		}
	}

	render(){
		// images:
		const arrDown = require('../../../../../assets/icons/arrow_down.png');
		const contourActive = require('../../../../../assets/icons/main-tools-tab/5_shapes/contour_active.png');
		const fill = require('../../../../../assets/icons/main-tools-tab/5_shapes/fill_active.png');

		return <div className="Shapes">
			<div className="Shapes__content">
				<div className="Shapes__shapeList">
					<div className="Shapes__shapeListContent">
						{shapesImages.map((shape, i)=>
							<img draggable="false" className="Shapes__shape" 
							src={shape} alt="" key={i}/>
						)}
					</div>
					<div className="Shapes__shapeListControls">

					</div>
				</div>

				<div className="Shapes__options">
					<div className="Shapes__option Shapes__option--first" >
						<img draggable="false" src={contourActive} alt=""/>
						<span>Kontur</span>
						<img draggable="false" alt="" src={arrDown}/>
					</div>

					<div className="Shapes__option Shapes__option--second">
						<img draggable="false" src={contourActive} alt=""/>
						<span>Wypełnienie</span>
						<img draggable="false" alt="" src={arrDown}/>
					</div>
				</div>
			</div>
			<div className="Shapes__description">
				Kształty
			</div>
		</div>		
	}
}

const Shapes = connect(mapStateToProps)(ShapesComponent);

export default Shapes;