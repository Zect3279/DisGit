<template>
<v-app>
<v-app-bar
  color="teal darken-3"
  elevation="4"
  app
  dark
>
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
</v-app-bar>
<v-navigation-drawer
  v-model="drawer"
  app
  dark
>
  <v-list dense>
    <v-subheader>REPORTS</v-subheader>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
      mandatory
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  <v-divider></v-divider>
  <v-list
    nav
    dense
    v-if="selectedItem == 0"
  >
    <v-list-item-group
      color="primary"
      mandatory
    >
      <v-list-item
        v-for="(guild, i) in guildAdminData"
        :key="i"
      >
        <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
            <v-img v-if="guild.icon" :src="'https://cdn.discordapp.com/icons/' + guild.id + '/' + guild.icon + '.png'"></v-img>
          </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="guild.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  <v-list
    nav
    dense
    v-else-if="selectedItem == 1"
  >
    <v-list-group
      no-action
      sub-group
      v-for="category in categories"
      :key="category.id"
    >
      <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>mdi-folder</v-icon>
      </v-list-item-icon>
        <v-list-item-title v-text="category.name"></v-list-item-title>
      </template>

      <v-list-item
        v-for="channel in category.channels"
        :key="channel.id"
        link
      >
        <v-list-item-icon>
          <v-icon v-text="channel.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="channel.name"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</v-navigation-drawer>
<v-main>

<v-container>
  <v-row>
    <v-col>
      <h1>{{ editServer.name }}</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      align="center"
    >
      <v-btn-toggle
        v-model="toggle_one"
        shaped
        mandatory
        dark
      >
        <v-btn>
          <v-icon>mdi-pencil-outline</v-icon>
          Edit
        </v-btn>

        <v-btn>
          <v-icon>mdi-alert-circle-outline</v-icon>
          Issue
        </v-btn>

        <v-btn>
          <v-icon>mdi-source-pull</v-icon>
          Pull Request
        </v-btn>

        <v-btn>
          <v-icon>mdi-cog-outline</v-icon>
          Setting
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
<v-row>
<v-col v-if="toggle_one == 0">
  <Editor />
</v-col>
</v-row>
</v-container>
</v-main>
</v-app>
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'

export default {
  data: () => ({
    selectedItem: 1,
    drawer: null,
    items: [
      { title: 'Server', icon: 'mdi-server' },
      { title: 'Channel', icon: 'mdi-account-multiple' },
      { title: 'Role', icon: 'mdi-shield-account' }
    ],
    toggle_one: 0
  }),
  created: async function () {
    await this.getCC()
  },
  components: {
    Editor
  },
  computed: {
    // state から
    ...mapState(['userData']),
    ...mapState(['editServer']),
    ...mapState(['guildAdminData']),
    ...mapState(['categories'])
  },
  methods: {
    async getCC () {
      const guild = this.editServer
      console.log(guild)
      await this.$store.dispatch('getActionGuildChannels', { gid: guild.id })
    }
  }
}
</script>
