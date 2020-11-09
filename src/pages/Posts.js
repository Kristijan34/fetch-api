import React, {Component} from 'react';
import * as postsApi from '../services/posts-api';

class Posts extends Component {
	state = {
		posts: [],
		loaded: false,
		error: null,
	};

	componentDidMount() {
		postsApi
			.getAllPosts()
			.then((posts) => this.setState({posts}))
			.catch((error) => this.setState({error}))
			.finally(() => this.setState({loaded: true}));
	}

	render() {
		const {posts, error, loaded} = this.state;

		if (!loaded) {
			return <p>Posts are loading...</p>;
		}

		if (error) {
			return <p>{error.message || 'Failed to load posts.'}</p>;
		}

		return (
			<ul>
				{posts &&
					posts.map((post) => <li key={post.id}>{post.body}</li>)}
			</ul>
		);
	}
}

export default Posts;
