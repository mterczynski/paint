import React from 'react';
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

import './Ribbon.scss';

enum Tabs {
	MainTools = 'MainTools',
	View = 'View',
}

export default class Ribbon extends React.Component {
	readonly state = {
		activeTab: Tabs.MainTools,
		isCollapsed: false,
	};

	constructor(props) {
		super(props);
		this.toggleRibbon = this.toggleRibbon.bind(this);
	}

	changeTab(tabName: Tabs) {
		this.setState({ activeTab: tabName });
	}

	toggleRibbon() {
		this.setState({ isCollapsed: !this.state.isCollapsed });
	}

	render() {
		return (
			<div className='Ribbon'>
				<div className='Ribbon__head'>
					<div className='Ribbon__head__tabNames'>
						<div className='Ribbon__head__tabNames__file'>Plik</div>

						<div
							onClick={() => this.changeTab(Tabs.MainTools)}
							className={
								'Ribbon__head__tabNames__tab ' +
								(this.state.activeTab === Tabs.MainTools
									? 'Ribbon__head__tabNames__tab--active'
									: '')
							}
						>
							Narzędzia główne
						</div>

						<div
							onClick={() => this.changeTab(Tabs.View)}
							className={
								'Ribbon__head__tabNames__tab ' +
								(this.state.activeTab === Tabs.View
									? 'Ribbon__head__tabNames__tab--active'
									: '')
							}
						>
							Widok
						</div>
					</div>

					<div className='Ribbon__head__icons'>
						<div
							className='Ribbon__head__icons__icon'
							onClick={this.toggleRibbon}
						>
							<img
								draggable='false'
								className={
									'Ribbon__head__icons__icon__image ' +
									(this.state.isCollapsed
										? 'Ribbon__head__icons__icon__image--reversed'
										: '')
								}
								src={require('../../assets/icons/top/collapse.png')}
							/>
						</div>

						<div className='Ribbon__head__icons__icon'>
							<img
								draggable='false'
								className='Ribbon__head__icons__icon__image'
								src={require('../../assets/icons/top/help.png')}
							/>
						</div>
					</div>
				</div>

				{this.state.isCollapsed === false ? (
					<div className='Ribbon__body'>
						{this.state.activeTab === Tabs.MainTools ? (
							<MainToolsTab />
						) : (
							<ViewTab />
						)}
					</div>
				) : null}
			</div>
		);
	}
}
