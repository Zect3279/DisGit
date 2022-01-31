<template>
<v-container>
  <v-row>
    <v-row cols="12">
      <h1>Dashboard</h1>
    </v-row>
  </v-row>
  <v-row class="grey lighten-3" style="height: 600px;">
    <v-col
      cols="12"
      sm="4"
      style="background-color: #b1b1b1"
      v-for="guild in guildAdminData"
      :key="guild.id"
    >
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{ guild.permissions }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ guild.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ guild.id }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
            <v-img v-if="guild.icon" :src="'https://cdn.discordapp.com/icons/' + guild.id + '/' + guild.icon + '.png'"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            text
            color="green accent-3"
            @click="disgit(guild)"
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Callback',
  data: () => ({
    //
  }),
  computed: {
    // state から
    ...mapState(['userData']),
    ...mapState(['guildData']),
    ...mapState(['guildAdminData'])
  },
  created: function () {
    //
  },
  methods: {
    disgit (guild) {
      this.$store.dispatch('setActionEditServer', { EditServer: guild })
      this.$router.push('/about')
    }
  }
}
</script>
