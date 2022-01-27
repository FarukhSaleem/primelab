import axios from 'axios';
import { API_BASE_URL } from '../constants/app.constants';
import store from '../store/index';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config: any) => {
    const state = store.getState();
    const token = state.user.user.token;
    config.params = config.params || {};
    config.params['auth'] = token;

    return config;
});

export default axiosInstance;