<template>
<v-app>
<v-main>
  <p>
    Authorizing...<br>
    Please wait for a moment...
  </p>
</v-main>
</v-app>
</template>

<script>
export default {
  name: 'Callback',
  created: function () {
    this.oauth()
  },
  methods: {
    async oauth () {
      if (this.$route.query.code) {
        try {
          // this.$cookies.remove('userData')
          const code = this.$route.query.code
          const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
              client_id: process.env.VUE_APP_clientId,
              client_secret: process.env.VUE_APP_clientSecret,
              code,
              grant_type: 'authorization_code',
              redirect_uri: `http://localhost:${process.env.VUE_APP_port}/callback`,
              scope: 'identify'
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          const oauthData = await oauthResult.json()
          console.log(oauthData)
          const userResult = await fetch('https://discord.com/api/users/@me', {
            headers: {
              authorization: `${oauthData.token_type} ${oauthData.access_token}`
            }
          })
          const guildResult = await fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
              authorization: `${oauthData.token_type} ${oauthData.access_token}`
            }
          })
          const userData = await userResult.json()
          const guildData = await guildResult.json()

          console.log(userData)
          console.log(guildData)

          this.$store.dispatch('setActionDisData', { user: userData, guild: guildData })
          this.$router.push('/dashboard')
        } catch (error) {
          // NOTE: An unauthorized token will not throw an error;
          // it will return a 401 Unauthorized response in the try block above
          console.error(error)
        }
      }
    }
  }
}
</script>
