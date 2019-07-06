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
  // functionsUrls: {
  //   local: 'http://localhost:9000/',
  //   netlify: '/.netlify/functions/'
  // },
  env: {
    contactApi: process.env.CONTACT_API_URL,
    contactApiTest:
      process.env.LOCAL || process.env.NODE_ENV === 'production'
        ? '/.netlify/functions/'
        : 'http://localhost:9000/.netlify/functions/'
  },
  dev: process.env.NODE_ENV !== 'production',
  router: {
    // base: process.env.NODE_ENV !== 'production' ? '/' : process.env.BASE_URL || '/'
    base: (process.env.NODE_ENV === 'production' && process.env.BASE_URL) || '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Greenbriar Community School',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Celebrating 50 years of educating sustainability through communal living'
      }
    ],
    script: [
      {
        src:
          'https://maps.google.com/maps/api/js?key=' +
          process.env.GOOGLE_MAPS_API_KEY,
        async: true
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
    ]
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
  plugins: ['~plugins/vue-scrollto.js', '~/plugins/vue-lazysizes.client.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/robots',
    '@bazzite/nuxt-optimized-images',
    // '@nuxtjs/sitemap',
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
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  robots: { UserAgent: '*' },
  sitemap: {
    hostname: 'https://greenbriarschool.org'
    // gzip: true
    // filter({ routes }) {
    //   return routes.map(route => {
    //     if (!route.url.endsWith('.xml') && !route.url.endsWith('/')) {
    //       route.url = `${route.url}/`
    //     }
    //     return route
    //   })
    // }
  },
  axios: {},
  // pwa config
  manifest: {
    short_name: 'GB School',
    name: process.env.npm_package_title,
    start_url: '/',
    // background_color: '#303030',
    // theme_color: '#263238',
    display: 'standalone',
    lang: 'en'
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line prettier/prettier
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    transpile: ['mdbvue']
  }
}
