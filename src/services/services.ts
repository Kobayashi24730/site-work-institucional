import {api} from "@/api/api";

api.interceptors.request.use(config => {
    const token = localStorage.getItem('@App:token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const Services = {
    getUser: async () => {
        const response = await api.get('/user');
        return response.data;
    },
    login: async (credentials: { email: string; senha: string}) => {
        const response = await api.post('/login', credentials);
        return response.data;
    },
    createUser: async (data) => {
        const response = await api.post('/users', data);
        return response.data;
    },
    deleteUser: async (id) => {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }
}