<template>
  <nav class="navbar">
    <button class="hamburger hamburger--boring" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <ul class="navList">
      <li>
        <nuxt-link to="#home" class="active">{{ $t('home.home') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#aboutMe">{{ $t('home.aboutMe') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#experience">{{ $t('home.experience') }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#contact">{{ $t('home.contact') }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// TODO: add Sticky Nav & Hightlighted Nav
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.navbar {
  background-color: $flagstone;
  border-bottom: 2px solid $alabaster;
  display: inline-block;
  font-size: 1em;
  width: 100%;

  .active,
  a:hover {
    background-color: $alabaster;
    border-radius: 2px;
    color: $wildDove;
  }

  ul {
    list-style-type: none;
  }
}

.sticky {
  animation: slideDown 0.5s;
  position: fixed;
  top: 0;
  z-index: 1;
}

// Buger Menu Navbar
.navList {
  display: none;

  li {
    letter-spacing: 2px;
    margin: 0 5em 0.4em 0;
    padding-bottom: 1em;
    text-transform: uppercase;

    &:last-child {
      padding-bottom: 0;
    }
  }

  a {
    color: $alabaster;
    padding: 1px 4px 2px 6px;
    text-decoration: none;
  }

  @include tablet {
    display: inline-block;
    transition: all 0.3s ease;

    li {
      display: initial;
      margin: 0 0.4em;

      &:first-child {
        margin: 0;
      }
    }
  }
}

.hamburger {
  &.is-active {
    float: right;

    & ~ .navList {
      display: inline-block;
    }
  }

  @include tablet {
    display: none;
  }
}
</style>
