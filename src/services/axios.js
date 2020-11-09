import Axios from 'axios';
// import history from '../history';

const axios = Axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

// axios.interceptors.request.use((request) => {
//     request.headers.authorization = localStorage.getItem('token');
//     return request;
// });

// axios.interceptors.response.use(undefined, (error) => {
//     if (error?.response?.status === 401) {
//         localStorage.removeItem('token');
//         history.push('/login');
//     }

//     return Promise.reject(error);
// });

export default axios;
