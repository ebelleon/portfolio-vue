<template>
  <div class="langDropdown">
    <button class="langDropdownButton" @click="toggleLangDropdown">
      <fa :icon="['fas', 'language']" /><p>{{ $t('shared.chooseLang') }}</p>
    </button>
    <transition name="expand" @enter="enterTransition" @after-enter="afterEnterTransition" @leave="leaveTransition">
      <div v-if="isOpen" class="langDropdownList" @click="toggleLangDropdown">
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <p>{{ locale.name }}</p>
        </nuxt-link>
      </div>
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
  padding: 1.25rem;
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
  color: $black;
  display: flex;
  font: inherit;
  padding: 0;
  outline: none;
}

.langDropdownList {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 0;
  width: 100%;

  a {
    color: $black;
    text-decoration: none;
    width: 100%;
  }

  p {
    font-weight: 300;
    padding-top: 1.25rem;
  }
}

.expand-enter-active,
.expand-leave-active {
  @include dropdownDefault;
}
</style>
