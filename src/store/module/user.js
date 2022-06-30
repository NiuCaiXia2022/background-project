// 登录接口
import LoginApi from '../../api/login'
// 封装的本地存储
import Storage from '../../utils/localstorage'

export default {
  namespaced: true,
  state: () => ({
    token: Storage.getToken('token') || '',
    userInfo: Storage.getToken('userInfo') || ''
  }),
  mutations: {
    setToken(state, obj) {
      state.token = obj
      Storage.setToken('token', obj)
    },

    getLoginProfile(state, userInfo) {
      state.userInfo = userInfo
      Storage.setToken('userInfo', userInfo)
    }
  },
  actions: {
    // 登录
    async login({ commit }, payload) {
      try {
        const reponse = await LoginApi.getLogin(payload)
        // console.log(reponse)
        commit('setToken', reponse.token)
        return reponse
      } catch (error) {
        console.log(error)
      }
    },

    // 用户信息
    async getUserList({ commit }) {
      try {
        const response = await LoginApi.getUserList()
        // console.log(response)
        commit('getLoginProfile', response)
        return response
      } catch (error) {
        console.log(error)
      }
    },

    // 退出登录
    logout({ commit }) {
      commit('setToken', '')
      commit('getLoginProfile', '')
      Storage.remoteToken('token')
      Storage.remoteToken('userInfo')
    }
  }
}
