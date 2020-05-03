<template>
  <div>
    <Navigation />
    <div class="container">
      <nuxt />
    </div>
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
}

body {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: $transparent;
  font: 300 0.85em $robotoSlab;
  margin: 0;
  overflow-x: hidden;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;
}

.title {
  align-self: center;
  font-size: $headlineDefault;
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

.strong {
  font-weight: $regular;
}

@keyframes slideDown {
  0% { transform: translateY(-150px) }
}

.container {
  color: $codGray;

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
// Contact Form Response Styles
.formResponse {
  border-radius: 5px;
  color: $codGray;
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
