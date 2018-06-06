import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import * as actions from './redux/actions';
import { connect } from "react-redux";
import { Provider } from "react-redux";

// components:

import TitleBar from './components/title-bar/TitleBar';
import Ribbon from './components/ribbon/Ribbon';
import CanvasArea from './components/canvas-area/CanvasArea';
import BottomBar from './components/bottom-bar/BottomBar';

require('./App.css');

const mapStateToProps = (state) => {
	return { 
		isDropdownActive: state.isDropdownActive
	};
};

class UnconnectedApp extends React.Component{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e){
		store.dispatch(actions.appClick());
	}

	render(){
		return <Provider store={store}>       
			<div className="App" onClick={this.onClick}>
				<TitleBar/>
				<Ribbon/>
				<CanvasArea/>
				<BottomBar/>
			</div>
		</Provider>
	}
}

const App = connect(mapStateToProps)(UnconnectedApp);

export default App;

ReactDOM.render(<Provider store={store}> 
	<App/>
 </Provider>, document.getElementById('root'));
 