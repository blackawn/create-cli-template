import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosError } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
  headers: {
  }
})

const axiosInstanceMap: Map<string, AxiosInstance> = new Map()

function getAxiosInstanceKey(config: AxiosRequestConfig): string {
  return config.baseURL || ''
}

axiosInstance.interceptors.request.use((config) => {

  return config
}, (error: AxiosError) => {

  return Promise.reject(error)
})

axiosInstance.interceptors.response.use( (response: AxiosResponse) => {
  console.log(response)

  return response
}, (error: AxiosError) => {

  return Promise.reject(error)
})
