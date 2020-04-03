<template>
  <nav class="navbarContainer">
    <nuxt-link v-for="(item, index) in links" :key="index" :to="item.href">
      <span>{{ item.i18n }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  layout: 'navbar',
  data() {
    return {
      links: [
        { href: '#home', i18n: this.$t('home.home') },
        { href: '#aboutMe', i18n: this.$t('home.aboutMe') },
        { href: '#experience', i18n: this.$t('home.experience') },
        { href: '#contact', i18n: this.$t('home.contact') }
      ]
    }
  }
}
</script>
