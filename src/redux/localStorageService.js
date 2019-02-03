export const localStorageService = {
	prefix: '_10D@9dF_msPaint_', // unique prefix for localstorage, could be '' on production

	save(name, value) {
		localStorage.setItem(prefix + name, JSON.stringify(value));
	},

	read(name) {
		return JSON.parse(localStorage.getItem(prefix + name));
	},

	initItem(itemName, value) {
		if (!localStorageService.read(itemName)) {
			localStorageService.save(itemName, value);
		}
	},

	init() {
		localStorageService.initItem('viewTab__bottomBar', true);
		localStorageService.initItem('viewTab__gridLines', false);
		localStorageService.initItem('viewTab__rulers', false);
		localStorageService.initItem('isRibbonAlwaysCollapsed', false);
	},

	getAppData() {
		localStorageService.init();

		return {
			viewTab: {
				rulers: localStorageService.read('viewTab__rulers'),
				bottomBar: localStorageService.read('viewTab__bottomBar'),
				gridLines: localStorageService.read('viewTab__gridLines')
			},
			isRibbonAlwaysCollapsed: localStorageService.read(
				'isRibbonAlwaysCollapsed'
			)
		};
	}
};
