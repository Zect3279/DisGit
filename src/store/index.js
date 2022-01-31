import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    guildData: []
  },
  mutations: {
    setMutateDisData (state, payload) {
      // stateへ
      state.userData = payload.user
      state.guildData = []
      for (const guild of payload.guild) {
        if (guild.permissions === 2147483647) {
          state.guildData.push(guild)
        }
      }
      // console.log(state.userData)
      // console.log(state.guildData)
    }
  },
  actions: {
    setActionDisData (store, payload) {
      // Mutationsへ
      store.commit('setMutateDisData', payload)
    }
  },
  modules: {
  }
})
