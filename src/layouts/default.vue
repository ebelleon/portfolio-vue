<template>
  <div class="container">
    <Navigation />
    <nuxt />
    <Footer v-if="home" />

    <client-only>
      <CookieBanner />
    </client-only>
  </div>
</template>

<script>
import Navigation from '@/components/Header/Navigation.vue'
import Footer from '@/components/Footer.vue'
import CookieBanner from '@/components/CookieBanner.vue'

export default {
  components: {
    Navigation,
    Footer,
    CookieBanner
  },
  computed: {
    home () {
      return this.$route.path === this.localePath('index')
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  scroll-behavior: smooth;
  font-size: 10px;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: $transparent;
  font: 300 1.5rem $robotoSlab;
  margin: 0;
  overflow-x: hidden;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;
}

p {
  margin: 0;
}

.title {
  align-self: center;
  font-size: $subtitleTablet;
  font-weight: $bold;
  margin: 4rem 0 2rem;
  text-transform: uppercase;

  @include desktop {
    margin-bottom: 6rem;
  }
}

// disclaimer
.content {
  font-weight: $light;
  padding: 0.5em 1em;
  word-break: break-word;

  h1 {
    margin-top: 0;
  }

  a {
    color: $link;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 2.35em;
  }

  @include desktop {
    padding-left: 2em;
  }
}

.semi-bold {
  font-weight: $regular;
}

@keyframes slideDown {
  0% { transform: translateY(-150px) }
}

.buttonGrey {
  border-radius: 4px;
  border: 1px solid $darkGray;
  color: $darkGray;
  display: inline-block;
  margin-top: 15px;
  min-width: 140px;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    background-color: $darkGray;
    color: $white;
  }
}
// Contact Form Response Styles
.formResponse {
  border-radius: 5px;
  color: $black;
  font-weight: $bold;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 75%;

  @include tablet {
    width: 50%;
  }

  @include desktop {
    width: 25%;
  }
}
</style>
