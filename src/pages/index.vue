<template>
  <section id="home">
    <span class="background-picture" />
    <div class="home">
      <div class="home__text">
        <h1 class="home__text--title">
          {{ $t('shared.fullName') }}
        </h1>
        <h2 class="home__text--subtitle">
          {{ $t('home.jobTitle') }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.home {
  justify-content: center;
  display: flex;
  z-index: 0;

  @include tablet {
    justify-content: left;
  }

  &__text {
    padding: 1rem 10vw;
    text-align: center;
    background-color: #fff9;

    &--title {
      font-size: $titleMobile;
      font-weight: $light;
      margin: 0;

      @include tablet {
        font-size: $titleTablet;
      }
    }

    &--subtitle {
      font-size: $subtitleMobile;
      font-weight: $thin;
      margin: 0;

      @include tablet {
        font-size: $subtitleTablet;
      }
    }
  }
}

.background-picture {
  background: url(../assets/img/background.jpg) no-repeat center transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: calc(100% - 97px);
  top: 0;

  @include tablet {
    height: calc(100% - 44px);
  }
}

section {
  min-height: 75vh;
}

/deep/ .langDropdown {
  border-color: $white;
}

/deep/ .langDropdownList {
  a {
    color: $white;
  }

  li {
    color: $white;
  }
}

/deep/ .hamburger__line-in {
  &::before,
  &::after {
    background-color: $white;
  }
}
</style>
