<template>
<v-card
  flat
  tile
>
  <v-list>
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
</v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    selectedItem: 0
  }),
  computed: {
    // state から
    ...mapState(['userData']),
    ...mapState(['editServer']),
    ...mapState(['categories'])
  },
  methods: {
    //
  }
}
</script>
