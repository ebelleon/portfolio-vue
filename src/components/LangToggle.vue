<template>
  <div class="langDropdown">
    <label for="langDropdownToggle">
      <input
        id="langDropdownToggle"
        type="checkbox"
        class="langDropdownToggle"
      />
      <ul class="langDropdownList">
        <li>{{ $t('chooseLang') }}</li>
        <!-- eslint-disable vue-i18n/no-raw-text -->
        <li><nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link></li>
        <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
        <!-- eslint-enable vue-i18n/no-raw-text -->
      </ul>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/dropdown';

.langDropdown {
  border: 1px solid $codGray;
  border-radius: 3px;
  float: right;
  margin: 0.77em;
  text-align: center;

  label {
    margin: 0;
  }
}

.langDropdownList {
  cursor: pointer;
  list-style-type: none;
  @include dropdownDefault;
  padding: 0;

  a {
    color: $codGray;
    text-decoration: none;
    list-style-type: none;
  }

  li {
    color: $codGray;
    font-weight: $thin;
    line-height: 40px;
    padding: 0 0.88235em;
  }
}

.langDropdownToggle {
  float: left;
  opacity: 0;
  margin: -1em;

  &:checked ~ .langDropdownList {
    max-height: 122px;
  }

  &:not(:checked) ~ .langDropdownList {
    max-height: 40px;
  }
}
</style>
