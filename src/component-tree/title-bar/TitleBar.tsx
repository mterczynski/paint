import { maximize } from "../../redux/root-slice";
import { store } from "../../redux/store";

import "./TitleBar.scss";

function maximizeWindow() {
	store.dispatch(maximize());
}

const Icon = (props: {
	src: string;
	onClick?: () => void;
	className?: string;
}) => {
	return (
		<div
			className={`TitleBar__window-icons__icon ${props.className || ""}`}
			onClick={props.onClick}
		>
			<img
				draggable="false"
				src={props.src}
				className="TitleBar__window-icons__icon__image"
				alt=""
			/>
		</div>
	);
};

const TitleBar = () => {
	return (
		<div className="TitleBar">
			<div className="TitleBar__window-icons">
				<div className="TitleBar__window-icons__icon TitleBar__window-icons__icon__minimizeTile">
					<div className="TitleBar__window-icons__icon__minimize" />
				</div>

				{/* <Icon
					src={require("./../../assets/icons/top/maximize.png")}
					onClick={maximizeWindow}
				/>
				<Icon
					src={require("./../../assets/icons/top/close.png")}
					className="TitleBar__window-icons__icon--close"
				/> */}
			</div>
		</div>
	);
};

export default TitleBar;
