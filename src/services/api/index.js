import axios from 'axios';
const request = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		common: {
			Authorization:
				window.location.pathname?.search('admin') > 0 ||
				window.location.pathname?.search('explore') > 0
					? localStorage.getItem('tokenAdmin')
						? 'Bearer ' + localStorage.getItem('tokenAdmin')
						: null
					: localStorage.getItem('token')
					? 'Bearer ' + localStorage.getItem('token')
					: null,
		},
	},
	timeout: 30000,
});
request.interceptors.request.use(
	(config) => {
		const location = window.location.pathname;
		const token =
			location?.search('admin') > 0 || location?.search('explore') > 0
				? localStorage.getItem('tokenAdmin')
					? 'Bearer ' + localStorage.getItem('tokenAdmin')
					: null
				: localStorage.getItem('token')
				? 'Bearer ' + localStorage.getItem('token')
				: null;
		config.headers['Authorization'] = `${token}`;

		return config;
	},
	(error) => {
		if (error.response?.status === 401) {
			localStorage.clear();
			window.location.pathname = '/register';
		}
		return Promise.reject(error);
	},
);

export default request;
