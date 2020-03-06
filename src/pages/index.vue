<template>
  <div>
    <header>
      <navBar />
      <langToggle />
    </header>
    <div v-if="burgerMenuOpen" class="navList">
      <ul v-for="(item, index) in links" :key="index">
        <li>
          <nuxt-link :to="item.href">{{ item.i18n }}</nuxt-link>
        </li>
      </ul>
    </div>
    <section id="home">
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

    <client-only>
      <cookieBanner />
    </client-only>
  </div>
</template>

<script>
import CookieBanner from '@/components/CookieBanner.vue'
import LangToggle from '@/components/LangToggle.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    CookieBanner,
    LangToggle,
    NavBar
  }
}
</script>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  @include tablet {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
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
