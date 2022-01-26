export {}
// import axios from 'axios';
// import { store } from '../store/index';

// const axiosInstance = axios.create({
//     baseURL: `https://react-course-b798e-default-rtdb.firebaseio.com/`,
// });

// axiosInstance.interceptors.request.use((config: any) => {
//     const state = store.getState();
//     const token = state.auth.auth.idToken;
//     config.params = config.params || {};
//     config.params['auth'] = token;

//     return config;
// });

// export default axiosInstance;