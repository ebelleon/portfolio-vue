<template>
  <div>
    <section id="home">
      <langToggle />
      <div class="container">
        <div class="homeText">
          <h1 class="homeTitle">{{ $t('shared.fullName') }}</h1>
          <h2 class="homeSubtitle">{{ $t('home.jobTitle') }}</h2>
          <div class="links">
            <nuxt-link class="button--grey" :to="localePath('privacy')">
              {{ $t('privacy.title') }}
            </nuxt-link>
            <nuxt-link class="button--grey" :to="localePath('imprint')">
              {{ $t('imprint.title') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <navBar />
  </div>
</template>

<script>
import LangToggle from '@/components/LangToggle.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    LangToggle,
    NavBar
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
}

.homeText {
  // color: $alabaster;
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

.links {
  padding-top: 15px;
}
</style>
