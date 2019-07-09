<template>
  <div>
    <NavBar />
    <nuxt class="main-content" />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://greenbriarschool.org' + this.$route.path
        }
      ]
    }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
@font-face {
  font-family: 'Roboto', sans-serif;
  font-display: auto;
  src: local('Arvo'),
    url(https://fonts.gstatic.com/s/arvo/v9/rC7kKhY-eUDY-ucISTIf5PesZW2xOQ-xsNqO47m55DA.woff2)
      format('woff2');
}
* {
  font-family: 'Roboto', sans-serif;
}
h1,
h2,
h5 {
  font-family: 'Domine', serif;
}
p {
  font-size: 110%;
}
</style>
