import React from 'react';
import store from '../../../redux/store';
import * as actions from '../../../redux/actions';
import { connect } from "react-redux";

require('./ViewTab.scss');

import Tab from '../tab/Tab';

const mapStateToProps = (state) => {
	return { currentTab: state.currentTab };
};
  
class ViewTabComponent extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			
		}

		this.toggleBottomBar = this.toggleBottomBar.bind(this);
	}

	toggleBottomBar(){
		store.dispatch(actions.toggleBottomBar());
	}

	render(){
		return <Tab>
			<div className="ViewTab">
				<div className="ViewTab__group">
					<div className="ViewTab__content">
						<figure className="ViewTab__figure">
							<img className="ViewTab__icon" alt="" 
							src={require('../../../assets/icons/view-tab/zoomIn.png')}/>
							<figcaption className="ViewTab__figcaption">
								Powiększ
							</figcaption>
						</figure>

						<figure className="ViewTab__figure">
							<img alt="" className="ViewTab__icon"
							src={require('../../../assets/icons/view-tab/zoomOut.png')}/>
							<figcaption className="ViewTab__figcaption">
								Pomniejsz
							</figcaption>
						</figure>

						<figure className="ViewTab__figure">
							<img alt="" className="ViewTab__icon"
							src={require('../../../assets/icons/view-tab/maximize.png')}/>
							<figcaption className="ViewTab__figcaption">
								100 <br/> %
							</figcaption>
						</figure>
					</div>
					<h1 className="ViewTab__description">Powiększenie</h1>
				</div>

				<div className="ViewTab__group">
					<div className="ViewTab__content">
						<ul className="ViewTab__list">
							<li>
								<label className="ViewTab__label">	
									<input type="checkbox" className="ViewTab__checkboxInput"/>
									<span className="ViewTab__customCheckbox"></span>
									<span className="ViewTab__checkboxDesc">Linijki</span>
								</label>
							</li>

							<li>
								<label className="ViewTab__label">	
									<input type="checkbox" className="ViewTab__checkboxInput"/>
									<span className="ViewTab__customCheckbox"></span>
									<span className="ViewTab__checkboxDesc">Linie siatki</span>
								</label>
							</li>

							<li>
								<label className="ViewTab__label" onClick={this.toggleBottomBar}>	
									<input type="checkbox" className="ViewTab__checkboxInput"/>
									<span className="ViewTab__customCheckbox"></span>
									<span className="ViewTab__checkboxDesc">Pasek stanu</span>
								</label>
							</li>
						</ul>
					</div>
					<h1 className="ViewTab__description">Pokazywanie lub ukrywanie</h1>
				</div>

				<div className="ViewTab__group">
					<div className="ViewTab__content">
						<figure className="ViewTab__figure">
							<img className="ViewTab__icon" alt="" 
							src={require('../../../assets/icons/view-tab/fullScreen.png')}/>
							<figcaption className="ViewTab__figcaption">
								Pełny <br/> Ekran
							</figcaption>
						</figure>

						<figure className="ViewTab__figure">
							<img alt="" className="ViewTab__icon"
							src={require('../../../assets/icons/view-tab/miniature.png')}/>
							<figcaption className="ViewTab__figcaption">
								Miniatura
							</figcaption>
						</figure>

					</div>
					<h1 className="ViewTab__description">Wyświetlanie</h1>
				</div>
			</div>		
		</Tab>
	}
}

const ViewTab = connect(mapStateToProps)(ViewTabComponent);

export default ViewTab;