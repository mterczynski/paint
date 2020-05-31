import { Lang } from '../types';

const homeTabs = {
	clipboard: {
		title: 'Schowek',
		paste: {
			title: 'Wklej',
		},
		copy: {
			title: 'Kopiuj',
		},
		cut: {
			title: 'Wytnij',
		},
	},
	image: {
		select: {
			title: 'Zaznacz',
		},
		crop: {
			title: 'Przytnij',
		},
		resize: {
			title: 'Zmień rozmiar',
		},
		rotate: {
			title: 'Obróć',
		},
		title: 'Obraz',
	},
	tools: {
		title: 'Narzędzia',
	},
	brushes: {
		title: 'Pędzle',
	},
	shapes: {
		title: 'Kształty',
		outline: {
			title: 'Kontur',
		},
		fill: {
			title: 'Wypełnienie',
		},
	},
	size: {
		title: 'Rozmiar',
	},
	colors: {
		title: 'Kolory',
		color: 'Kolor',
		editColors: {
			title: 'Edytuj kolory',
		},
	},
	paint3d: {
		title: 'Otwórz aplikację Paint 3D',
	},
	title: 'Narzędzia główne'
};

const viewTab = {
	title: 'Widok',
	display: {
		fullScreen: {
			title: 'Pełny ekran'
		},
		thumbnail: {
			title: 'Miniatura'
		},
		title: 'Wyświetlanie'
	},
	showOrHide: {
		gridlines: {
			title: 'Linie siatki'
		},
		rulers: {
			title: 'Linijki'
		},
		statusBar: {
			title: 'Pasek stanu'
		},
		title: 'Pokazywanie lub ukrywanie'
	},
	zoom: {
		title: 'Powiększanie',
		zoomIn: {
			title: 'Powiększ'
		},
		zoomOut: {
			title: 'Pomniejsz'
		},
	}
};

const fileMenu = {
	title: 'Plik'
};

const statusBar = {
	pixels: 'piks.'
};

export const PL_Lang: Lang = Object.freeze({
	homeTabs,
	fileMenu,
	viewTab,
	statusBar
});
