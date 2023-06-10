import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE, // 暂时用bufan后台地址
  timeout: 10 * 1000
})

instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers['token'] = localStorage.getItem('token')
  }
  config.headers['Content-Type'] = 'application/json' // 默认json
  return config
})

instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default instance