<template>
  <div>
    <navigation />
    <section id="home">
      <div class="container homeContainer">
        <div class="homeText">
          <h1 class="homeTitle">{{ $t('shared.fullName') }}</h1>
          <h2 class="homeSubtitle">{{ $t('home.jobTitle') }}</h2>
          <transition :duration="10">
            <nuxt-link class="buttonGrey" :to="localePath('privacy')">
              {{ $t('privacy.title') }}
            </nuxt-link>
          </transition>
          <nuxt-link class="buttonGrey" :to="localePath('imprint')">
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
import navigation from '@/components/Navigation.vue'

export default {
  components: {
    cookiebanner,
    navigation
  }
}
</script>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';
@import 'layouts/modules/page-transition';

.homeContainer {
  @include tablet {
    align-items: center;
    flex-direction: row;
    justify-content: left;
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
