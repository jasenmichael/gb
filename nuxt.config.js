import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import axios from 'axios'
require('dotenv').config()

export default {
  // target: 'static',
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
      return (
        axios
          // .get('https://www.eventbriteapi.com/v3/users/me/events', config)
          .get(
            'https://www.eventbriteapi.com/v3/organizations/312706594048/events',
            config
          )
          .then(res => {
            const events = res.data.events.filter(
              event => event.status === 'live' || 'completed'
            )
            return events.map(event => {
              const liveEvents = {
                route:
                  '/event/' +
                  event.name.text.replace(/\s+/g, '-').toLowerCase(),
                // route: '/event/' + event.id,
                payload: event
              }
              return liveEvents
            })
          })
      )
    }
  },
  env: {
    contactApi: process.env.CONTACT_API_URL,
    // apiUrl: process.env.API_URL || '/.netlify/functions/',
    netlifyFunctionsApiUrl:
      process.env.LOCAL || process.env.NODE_ENV === 'production'
        ? '/.netlify/functions/'
        : 'http://localhost:9000/.netlify/functions/'
  },
  dev: process.env.NODE_ENV !== 'production',
  router: {
    base: (process.env.NODE_ENV === 'production' && process.env.BASE_URL) || '/'
  },
  head: {
    titleTemplate: '%s - Greenbriar Community School',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Founded in 1969, Greenbriar Community School is a model for sustainable community living by consensus decision making.'
      }
    ],
    script: [
      {
        src:
          'https://maps.google.com/maps/api/js?key=' +
          process.env.GOOGLE_MAPS_API_KEY,
        async: true,
        defer: true
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
    ]
  },
  loading: { color: '#fff' },
  css: ['bootstrap-css-only/css/bootstrap.min.css', 'mdbvue/build/css/mdb.css'],
  plugins: ['~plugins/vue-scrollto.js', '~/plugins/vue-lazysizes.client.js'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/robots',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/recaptcha',
    '@nuxtjs/auth',
    // '@nuxtjs/sitemap',
    // 'nuxt-purgecss',
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
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.STRAPI_URL + '/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: false,
          logout: false
        }
      }
    }
  },
  recaptcha: {
    hideBadge: false,
    siteKey: process.env.RECAPTCHA_KEY,
    version: 2
  },
  // purgeCSS: {
  //   whitelist: ['']
  // },
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
  robots: {
    UserAgent: '*',
    Disallow: '/staff',
    Disallow: '/login'
  },
  sitemap: {
    hostname: 'https://greenbriarschool.org',
    generate: true,
    gzip: true,
    filter({ routes }) {
      return routes.map(route => {
        if (!route.url.endsWith('.xml') && !route.url.endsWith('/')) {
          route.url = `${route.url}/`
        }
        return route
      })
    }
  },
  // axios: {
  //   baseURL: process.env.STRAPI_URL || 'http://localhost:1337'
  // },
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
    extractCSS: process.env.NODE_ENV === 'production',
    // eslint-disable-next-line prettier/prettier
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
      if (isDev && isClient) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }
    },
    transpile: ['mdbvue']
  }
}
