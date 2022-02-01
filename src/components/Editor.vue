<template>
<v-card
  flat
  tile
>
  <v-list>
    <div
      v-for="([category, channels], i) in categories"
      :key="i"
    >
      <v-list-item v-if="!channels">
        <v-list-item-icon>
          <v-icon>mdi-folder-cancel</v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="category"></v-list-item-title>
      </v-list-item>

      <v-list-group
        v-else
        no-action
        sub-group
      >
        <template v-slot:activator>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
          <v-list-item-title v-text="category"></v-list-item-title>
        </template>

        <v-list-item
          v-for="([channel, icon], i) in channels"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="channel"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    categories: [
      ['テキストチャンネル', [['一般', 'mdi-pound']]],
      ['ボイスチャンネル', [['一般', 'mdi-volume-high']]]
    ]
  }),
  computed: {
    // state から
    ...mapState(['userData']),
    ...mapState(['editServer'])
  },
  methods: {
    //
  }
}
</script>
