<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

body {
  background-color: $transparent;
  font-family: $robotoSlab;
  font-style: normal;
  margin: 0;
  padding: 0;
}

.content {
  font-size: 0.85em;
  padding: 0.5em 1em;
  word-break: break-word;
  font-weight: $light;

  a {
    color: #0645ad;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 2.35em;

    li {
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
  }

  @include desktop {
    padding-left: 2em;
  }
}
</style>
