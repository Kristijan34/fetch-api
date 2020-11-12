import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import './global.css';
import Posts from './pages/Posts';
import UserDetails from './pages/UserDetails';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/posts" component={Posts} />
					<Route path="/users/:userId" component={UserDetails} />
				</Switch>
			</Router>
		);
	}
}

export default App;
