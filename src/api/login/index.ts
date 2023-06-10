import request from '@/request'

export const login = (data: {
  username: string,
  password: string
}) => {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'post',
    data
  })
}