<template>
  <div class="homeBackground">
    <section id="home">
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
  </div>
</template>

<style lang="scss" scoped>
.homeBackground {
  background: url(../assets/img/background.jpg) no-repeat center transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.homeWrapper {
  justify-content: center;
  display: flex;

  @include tablet {
    justify-content: left;
  }
}

.homeText {
  padding: 0 10vw;
  text-align: center;
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
