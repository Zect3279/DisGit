<template>
  <div class="about">
    <h1>Hello {{ userData.username }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Callback',
  data: () => ({
    userData: null
  }),
  created: function () {
    this.getUser()
  },
  methods: {
    getUser () {
      this.userData = this.$cookies.get('userData')
    }
  }
}
</script>
