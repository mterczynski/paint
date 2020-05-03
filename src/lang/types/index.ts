import { FileMenu } from './fileMenu.type';
import { HomeTabs } from './homeTabs.type';
import { ViewTab } from './viewTab.type';

export type Lang = Readonly<{
	fileMenu: FileMenu;
	homeTabs: HomeTabs;
	viewTab: ViewTab;
}>;
