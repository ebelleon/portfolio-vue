<template>
  <div v-if="isOpen" class="cookieBanner">
    <p>
      {{ $t('cookieBanner.consent') }}
      <nuxt-link :to="localePath('privacy') + '#cookies'">{{
        $t('shared.moreInfo')
      }}</nuxt-link>
    </p>
    <div class="closeContainer">
      <span class="close" @click="accept"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    if (!this.getCookieBannerState() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getCookieBannerState() {
      if (process.browser) {
        return localStorage.getItem('closedCookieBanner')
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('closedCookieBanner', 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/cookie-banner';

.cookieBanner {
  @include cookieBanner;
}

.closeContainer {
  @include closeContainer;
}
</style>
