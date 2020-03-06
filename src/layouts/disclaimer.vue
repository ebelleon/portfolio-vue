<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';
@import 'layouts/modules/cookie-banner';

.content {
  font-size: 0.85em;
  font-weight: $light;
  padding: 0.5em 1em;
  word-break: break-word;

  a {
    color: #0645ad;
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

.optOut {
  font-weight: $bold;
  margin: 0.8em 0;
}

.cookieBanner {
  @include cookieBanner;
}

.closeContainer {
  @include closeContainer;
}
</style>
