import request from '../utils/request'

// 登录接口
const getLogin = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export default {
  getLogin
}
