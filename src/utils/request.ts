import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';

const servicesInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
});
interface Response {
  code: number;
  data?: null;
  message: string;
  success: boolean;
}
servicesInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return err;
  }
);
servicesInstance.interceptors.response.use(
  (response: AxiosResponse<Response>) => {
    console.log(response);

    return response;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
