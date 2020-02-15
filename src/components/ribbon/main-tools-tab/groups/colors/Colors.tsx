import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../redux/actions';
import store from '../../../../../redux/store';

import './Colors.scss';

interface PropTypes {
	isBrushActive: boolean,
	selectedMainColorIndex: 1 | 2,
	mainColor1: string,
	mainColor2: string
}

const basicColors = Object.freeze([
	// first row:
	Object.freeze([
		'rgb(0,0,0)',
		'rgb(127,127,127)',
		'rgb(136,0,21)',
		'rgb(237,28,36)',
		'rgb(255,127,39)',
		'rgb(255,242,0)',
		'rgb(34,177,76)',
		'rgb(0,162,232)',
		'rgb(63,72,204)',
		'rgb(163,73,164)'
	]),
	// second row:
	Object.freeze([
		'rgb(255,255,255)',
		'rgb(195,195,195)',
		'rgb(185,122,87)',
		'rgb(255,174,201)',
		'rgb(255,201,14)',
		'rgb(239,228,176)',
		'rgb(181,230,29)',
		'rgb(153,217,234)',
		'rgb(112,146,190)',
		'rgb(200,191,231)'
	])
]);

const mapStateToProps = state => {
	return {
		selectedMainColorIndex: state.colors.selectedMainColorIndex,
		mainColor1: state.colors.color1,
		mainColor2: state.colors.color2
	} as PropTypes;
};

class ColorsComponent extends React.Component<PropTypes> {
	readonly state = Object.freeze({
		isListCollapsed: false,
		lastUsedCustomColors: Object.freeze([
			'rgb(255, 111, 0)',
			'rgb(0, 0, 0)',
			'rgb(255, 255, 255)',
			null,
			null,
			null,
			null,
			null,
			null,
			null
		])
	})

	constructor(props) {
		super(props);
	}

	selectMainColorIndex(id) {
		store.dispatch(actions.selectMainColorIndex(id));
	}

	setSelectedMainColor(color) {
		store.dispatch(actions.setSelectedMainColor(color));
	}

	render() {
		return (
			<div className="Colors">
				<div className="Colors__content">
					<div
						className={
							(this.props.selectedMainColorIndex == 1
								? 'Colors__mainColor--active'
								: '') + ' Colors__mainColor'
						}
						onClick={() => {
							this.selectMainColorIndex(1);
						}}
					>
						<div
							style={{ background: this.props.mainColor1 }}
							className="Colors__colorBox"
						/>
						<div className="Colors__colorBoxText">
							Kolor <br /> 1
						</div>
					</div>

					<div
						className={
							(this.props.selectedMainColorIndex == 2
								? 'Colors__mainColor--active'
								: '') + ' Colors__mainColor'
						}
						onClick={() => {
							this.selectMainColorIndex(2);
						}}
					>
						<div
							style={{ background: this.props.mainColor2 }}
							className="Colors__colorBox Colors__colorBox--small"
						/>
						<div className="Colors__colorBoxText">
							Kolor
							<br />2
						</div>
					</div>

					<div className="Colors__colors">
						<div className="Colors__colorRow">
							{basicColors[0].map((color, i) => {
								return (
									<div
										style={{ background: color }}
										key={i}
										className="Colors__colorBox Colors__colorBox--tiny"
										onClick={() => {
											this.setSelectedMainColor(color);
										}}
									/>
								);
							})}
						</div>

						<div className="Colors__colorRow">
							{basicColors[1].map((color, i) => {
								return (
									<div
										style={{ background: color }}
										key={i}
										className="Colors__colorBox Colors__colorBox--tiny"
										onClick={() => {
											this.setSelectedMainColor(color);
										}}
									/>
								);
							})}
						</div>

						<div className="Colors__colorRow">
							{this.state.lastUsedCustomColors.map((color, i) => {
								if (color) {
									return (
										<div
											style={{ background: color }}
											key={i}
											className="Colors__colorBox Colors__colorBox--tiny"
											onClick={() => {
												this.setSelectedMainColor(color);
											}}
										/>
									);
								}
								return (
									<div
										className="Colors__colorBox Colors__colorBox--tiny--disabled"
										key={i}
									/>
								);
							})}
						</div>
					</div>

					<div className="Colors__editColors">
						<img
							className="Colors__editColorsIcon"
							src={require('../../../../../assets/icons/main-tools-tab/7_colors.png')}
							alt=""
						/>
						<div className="Colors__colorBoxText">
							Edytuj
							<br />
							kolory
						</div>
					</div>
				</div>
				<div className="Colors__description">Kolory</div>
			</div>
		);
	}
}

const Colors = connect(mapStateToProps)(ColorsComponent);

export default Colors;