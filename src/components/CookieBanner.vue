<template>
  <div v-if="isOpen" class="cookieBanner">
    <p>
      {{ $t('cookiePolicyText') }}
      <nuxt-link to="/privacy/#cookies">{{ $t('moreInfo') }}</nuxt-link>
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
@import 'layouts/modules/cookie-banner';

.cookieBanner {
  @include cookieBanner;
}

.closeContainer {
  @include closeContainer;
}
</style>
