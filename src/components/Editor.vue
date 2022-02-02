<template>
<v-card
  flat
  tile
>
  <v-list>
    <v-list-group
      no-action
      sub-group
      v-for="([category, channels], i) in categories"
      :key="i"
    >
      <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>mdi-folder</v-icon>
      </v-list-item-icon>
        <v-list-item-title v-text="category"></v-list-item-title>
      </template>

      <v-list-item
        v-for="([channel, id, icon]) in channels"
        :key="id"
        link
      >
        <v-list-item-icon>
          <v-icon v-text="icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="channel"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    selectedItem: 0,
    categories: [
      ['None', [
        ['ルール', '879198780275191830', 'mdi-checkbox-multiple-marked-outline']
      ]],
      ['テキストチャンネル', [
        ['連絡', '879001203986554880', 'mdi-pound'],
        ['一般', '878998224554324009', 'mdi-pound'],
        ['チケット作成', '879613434109509652', 'mdi-pound'],
        ['企画', '879003107453972511', 'mdi-pound']
      ]],
      ['ボイスチャンネル', [
        ['VC', '878997568187678732', 'mdi-volume-high']
      ]]
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
