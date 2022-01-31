<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to DisGit
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other DisGit developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-btn
          color="primary"
          elevation="6"
          large
          outlined
          @click="login"
          >
          <v-icon dark left>
            fab fa-discord
          </v-icon>
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const { clientId } = require('@/config.json')

export default {
  name: 'Home',
  data: () => ({
    //
  }),
  methods: {
    login () {
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&response_type=code&scope=identify`
    }
  }
}
</script>
