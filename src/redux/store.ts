import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

const reduxDevtoolsExtenstion = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(logger),
		reduxDevtoolsExtenstion
	)
);
export default store;
