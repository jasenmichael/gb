<template>
  <div>
    yo staff
    <br />
    <mdb-btn gradient="aqua" rounded @click="logout">Logout</mdb-btn>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue'
export default {
  components: { mdbBtn },
  middleware: 'auth',
  data() {
    return {
      token: this.getToken()
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log('token:', this.token)
  },
  methods: {
    async logout() {
      // eslint-disable-next-line
      await console.log('logging out...')
      await this.$auth.logout()
    },
    getToken() {
      if (process.browser)
        return window.localStorage.getItem('auth._token.local')
    }
  }
}
</script>
