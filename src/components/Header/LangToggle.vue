<template>
  <div class="langDropdown">
    <label for="langDropdownToggle">
      <input
        id="langDropdownToggle"
        type="checkbox"
        class="langDropdownToggle"
      />
      <ul class="langDropdownList">
        <li><fa :icon="['fas', 'language']" />{{ $t('shared.chooseLang') }}</li>
        <li v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)">{{
            locale.name
          }}</nuxt-link>
        </li>
      </ul>
    </label>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/partials/vars';
@import 'assets/scss/modules/dropdown';

.langDropdown {
  border-radius: 3px;
  border: 1px solid $codGray;
  text-align: center;
  z-index: 110;

  label {
    margin: 0;
  }
}

.langDropdownList {
  @include dropdownDefault;
  cursor: pointer;
  list-style-type: none;
  padding: 0;

  a {
    color: $codGray;
    list-style-type: none;
    text-decoration: none;
    padding: 0.6em 3.5em;
  }

  li {
    color: $codGray;
    font-weight: $thin;
    line-height: 40px;
  }
}

.langDropdownToggle {
  float: left;
  margin: -1em;
  opacity: 0;

  &:checked ~ .langDropdownList {
    max-height: 122px;
  }

  &:not(:checked) ~ .langDropdownList {
    max-height: 40px;
  }
}
</style>
