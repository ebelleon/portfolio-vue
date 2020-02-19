module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue-i18n/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.json'
    }
  }
}
