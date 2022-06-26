import Tab from "../tab/Tab";

import Display from "./Display";
import ShowOrHide from "./ShowOrHide";
import "./ViewTab.scss";
import Zoom from "./Zoom";

const ViewTab = () => {
	return (
		<Tab>
			<div className="ViewTab">
				<Zoom></Zoom>
				<ShowOrHide></ShowOrHide>
				<Display></Display>
			</div>
		</Tab>
	);
};

export default ViewTab;
