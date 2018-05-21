import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import * as actions from './redux/actions';
import { Provider } from "react-redux";

// components:

import TitleBar from './components/title-bar/TitleBar';
import Ribbon from './components/ribbon/Ribbon';
import CanvasArea from './components/canvas-area/CanvasArea';
import BottomBar from './components/bottom-bar/BottomBar';

require('./App.css');

class App extends React.Component{
	render(){
		return <Provider store={store}>       
			<div className="App">
				<TitleBar/>
				<Ribbon/>
				<CanvasArea/>
				<BottomBar/>
			</div>
		</Provider>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
