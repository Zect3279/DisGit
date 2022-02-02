<template>
<v-app>
<v-app-bar
  app
  color="#424242"
  dark
>
  <div class="d-flex align-center">
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />

    <v-img
      alt="Vuetify Name"
      class="shrink mt-1 hidden-sm-and-down"
      contain
      min-width="100"
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
      width="100"
    />
  </div>

  <v-spacer></v-spacer>

  <v-btn
    href="https://github.com/vuetifyjs/vuetify/releases/latest"
    target="_blank"
    text
  >
    <span class="mr-2">Latest Release</span>
    <v-icon>mdi-open-in-new</v-icon>
  </v-btn>
</v-app-bar>

<v-main>
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
</v-main>
</v-app>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    //
  }),
  methods: {
    login () {
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${process.env.VUE_APP_clientId}&redirect_uri=${process.env.VUE_APP_redirect}&response_type=code&scope=identify%20guilds`
    }
  }
}
</script>
