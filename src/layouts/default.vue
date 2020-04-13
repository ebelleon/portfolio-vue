<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';
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

  @include tablet {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
}

header {
  display: flex;
  justify-content: space-between;
}

.headContainer {
  align-items: center;
  margin: 0.77em;
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
</style>
