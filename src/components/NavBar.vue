<template>
  <div>
    <div>
      <nav class="navbar">
        <button
          class="hamburger hamburger--boring"
          type="button"
          @click="toggleBurgerMenu()"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </div>
    <div v-if="burgerMenuOpen" class="navList">
      <ul v-for="(item, index) in links" :key="index">
        <li>
          <nuxt-link :to="item.href">{{ item.i18n }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO: add Sticky Nav & Hightlighted Nav
export default {
  data() {
    return {
      links: [
        { href: '#home', i18n: this.$t('home.home') },
        { href: '#aboutMe', i18n: this.$t('home.aboutMe') },
        { href: '#experience', i18n: this.$t('home.experience') },
        { href: '#contact', i18n: this.$t('home.contact') }
      ],
      burgerMenuOpen: false
    }
  },
  methods: {
    toggleBurgerMenu() {
      const hamburger = this.$el.querySelector('.hamburger')
      hamburger.classList.contains('is-active')
        ? hamburger.classList.remove('is-active')
        : hamburger.classList.toggle('is-active')
      this.burgerMenuOpen = !this.burgerMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';
@import 'layouts/vendor/burger_menu/hamburgers';

.navbar {
  // background-color: $flagstone;
  // border-bottom: 2px solid $alabaster;
  // display: inline-block;
  font-size: 1em;
  width: 100%;

  .active,
  a:hover {
    background-color: $alabaster;
    border-radius: 2px;
    color: $wildDove;
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
  li {
    letter-spacing: 2px;
    margin: 0 5em 0.4em 0;
    padding-bottom: 1em;
    text-transform: uppercase;

    &:last-child {
      padding-bottom: 0;
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    color: $codGray;
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
</style>
