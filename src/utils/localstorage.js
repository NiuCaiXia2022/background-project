// 本地用户
// const SET_TOKEN = 'user'

// 设置
const setToken = (key, data) => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  // localStorage.setItem(SET_TOKEN, data)
  localStorage.setItem(key, data)
}

// 获取
const getToken = (key) => {
  // const data = localStorage.getItem(SET_TOKEN)
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
  // return localStorage.setItem()
}

// 删除
const remoteToken = (key) => {
  localStorage.removeItem(key)
}

// 清空
const remoteAllToken = () => {
  localStorage.clear()
}

export default {
  setToken,
  getToken,
  remoteToken,
  remoteAllToken
}
