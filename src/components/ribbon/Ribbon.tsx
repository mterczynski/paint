import React, { useState } from 'react';
import MainToolsTab from './main-tools-tab/MainToolsTab';
import ViewTab from './view-tab/ViewTab';

import './Ribbon.scss';

enum Tabs {
	MainTools = 'MainTools',
	View = 'View',
}

const HelpIcon = () => {
	return <div className='Ribbon__head__icons__icon'>
		<img
			draggable='false'
			className='Ribbon__head__icons__icon__image'
			src={require('../../assets/icons/top/help.png')}
		/>
	</div>;
};

const Ribbon = () => {
	const [activeTab, setActiveTab] = useState(Tabs.MainTools);
	const [isCollapsed, setIsColapsed] = useState(false);

	function toggleRibbon() {
		setIsColapsed(!isCollapsed);
	}

	const RibbonToggler = () => {
		return <div
			className='Ribbon__head__icons__icon'
			onClick={toggleRibbon}
		>
			<img
				draggable='false'
				className={
					'Ribbon__head__icons__icon__image ' +
					(isCollapsed
						? 'Ribbon__head__icons__icon__image--reversed'
						: '')
				}
				src={require('../../assets/icons/top/collapse.png')}
			/>
		</div>;
	};

	return (
		<div className='Ribbon'>
			<div className='Ribbon__head'>
				<div className='Ribbon__head__tabNames'>
					<div className='Ribbon__head__tabNames__file'>Plik</div>

					<div
						onClick={() => setActiveTab(Tabs.MainTools)}
						className={
							'Ribbon__head__tabNames__tab ' +
							(activeTab === Tabs.MainTools
								? 'Ribbon__head__tabNames__tab--active'
								: '')
						}
					>
						Narzędzia główne
						</div>

					<div
						onClick={() => setActiveTab(Tabs.View)}
						className={
							'Ribbon__head__tabNames__tab ' +
							(activeTab === Tabs.View
								? 'Ribbon__head__tabNames__tab--active'
								: '')
						}
					>
						Widok
						</div>
				</div>

				<div className='Ribbon__head__icons'>
					<RibbonToggler></RibbonToggler>
					<HelpIcon></HelpIcon>
				</div>
			</div>

			{isCollapsed === false ? (
				<div className='Ribbon__body'>
					{activeTab === Tabs.MainTools ? (
						<MainToolsTab />
					) : (
							<ViewTab />
						)}
				</div>
			) : null}
		</div>
	);
};

export default Ribbon;
