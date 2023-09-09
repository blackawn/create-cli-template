import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from '@/utils/axios'

export const getCurp = (config: AxiosRequestConfig) => axiosInstance(config)
