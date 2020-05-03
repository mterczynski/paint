export interface ViewTab {
	title: string;
	zoom: {
		title: string;
		zoomIn: {
			title: string;
		},
		zoomOut: {
			title: string;
		},
		hundredPercent: {
			title: string;
		}
	},
	showOrHide: {
		title: string;
		rulers: {
			title: string;
		};
		gridlines: {
			title: string;
		};
		statusBar: {
			title: string;
		}
	},
	display: {
		fullScreen: {
			title: string;
		};
		thumbnail: {
			title: string;
		}
	}
}
