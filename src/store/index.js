import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import musicUrl from './modules/musicUrl'
export default createStore({
  plugins: [createPersistedState({
    strorage:localStorage
  })],
  state: {

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    musicUrl
  }
})
