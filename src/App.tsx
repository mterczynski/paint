import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import BottomBar from './components/bottom-bar/BottomBar';
import CanvasArea from './components/canvas-area/CanvasArea';
import Ribbon from './components/ribbon/Ribbon';
import TitleBar from './components/title-bar/TitleBar';
import * as actions from './redux/actions';
import store from './redux/store';

import './App.scss';

const mapStateToProps = state => {
	return {
	};
};

class UnconnectedApp extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		store.dispatch(actions.appClick());
	}

	render() {
		return (
			<Provider store={store}>
				<div className='App' onClick={this.onClick}>
					<TitleBar />
					<Ribbon />
					<CanvasArea />
					<BottomBar />
				</div>
			</Provider>
		);
	}
}

const App = connect(mapStateToProps)(UnconnectedApp);

export default App;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
