import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../../../types';
import './Clipboard.scss';

const Clipboard = () => {
	const language = useSelector((state: AppState)  => state.language);

	return (
		<div className='Clipboard'>
			<div className='Clipboard__content'>
				<div className='Clipboard__pasteGroup'>
					<div className='Clipboard__pasteGroupTop'>
						<img
							className='Clipboard__pasteImage'
							draggable='false'
							src={require('../../../../../assets/icons/main-tools-tab/1_clipboard/1.png')}
							alt=''
						/>
					</div>

					<div className='Clipboard__pasteGroupBottom'>
						<div>{language.homeTabs.clipboard.paste.title}</div>
						<img
							className='Clipboard__arrowDown'
							draggable='false'
							src={require('../../../../../assets/icons/arrow_down.png')}
							alt=''
						/>
					</div>
				</div>

				<div className='Clipboard__buttons'>
					<div className='Clipboard__button'>
						<img
							draggable='false'
							src={require('../../../../../assets/icons/main-tools-tab/1_clipboard/scissors.png')}
							className='Clipboard__buttonImage'
							alt=''
						/>

						<span className='Clipboard_buttonText'> Wytnij</span>
					</div>

					<div className='Clipboard__button'>
						<img
							draggable='false'
							src={require('../../../../../assets/icons/main-tools-tab/1_clipboard/3_active.png')}
							className='Clipboard__buttonImage'
							alt=''
						/>
						<span className='Clipboard__buttonText'> Kopiuj</span>
					</div>
				</div>
			</div>
			<div className='Clipboard__description'>Schowek</div>
		</div>
	);
};

export default Clipboard;
