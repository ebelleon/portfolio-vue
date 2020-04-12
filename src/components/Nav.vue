<template>
  <div class="globalMenuContainer">
    <div class="global-menu">
      <div class="global-menu__wrap">
        <nuxt-link
          v-for="(item, index) in links"
          :key="index"
          class="global-menu__item"
          :to="item.href"
        >
          <span>{{ item.i18n }}</span>
        </nuxt-link>
      </div>
    </div>
    <svg
      class="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg>
  </div>
</template>

<script>
export default {
  layout: 'burgermenu',
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
