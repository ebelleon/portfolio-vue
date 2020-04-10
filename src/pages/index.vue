<template>
  <div>
    <header class="headContainer">
      <navbar />
      <langtoggle />
    </header>
    <section id="home">
      <div class="container">
        <div class="homeText">
          <h1 class="homeTitle">{{ $t('shared.fullName') }}</h1>
          <h2 class="homeSubtitle">{{ $t('home.jobTitle') }}</h2>
          <nuxt-link class="button--grey" :to="localePath('privacy')">
            {{ $t('privacy.title') }}
          </nuxt-link>
          <nuxt-link class="button--grey" :to="localePath('imprint')">
            {{ $t('imprint.title') }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <client-only>
      <cookiebanner />
    </client-only>
  </div>
</template>

<script>
import cookiebanner from '@/components/CookieBanner.vue'
import langtoggle from '@/components/LangToggle.vue'
import navbar from '@/components/NavBar.vue'

export default {
  components: {
    cookiebanner,
    langtoggle,
    navbar
  }
}
</script>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;

  @include tablet {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
}

.homeText {
  padding: 0 10vw;
  text-align: center;
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
</style>
