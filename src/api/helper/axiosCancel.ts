import axios, { AxiosRequestConfig, Canceler } from 'axios'
import qs from 'qs'
import { isFunction } from '@/utils/is'

// 声明Map结构 存储每个请求的标识 和 取消函数
const pendingMap = new Map<string, Canceler>()

// 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) => {
  return [
    config.method,
    config.url,
    qs.stringify(config.data),
    qs.stringify(config.params)
  ].join('&')
}

export class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
      if (!pendingMap.has(url)) {
        pendingMap.set(url, cancel)
      }
    })
  }

  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  reset() {
    pendingMap.clear()
  }
}