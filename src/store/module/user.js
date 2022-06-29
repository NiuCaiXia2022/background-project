// 登录接口
import LoginApi from '../../api/login'
// 封装的本地存储
import Storage from '../../utils/localstorage'

export default {
  namespaced: true,
  state: () => ({
    token: Storage.getToken('token') || ''
  }),
  mutations: {
    setToken(state, obj) {
      state.token = obj
      Storage.setToken('token', obj)
    }

    // getLoginProfile(state, data) {
    //   state.token = data
    // }
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
    }

    // 用户信息
    // async loginProfile({ commit }, payload) {
    //   try {
    //     const response = await LoginApi.getProfile(payload)
    //     console.log(response)
    //     commit('getLoginProfile', payload)
    //     return response
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
}
