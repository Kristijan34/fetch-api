import React, {Component} from 'react';
import axios from '../services/axios';

class UserDetails extends Component {
	state = {
		loaded: false,
		data: null,
		error: null,
	};

	componentDidMount() {
		const {match} = this.props;

		axios
			.get(`users/${match?.params?.userId}`)
			.then(({data}) => this.setState({data}))
			.catch((error) => this.setState({error}))
			.finally(() => this.setState({loaded: true}));
	}

	render() {
		const {data} = this.state;

		if (!this.state.loaded) {
			return <p>Loading...</p>;
		}

		if (this.state.error) {
			return <p>{this.state.error?.message || 'Failed to load user'}</p>;
		}

		return (
			<p>
				{data?.address?.street}, {data?.address?.city},{' '}
				{data?.address?.zipcode}
			</p>
		);
	}
}

export default UserDetails;
