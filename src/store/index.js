import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: null,
    guildAdminData: [],
    guildData: [],
    editServer: null,
    categories: {}
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
    },
    setMutateEditServer (state, payload) {
      state.editServer = payload.EditServer
    },
    async getMutateGuildChannels (state, payload) {
      console.log(payload.gid)
      fetch(`${process.env.VUE_APP_BOT_base_url}/channels?guild_id=${payload.gid}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.channels)
          const categories = {}
          for (const channel of data.channels) {
            switch (channel.type) {
              case 'category':
                categories[channel.id] = { id: channel.id, name: channel.name, channels: [] }
                break
              case 'text':
                categories[channel.category].channels.push(
                  { id: channel.id, name: channel.name, icon: 'mdi-pound' }
                )
                break
              case 'voice':
                categories[channel.category].channels.push(
                  { id: channel.id, name: channel.name, icon: 'mdi-volume-high' }
                )
                break
              default:
                break
            }
          }
          console.warn(categories)
          state.categories = categories
        })
    }
  },
  actions: {
    setActionDisData (store, payload) {
      // Mutationsへ
      store.commit('setMutateDisData', payload)
    },
    setActionEditServer (store, payload) {
      store.commit('setMutateEditServer', payload)
    },
    async getActionGuildChannels (store, payload) {
      await store.commit('getMutateGuildChannels', payload)
    }
  },
  modules: {
  }
})
