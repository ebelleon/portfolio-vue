<!-- eslint-disable vue-i18n/no-raw-text -->
<template>
  <div class="container">
    <div class="homeText">
      <logo />
      <h1 class="homeTitle">{{ $t('name') }}</h1>
      <h2 class="homeSubtitle">{{ $t('jobTitle') }}</h2>
      <div class="links">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--green"
        >
          GitHub
        </a>
        <nuxt-link class="button--grey" to="/impressum">{{
          $t('imprint')
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.homeText {
  // color: $alabaster;
  padding: 0 10vw;
}

.homeTitle {
  font-size: 3.2em;
  font-weight: $light;
  margin: 0;

  @include tablet {
    font-size: 4em;
  }
}

.homeSubtitle {
  font-size: 1.2em;
  font-weight: $thin;
  margin: 0;

  @include tablet {
    font-size: $headlineDefault;
  }
}

.title {
  color: $codGray;
  font-size: $headlineDefault;
  font-weight: $bold;
  margin: 0.83em 1em 1.66em;
  text-align: center;
  text-transform: uppercase;
}

.links {
  padding-top: 15px;
}
</style>
