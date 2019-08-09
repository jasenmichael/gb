<template>
  <!-- Material form login -->
  <mdb-container>
    <div id="login">
      <form method="post" @submit.prevent="login">
        <p class="h4 text-center mb-4">Staff Login</p>
        <div class="grey-text">
          <mdb-input v-model="user" label="Username" icon="user" type="text" />
          <mdb-input
            v-model="password"
            label="Password"
            icon="lock"
            type="password"
          />
        </div>
        <div class="text-center">
          <mdb-btn>Login</mdb-btn>
        </div>
      </form>
    </div>
  </mdb-container>
  <!-- Material form login -->
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer } from 'mdbvue'
export default {
  middleware: 'loggedIn',
  components: {
    mdbInput,
    mdbBtn,
    mdbContainer
  },
  data() {
    return {
      user: null,
      password: null,
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.user,
            password: this.password
          }
        })
        const token = window.localStorage.getItem('auth._token.local')
        // eslint-disable-next-line
        console.log('token:', token)

        this.$router.push('/staff')
      } catch (e) {
        // eslint-disable-next-line
        await console.log(e.response.data.message)
        // this.error = e.response.data.message
      }
    }
    // async login() {
    //   // eslint-disable-next-line
    //   await console.log('wazzu')
    // }
  }
}
</script>

<style>
#login {
  max-width: 300px;
  padding-top: 3rem;
  margin: auto;
}
</style>
