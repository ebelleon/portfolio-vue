<template>
  <div>
    <div class="container">
      <navigation v-if="!home" />
      <nuxt />
    </div>

    <client-only>
      <cookiebanner />
    </client-only>
  </div>
</template>

<script>
import navigation from '@/components/Navigation.vue'
import cookiebanner from '@/components/CookieBanner.vue'

export default {
  components: {
    cookiebanner,
    navigation
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
@import 'assets/style/partials/vars';
@import 'assets/style/partials/fontawesome-custom';
@import 'assets/style/modules/media-queries';

.container {
  color: $codGray;
  font: 300 0.85em $robotoSlab;
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
