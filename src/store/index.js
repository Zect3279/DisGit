import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    guildAdminData: [],
    guildData: [],
    editServer: null
  },
  mutations: {
    setMutateDisData (state, payload) {
      // stateへ
      state.userData = payload.user
      state.guildData = payload.guild
      state.guildAdminData = []
      for (const guild of payload.guild) {
        if ((guild.permissions & 8) === 8) {
          state.guildAdminData.push(guild)
        }
      }
      // console.log(state.userData)
      // console.log(state.guildData)
    },
    setMutateEditServer (state, payload) {
      state.editServer = payload.EditServer
    }
  },
  actions: {
    setActionDisData (store, payload) {
      // Mutationsへ
      store.commit('setMutateDisData', payload)
    },
    setActionEditServer (store, payload) {
      store.commit('setMutateEditServer', payload)
    }
  },
  modules: {
  }
})
