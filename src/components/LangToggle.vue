<template>
  <div class="langDropdown">
    <label for="langDropdownToggle">
      <input
        id="langDropdownToggle"
        type="checkbox"
        class="langDropdownToggle"
      />
      <ul class="langDropdownList">
        <li>{{ $t('shared.chooseLang') }}</li>
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
@import 'layouts/partials/vars';
@import 'layouts/modules/dropdown';

.langDropdown {
  align-self: flex-end;
  border: 1px solid $codGray;
  border-radius: 3px;
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
