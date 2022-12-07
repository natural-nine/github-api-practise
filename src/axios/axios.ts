import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  headers: {},
});

instance.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
