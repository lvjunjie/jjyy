import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: JSON.parse(sessionStorage.getItem('accessToken')) || '',
    expireInSeconds: JSON.parse(sessionStorage.getItem('expireInSeconds')) || '',
    endSeconds: JSON.parse(sessionStorage.getItem('endSeconds')) || '',
    userId: JSON.parse(sessionStorage.getItem('userId')) || '',
    elderId: JSON.parse(sessionStorage.getItem('elderId')) || ''
  },
  getters: {
    getToken: state => state.accessToken

  },
  mutations: {

    updateState (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
        sessionStorage.setItem(key, JSON.stringify(payload[key]))
      }
    },
    clearState (state) {
      for (const key in state) {
        state[key] = null
        sessionStorage.removeItem(key)
      }
    }
  },
  actions: {

  }
})
