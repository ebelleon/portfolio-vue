<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import 'layouts/partials/vars';

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
  font: 300 1em $robotoSlab;
  margin: 0;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

section {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
}

.headContainer {
  align-items: center;
  margin: 0.77em;
}

.button--grey {
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  display: inline-block;
  margin-left: 15px;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: #35495e;
    color: #fff;
  }
}
</style>
