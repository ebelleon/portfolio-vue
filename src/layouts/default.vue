<template>
  <div>
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
  color: $codGray;
  font: 300 0.85em $robotoSlab;
  margin: 0;
  overflow-x: hidden;

  @include tablet {
    font-size: 1em;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
}

.headContainer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.77em;
}

.navbarContainer {
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
