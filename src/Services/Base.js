import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://ec2-54-155-129-26.eu-west-1.compute.amazonaws.com/api/v1/',
    headers: { 'Content-Type': 'Application/json' }
});

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && (!config.headers.non_auth || config.headers.non_auth === 'false')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    delete config.headers.non_auth;
    return config;
});