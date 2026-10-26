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
        const response = await api.get('/users');
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