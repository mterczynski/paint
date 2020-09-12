import React from 'react';
import { useSelector } from 'react-redux';
import { AppState, Popup } from '../../types';
import { EditColoursPopup } from './edit-colours/EditColoursPopup';

export const PopupContainer = () => {
	const openedPopup = useSelector((state: AppState) => state.openedPopup);
	return <div>
		{(() => {
			if(openedPopup === Popup.editColors) {
				return <EditColoursPopup></EditColoursPopup>;
			}

			return null;
		})()}
	</div>;
};
