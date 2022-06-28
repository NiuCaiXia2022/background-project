// 本地用户
const SET_TOKEN = 'user'

// 设置
const setToken = (data) => {
  sessionStorage.setItem(SET_TOKEN, data)
}

// 获取
const getToken = () => {
  return sessionStorage.setItem(SET_TOKEN)
}

// 删除
const remoteToken = () => {
  sessionStorage.removeItem(SET_TOKEN)
  //  sessionStorage.removeItem(SET_TOKEN)
}

export default {
  setToken,
  getToken,
  remoteToken
}
