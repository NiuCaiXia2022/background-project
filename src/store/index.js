import { createStore } from 'vuex'
import user from './module/user'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user
  }
})
