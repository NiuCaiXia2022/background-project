// 登录接口
import LoginApi from '../../api/login'
// 封装的本地存储
import Storage from '../../utils/localstorage'

export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, obj) {
      state.token = obj
      Storage.setToken(obj)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const reponse = await LoginApi.getLogin(payload)
      console.log(reponse.data.data.token)
      commit('setToken', reponse.data.data.token)
    }
  }
}
