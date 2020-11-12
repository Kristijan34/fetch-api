import React, {Component} from 'react';
import {findAllInRenderedTree} from 'react-dom/test-utils';
import {BrowserRouter as Router, NavLink, Link} from 'react-router-dom';
import axios from '../services/axios';

class HomePage extends Component {
	state = {
		users: [],
		error: null,
		loaded: false,
	};

	async componentDidMount() {
		this.getData();
	}

	async getData() {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			// const response = await fetch('https://run.mocky.io/v3/116a69d3-8036-4d97-9fe9-0d6d80c7ce65');
			const data = await response.json();

			if (response.ok) {
				this.setState({users: data});
			} else {
				this.setState({error: data});
			}
		} catch (error) {
			this.setState({error});
		} finally {
			this.setState({loaded: true});
		}
	}

	deleteId = (userID) => {
		axios
			.delete('https://jsonplaceholder.typicode.com/users/' + userID)
			.then((response) => {
				if (response.data != null) {
					alert('Deleted Successfully');
					this.setState({
						users: this.state.users.filter(
							(user) => user.id !== userID
						),
					});
				}
			});
	};

	render() {
		const {users, loaded, error} = this.state;

		if (!loaded) {
			return <p>Loading...</p>;
		}

		if (error) {
			return <p>{error.message || 'Failed to load users.'}</p>;
		}
		return (
			<table>
				{users.map((user) => (
					<tr key={user.id}>
						<td>
							<NavLink to={`/users/${user.id}`}>
								{user.name}
							</NavLink>
							<button
								className="button"
								onClick={this.deleteId.bind(this, user.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</table>
		);
	}
}

export default HomePage;
