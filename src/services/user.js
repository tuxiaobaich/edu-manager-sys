import request from '@/utils/request'
import qs from 'qs'

// 用户登录接口
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data: qs.stringify(data)
  })
}

// 用户基本信息接口
export const getUserInfo = (data) => {
  return request({
    method: 'post',
    url: '/api/users/login',
    data
  })
}
