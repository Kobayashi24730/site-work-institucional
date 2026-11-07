import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.react_app_api || 'http://127.0.0.1:8000/api'
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('@App:token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    };
    return config;
});