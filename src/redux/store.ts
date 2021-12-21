import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
import dotenv from 'dotenv';

const storeEnhancer = dotenv.config().parsed!.USE_REDUX_LOGGER ?
	composeWithDevTools(applyMiddleware(logger)) :
	undefined;

const store = createStore(
	rootReducer,
	storeEnhancer,
);
export default store;
