import request from '../utils/request'

// 登录接口
const getLogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 用户信息 /sys/profile
const getUserList = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}

// 获取项目功能 /user/feature
const getFeature = () => {
  return request({
    url: '/user/feature',
    method: 'GET'
  })
}

export default {
  getLogin,
  getUserList,
  getFeature
}
