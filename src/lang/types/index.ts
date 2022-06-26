import { FileMenu } from "./fileMenu.type";
import { HomeTabs } from "./homeTabs.type";
import { ViewTab } from "./viewTab.type";
import { StatusBar } from "./statusBar.type";

export type Lang = Readonly<{
	fileMenu: FileMenu;
	homeTabs: HomeTabs;
	viewTab: ViewTab;
	statusBar: StatusBar;
}>;
