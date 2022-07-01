import styled from "styled-components";
import { BasicColours } from "./colours-column/sub-components/BasicColours";
import { CustomColours } from "./colours-column/sub-components/CustomColours";
import { ModalButton } from "./styles/ModalButton";
import { ColorPicker } from "./color-picker-column/ColorPicker";
import { useCallback } from "react";
import { store } from "../../../redux/store";
import { setPopup } from "../../../redux/root-slice";
import { Popup as PopupType } from "../../../types";
import { Popup } from "../Popup";

const StyledContent = styled.div`
	background: rgb(240, 240, 240);
	padding-bottom: 7px;
	display: flex;
	flex-shrink: 0;
	flex-grow: 0;
`;

const CloseButtons = () => {
	const closePopup = useCallback(() => {
		store.dispatch(setPopup(PopupType.none));
	}, []);

	return (
		<div style={{ position: "relative", left: "-1px" }}>
			<ModalButton onClick={closePopup} style={{ width: "62px", marginRight: "8px" }}>
				OK
			</ModalButton>
			<ModalButton onClick={closePopup} style={{ width: "62px" }}>Cancel</ModalButton>
		</div>
	);
};

const ColorOptions = () => {
	return <></>;
};

const AddToCustomColours = () => {
	return <></>;
};

export const EditColoursPopup = () => {
	return (
		<Popup title="Edit Colours" style={{ width: "447px" }}>
			<StyledContent>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "211px",
						paddingLeft: "6px",
						marginRight: "18px",
					}}
				>
					<BasicColours />
					<CustomColours />
					<CloseButtons />
				</div>

				<div
					style={{ display: "flex", flexDirection: "column", width: "219px" }}
				>
					<ColorPicker />
					<ColorOptions />
					<AddToCustomColours />
				</div>
			</StyledContent>
		</Popup>
	);
};
