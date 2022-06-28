import axios from 'axios'

// 引入 loading    移动到 loading.js
import loading from './loading'
//  引入md5
import md5 from 'md5'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求
instance.interceptors.request.use(
  function (config) {
    loading.open() // 开loading

    // 调用接口 传的参数 加密icode
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    // 将请求头发送给后台

    return config
  },
  function (error) {
    loading.close() // 关loading
    return Promise.reject(error)
  }
)

// 响应
instance.interceptors.response.use(
  function (response) {
    loading.close() // 关loading
    return response
  },
  function (error) {
    loading.close() // 关loading

    // token过期处理
    // 全局响应处理(鉴权)
    return Promise.reject(error)
  }
)
// 传参统一
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

// 获取 icode
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default request
