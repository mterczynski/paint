import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import BottomBar from "./component-tree/bottom-bar/BottomBar";
import CanvasArea from "./component-tree/canvas-area/CanvasArea";
import Ribbon from "./component-tree/ribbon/Ribbon";
import TitleBar from "./component-tree/title-bar/TitleBar";
import { store } from "./redux/store";
import "./App.scss";
import { MouseButton } from "./types";
import { PopupContainer } from "./component-tree/popups/PopupContainer";
import { appClick, setPressedMouseButtonOnCanvas } from "./redux/root-slice";
import { ResizableWindow } from "./reusable-components/resizable-window";

function onClick() {
	store.dispatch(appClick());
}

function blockContextMenu(e: React.MouseEvent) {
	e.preventDefault();
	return false;
}

const App = () => {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<ResizableWindow
					className="App"
					onClick={onClick}
					onContextMenu={blockContextMenu}
					initialSize={{ width: 1600, height: 750 }}
					initialPosition={{ x: 50, y: 50 }}
				>
					<TitleBar />
					<Ribbon />

					<CanvasArea />
					<BottomBar />
					<PopupContainer />
				</ResizableWindow>
			</React.StrictMode>
		</Provider>
	);
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

window.addEventListener("blur", () =>
	store.dispatch(setPressedMouseButtonOnCanvas(MouseButton.None))
);
