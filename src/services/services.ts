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
    updateUser: async (data) => {
        const response = await api.post(`/reset-password`, {
            token: data.token,
            email: data.email,
            password: data.password
        });
        return response.data;
    },
    deleteUser: async (data) => {
        const response = await api.delete(`/users/${data.id}`);
        return response.data;
    },
    forgotPassword: async (data) => {
        const response = await api.post(`/forgot-password`, {
            token: data.token,
            email: data.email
        });
        return response.data;
    }
}