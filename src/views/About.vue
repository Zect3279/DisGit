<template>
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
</template>

<script>
import { mapState } from 'vuex'
import Editor from '@/components/Editor.vue'

export default {
  data: () => ({
    toggle_one: 0
  }),
  components: {
    Editor
  },
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
