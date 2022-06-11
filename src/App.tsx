import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import BottomBar from './component-tree/bottom-bar/BottomBar';
import CanvasArea from './component-tree/canvas-area/CanvasArea';
import Ribbon from './component-tree/ribbon/Ribbon';
import TitleBar from './component-tree/title-bar/TitleBar';
import {store} from './redux/store';
import './App.scss';
import { MouseButton } from './types';
import { PopupContainer } from './component-tree/popups/PopupContainer';
import { appClick, setPressedMouseButtonOnCanvas } from './redux/root-slice';

function onClick() {
	store.dispatch(appClick());
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
					<React.StrictMode>
						<TitleBar />
						<Ribbon />
						<CanvasArea />
						<BottomBar />
						<PopupContainer/>
					</React.StrictMode>
				</Provider>
			</div>
	);
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

window.addEventListener('blur', () => store.dispatch(
	setPressedMouseButtonOnCanvas(MouseButton.None)
));
