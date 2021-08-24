import { message, notification } from 'antd'
import axios from 'axios'

export const getToken = () => localStorage.getItem('_D_TOKEN')
export const setToken = (token: string) =>
  localStorage.setItem('_D_TOKEN', token)

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

client.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: `Bearer ${token}`
      }
    }
  }
  return config
})

client.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        setToken('')
        window.location.href = '/login'
      } else {
        notification.error({
          message: 'Request Failed',
          description: err.response.data.message
        })
      }
      return Promise.reject(err.response)
    } else {
      message.error('Connect To Upstream Service Failed')
      return Promise.reject(err)
    }
  }
)

export { client }
