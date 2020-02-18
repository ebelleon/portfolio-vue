<template>
  <div v-if="isOpen" class="cookieBanner">
    <p>
      Diese Website verwendet Cookies. Durch die weitere Nutzung der Website
      stimmst du der
      <nuxt-link to="/privacy/#cookies">Cookie-Nutzung</nuxt-link> zu.
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
        return localStorage.getItem('closedCookieBanner', true)
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('closedCookieBanner', true)
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
