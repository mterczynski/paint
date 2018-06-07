import React from 'react';
import store from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';
import { connect } from "react-redux";
import Dropdown from '../../../../../componentWrappers/dropdown';

require('./Image.scss');

const mapStateToProps = (state) => {
	return { 
		isBrushActive: state.isBrushActive,
		isDropdownActive: state.isDropdownActive
	};
};
  
class ImageComponent extends React.Component{

	constructor(props) {
		super(props)
	}


	render(){
		const arrow_down = require('../../../../../assets/icons/arrow_down.png');

		return <div className="Image">
			<div className="Image__content">
				<div className="Image__leftColumn">
					<div className="Image__selectionIcon">
						<img src={require('../../../../../assets/icons/main-tools-tab/2_image/1.png')} alt=""/>
					</div>

					<div className="Image__expandSelectionButton">
						Zaznacz
						<br/>
						<img src={arrow_down} alt=""/>
					</div>
				</div>

				<ul className="Image__rightColumn">
					<li>
						<img src={require('../../../../../assets/icons/main-tools-tab/2_image/2.png')} alt=""/> Przytnij
					</li>

					<li>
						<img src={require('../../../../../assets/icons/main-tools-tab/2_image/3.png')} alt=""/> Zmień rozmiar
					</li>

					<li>
						<img src={require('../../../../../assets/icons/main-tools-tab/2_image/4.png')} alt=""/> Obróć <img className="Image__rotateLi-arrowDown" src={arrow_down} alt=""/>
					</li>
				</ul>
			</div>

			<Dropdown>
				<ul className="Image__list">
					<li className="Image__li" onClick={()=>this.setToolSize(1)}>Size 1px</li>
					<li className="Image__li" onClick={()=>this.setToolSize(2)}>Size 2px</li>
					<li className="Image__li" onClick={()=>this.setToolSize(3)}>Size 3px</li>
					<li className="Image__li" onClick={()=>this.setToolSize(4)}>Size 4px</li>
				</ul>
			</Dropdown>

			<div className="Image__description">
				Obraz
			</div>
		</div>		
	}
}

const Image = connect(mapStateToProps)(ImageComponent);

export default Image;
