import axios from './axios';

export const getAllPosts = () => axios.get('posts').then(({data}) => data);
