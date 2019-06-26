import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    expireInSeconds: '',
    endSeconds: ''

  },
  getters: {
    getToken: state => state.accessToken

  },
  mutations: {

    updateState (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {

  }
})
