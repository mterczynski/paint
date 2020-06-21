import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BottomBar from './component-tree/bottom-bar/BottomBar';
import CanvasArea from './component-tree/canvas-area/CanvasArea';
import Ribbon from './component-tree/ribbon/Ribbon';
import TitleBar from './component-tree/title-bar/TitleBar';
import * as actionCreators from './redux/action-creators';
import store from './redux/store';
import './App.scss';
import { MouseButton } from './types';

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

window.addEventListener('blur', () => store.dispatch(
	actionCreators.setPressedMouseButtonOnCanvas(MouseButton.None)
));
