import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

const servicesInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
});

servicesInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return err;
  }
);
