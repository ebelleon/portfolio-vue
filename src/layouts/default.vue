<template>
  <div>
    <Navigation v-if="!home" />
    <div class="container">
      <nuxt />
    </div>

    <client-only>
      <Cookiebanner />
    </client-only>
  </div>
</template>

<script>
import Navigation from '@/components/Header/Navigation.vue'
import Cookiebanner from '@/components/CookieBanner.vue'

export default {
  components: {
    Cookiebanner,
    Navigation
  },
  computed: {
    home() {
      return this.$route.path === this.localePath('index')
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/partials/vars';
@import 'assets/scss/partials/fontawesome-custom';
@import 'assets/scss/modules/media-queries';

.container {
  min-height: 100vh;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);

  @include tablet {
    font-size: 1em;
  }
}

.buttonGrey {
  border-radius: 4px;
  border: 1px solid $spelunking;
  color: $spelunking;
  display: inline-block;
  margin-top: 15px;
  min-width: 140px;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    background-color: $spelunking;
    color: $alabaster;
  }
}
</style>
