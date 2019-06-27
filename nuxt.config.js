import axios from 'axios'
require('dotenv').config()

export default {
  mode: 'universal',
  server: { port: '3030' },
  generate: {
    dir: 'dist',
    routes: function() {
      const config = {
        headers: {
          Authorization: 'Bearer ' + process.env.EVENTBRITE_KEY
        }
      }
      return axios
        .get('https://www.eventbriteapi.com/v3/users/me/events', config)
        .then(res => {
          const events = res.data.events.filter(
            event => event.status === 'live'
          )
          return events.map(event => {
            const liveEvents = {
              route:
                '/event/' + event.name.text.replace(/\s+/g, '-').toLowerCase(),
              // route: '/event/' + event.id,
              payload: event
            }
            return liveEvents
          })
        })
    }
  },
  dev: process.env.NODE_ENV !== 'production',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['bootstrap-css-only/css/bootstrap.min.css', 'mdbvue/build/css/mdb.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-scrollto.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 992,
          md: 1250,
          lg: Infinity
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ['mdbvue']
  }
}
