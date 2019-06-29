<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}
h1,
h2,
h5 {
  font-family: 'Domine', serif;
}
p {
  font-size: 115%;
}
</style>
