import axios from 'axios';

// Set config defaults when creating the instance
export const instance = axios.create({
    baseURL: 'http://localhost:5000'
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.request.use(
    config => {
        config.headers.Token = localStorage.getItem("token");
        return config;
    },
    error => Promise.reject(error)
);