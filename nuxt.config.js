export default {
  srcDir: 'src/',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Leon Ebel — Full Stack Developer — Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portfolio of Leon Ebel — Front-/ Backend Developer based in Munich, Germany.'
      },
      {
        name: 'keywords',
        content:
          'Leon Ebel, Leon, Ebel, developer, development, entwickler, web developer, web development, Portfolio, portfolio, München, Munich, Germany, Deutschland'
      },
      { name: 'language', content: 'DE' },
      { name: 'theme-color', content: '#FF7860' },
      { name: 'application-name', content: 'www.ebelleon.de' },
      { name: 'apple-mobile-web-app-title', content: 'www.ebelleon.de' },
      { name: 'apple-mobile-app-status-bar-style', content: '#FF7860' },
      {
        property: 'og:title',
        content: 'Leon Ebel — Full Stack Developer — Portfolio'
      },
      { property: 'og:url', content: 'https://www.ebelleon.de' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content:
          'This is the Portfolio of Leon Ebel. Currently working in Munich as a Full-Stack Web Developer.'
      },
      { property: 'og:image', content: 'https://www.ebelleon.de/_nuxt/img/654b8da.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/montserrat-v14-latin-700.woff2',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-300.woff2',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-regular.woff2',
        crossorigin: 'anonymous'
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/roboto-slab-v11-latin-700.woff2',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF7860' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/contactFormSubmit' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n
    'nuxt-i18n',
    // Doc: https://github.com/vaso2/nuxt-fontawesome#readme
    ['nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faLanguage', 'faAngleUp', 'faAngleDown']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faLinkedin', 'faGithub', 'faXing', 'faTwitter']
          }
        ]
      }
    ],
    // Doc: https://github.com/pimlie/nuxt-matomo
    ['nuxt-matomo',
      { matomoUrl: '//analytics.ebelleon.de/', siteId: 1 }
    ]
  ],
  styleResources: {
    scss: [
      '@/assets/scss/main.scss'
    ]
  },
  /*
   ** Translation module configuration
   */
  i18n: {
    locales: [
      {
        name: 'Deutsch',
        code: 'de',
        iso: 'de-DE'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US'
      }
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        de: require('./src/locales/de.json'),
        en: require('./src/locales/en.json')
      }
    }
  },
  /*
   ** Router definition
   */
  router: {
    middleware: 'matomo'
  },
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
    extend (config, ctx) {}
  }
}
