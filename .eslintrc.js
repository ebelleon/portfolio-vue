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
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:nuxt/recommended',
    'plugin:vue-i18n/recommended'
  ],
  // add your custom rules here
  rules: {},
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.json'
    }
  }
}
