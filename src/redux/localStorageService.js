/* things stored in localStorage:

	viewTab:{
		rulers
		bottomBar
		gridLines
	},
	isRibbonAlwaysCollapsed
*/


export const localStorageService = {
	prefix: '_10D@9dF_msPaint_', // unique prefix for localstorage, should be '' on production

	save(name, value){
		localStorage.setItem(prefix + name, JSON.stringify(value));
	},

	read(name){
		return JSON.parse(localStorage.getItem(prefix + name));
	},

	init(){
		if(!localStorageService.read('viewTab__bottomBar')){
			localStorageService.save('viewTab__bottomBar', true);
		}
		if(!localStorageService.read('viewTab__gridLines')){
			localStorageService.save('viewTab__gridLines', false);
		}
		if(!localStorageService.read('viewTab__rulers')){
			localStorageService.save('viewTab__rulers', false);
		}
		if(!localStorageService.read('isRibbonAlwaysCollapsed')){
			localStorageService.save('isRibbonAlwaysCollapsed', false);
		}
	},

	getAppData(){
		localStorageService.init();

		return {
			viewTab:{
				rulers: localStorageService.read('viewTab__rulers'),
				bottomBar: localStorageService.read('viewTab__bottomBar'),
				gridLines: localStorageService.read('viewTab__gridLines')
			},
			isRibbonAlwaysCollapsed: localStorageService.read('isRibbonAlwaysCollapsed')
		}
	}
}
