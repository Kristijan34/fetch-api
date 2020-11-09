import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import './global.css';
import Posts from './pages/Posts';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/posts" component={Posts} />
				</Switch>
			</Router>
		);
	}
}

export default App;
