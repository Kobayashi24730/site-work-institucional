import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.react_app_api || 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json'
    }
});