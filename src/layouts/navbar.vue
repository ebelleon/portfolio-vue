<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.navbarContainer {
  display: flex;
  font-size: 1em;

  a {
    border-radius: 2px;
    color: $codGray;
    letter-spacing: 2px;
    margin-right: 0.5em;
    padding: 1px 4px 2px 6px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      background-color: $spelunking;
      color: $alabaster;
    }
  }
}
</style>
