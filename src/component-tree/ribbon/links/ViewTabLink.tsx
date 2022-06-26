import { useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { AppState, Tabs } from "../../../types";
import { useLang } from "../../../hooks";
import { StyledTab } from "../RibbonStyles";
import { setActiveTab } from "../../../redux/root-slice";

const dispatchSetActiveTab = (tab: Tabs) => {
	store.dispatch(setActiveTab(tab));
};

export const ViewTabLink = () => {
	const lang = useLang();
	const activeTab = useSelector((appState: AppState) => appState.activeTab);

	return (
		<StyledTab
			onClick={() => dispatchSetActiveTab(Tabs.View)}
			active={activeTab === Tabs.View}
		>
			{lang.viewTab.title}
		</StyledTab>
	);
};
