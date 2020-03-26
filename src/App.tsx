import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BottomBar from './components/bottom-bar/BottomBar';
import CanvasArea from './components/canvas-area/CanvasArea';
import Ribbon from './components/ribbon/Ribbon';
import TitleBar from './components/title-bar/TitleBar';
import * as actionCreators from './redux/action-creators';
import store from './redux/store';

import './App.scss';

function onClick() {
	store.dispatch(actionCreators.appClick());
}

function blockContextMenu(e: React.MouseEvent) {
	e.preventDefault();
	return false;
}

const App = () => {
	return (
		<div className='App'
			onClick={onClick}
			onContextMenu={blockContextMenu}
		>
			<Provider store={store}>
				<TitleBar />
				<Ribbon />
				<CanvasArea />
				<BottomBar />
			</Provider>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root'),
);
