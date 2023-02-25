import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosError } from 'axios';
import { storeMode } from '~/store/mode';

export const axiosInstance: AxiosInstance = axios.create({
  //baseURL: '/api',
  timeout: 10000,
  headers: {
    'Mode': storeMode().mode
  }
});

const axiosInstanceMap: Map<string, AxiosInstance> = new Map();

function getAxiosInstanceKey(config: AxiosRequestConfig): string {
  return config.baseURL || '';
}

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {

  return config;
}, (error: AxiosError) => {

  return Promise.reject(error);
});


axiosInstance.interceptors.response.use( (response: AxiosResponse) => {
  console.log(response);

  return response;
}, (error: AxiosError) => {

  return Promise.reject(error);
});

