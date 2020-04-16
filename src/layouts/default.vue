<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/partials/fontawesome-custom';
@import 'layouts/modules/media-queries';

html,
body {
  min-height: 100%;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: $transparent;
  margin: 0;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  color: $codGray;
  font: 300 0.85em $robotoSlab;
  min-height: 100vh;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);

  @include tablet {
    font-size: 1em;
  }
}

.headWrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.77em;
}

.navbarWrapper {
  display: flex;

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

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
}

.buttonGrey {
  border-radius: 4px;
  border: 1px solid $spelunking;
  color: $spelunking;
  display: inline-block;
  margin-top: 15px;
  min-width: 140px;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    background-color: $spelunking;
    color: $alabaster;
  }
}

.title {
  color: $codGray;
  font-size: $headlineDefault;
  font-weight: $bold;
  margin: 0.83em 1em 1.66em;
  text-align: center;
  text-transform: uppercase;
}

.strong {
  font-weight: $regular;
}
</style>
