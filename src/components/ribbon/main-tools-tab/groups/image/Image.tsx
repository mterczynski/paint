import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../../../../../componentWrappers/dropdown';
import * as actions from '../../../../../redux/actions';
import store from '../../../../../redux/store';
import { Dropdowns } from '../../../../../types/dropdowns';

import './Image.scss';

const mapStateToProps = state => {
	return {
	};
};

class ImageComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	openDropdown() {
		store.dispatch(actions.setDropdown(Dropdowns.selection));
	}

	render() {
		const arrowDownImage = require('../../../../../assets/icons/arrow_down.png');
		const selectionFieldImage = require('../../../../../assets/icons/main-tools-tab/2_image/1.png');

		return (
			<div className='Image'>
				<div className='Image__content'>
					<div className='Image__leftColumn'>
						<div className='Image__selectionIcon'>
							<img src={selectionFieldImage} alt='' />
						</div>

						<div
							className='Image__expandSelectionButton'
							onClick={this.openDropdown}
						>
							Zaznacz
							<br />
							<img src={arrowDownImage} alt='' />
						</div>
					</div>

					<ul className='Image__rightColumn'>
						<li>
							<img
								src={require('../../../../../assets/icons/main-tools-tab/2_image/2.png')}
								alt=''
							/>{' '}
							Przytnij
						</li>

						<li>
							<img
								src={require('../../../../../assets/icons/main-tools-tab/2_image/3.png')}
								alt=''
							/>{' '}
							Zmień rozmiar
						</li>

						<li>
							<img
								src={require('../../../../../assets/icons/main-tools-tab/2_image/4.png')}
								alt=''
							/>{' '}
							<span>Obróć </span>
							<img
								className='Image__rotateLi-arrowDown'
								src={arrowDownImage}
								alt=''
							/>
						</li>
					</ul>
				</div>

				<Dropdown provider={Dropdowns.selection}>
					<ul className='Image__list'>
						<li className='Image__li'>Size 1px</li>
						<li className='Image__li'>Size 2px</li>
						<li className='Image__li'>Size 3px</li>
						<li className='Image__li'>Size 4px</li>
					</ul>
				</Dropdown>

				<div className='Image__description'>Obraz</div>
			</div>
		);
	}
}

const Image = connect(mapStateToProps)(ImageComponent);

export default Image;
