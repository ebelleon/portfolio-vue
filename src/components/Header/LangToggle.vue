<template>
  <div class="langDropdown">
    <button class="langDropdownButton" @click="toggleLangDropdown">
      <fa :icon="['fas', 'language']" /><p>{{ $t('shared.chooseLang') }}</p>
    </button>
    <transition name="expand" @enter="enterTransition" @after-enter="afterEnterTransition" @leave="leaveTransition">
      <ul v-if="isOpen" class="langDropdownList">
        <li v-for="locale in availableLocales" :key="locale.code" @click="toggleLangDropdown">
          <nuxt-link :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </nuxt-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    toggleLangDropdown () {
      this.isOpen = !this.isOpen
    },
    enterTransition (el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnterTransition (el) {
      el.style.height = 'auto'
    },
    leaveTransition (el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/dropdown';

.langDropdown {
  border-radius: 3px;
  border: 1px solid $black;
  cursor: pointer;
  text-align: center;
  padding: 0 1rem;
  z-index: 1;

  label {
    margin: 0;
  }
}

.langDropdownButton {
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0;
  outline: none;
}

.langDropdownList {
  list-style-type: none;
  padding: 0;
  margin: 0;

  a {
    color: $black;
    list-style-type: none;
    text-decoration: none;
  }

  li {
    color: $black;
    font-weight: $thin;
    line-height: 40px;
  }
}

.expand-enter-active,
.expand-leave-active {
  @include dropdownDefault;
}
</style>
