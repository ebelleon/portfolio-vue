<template>
  <section id="home">
    <div class="homeBackground" />
    <div class="homeWrapper">
      <div class="homeText">
        <h1 class="homeTitle">
          {{ $t('shared.fullName') }}
        </h1>
        <h2 class="homeSubtitle">
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
.homeBackground {
  background: url(../assets/img/background.jpg) no-repeat center transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: calc(100% - 99px);
  top: 0;

  @include tablet {
    height: calc(100% - 46px);
  }
}

.homeWrapper {
  justify-content: center;
  display: flex;
  z-index: 0;

  @include tablet {
    justify-content: left;
  }
}

.homeText {
  padding: 1rem 10vw;
  text-align: center;
  background-color: #fff9;
}

.homeTitle {
  font-size: $titleMobile;
  font-weight: $light;
  margin: 0;

  @include tablet {
    font-size: $titleTablet;
  }
}

.homeSubtitle {
  font-size: $subtitleMobile;
  font-weight: $thin;
  margin: 0;

  @include tablet {
    font-size: $subtitleTablet;
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
