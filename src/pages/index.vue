<template>
  <div>
    <header>
      <Navigation />
    </header>
    <div class="homeBackground">
      <section id="home">
        <div class="homeWrapper">
          <div class="homeText">
            <h1 class="homeTitle">{{ $t('shared.fullName') }}</h1>
            <h2 class="homeSubtitle">{{ $t('home.jobTitle') }}</h2>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Header/Navigation.vue'

export default {
  components: {
    Footer,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/partials/vars';
@import 'assets/scss/modules/media-queries';
@import 'assets/scss/modules/page-transition';

.homeBackground {
  background: url(../assets/img/background.jpg) no-repeat center transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: absolute;
  width: 100%;
  top: 0;
}

.homeWrapper {
  justify-content: center;
  color: $alabaster;
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
  font-size: 3.2em;
  font-weight: $light;
  margin: 0;

  @include tablet {
    font-size: 4em;
  }
}

.homeSubtitle {
  font-size: 1.2em;
  font-weight: $thin;
  margin: 0;

  @include tablet {
    font-size: $headlineDefault;
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

/deep/ .langDropdown {
  border-color: $alabaster;
}

/deep/ .langDropdownList {
  a {
    color: $alabaster;
  }

  li {
    color: $alabaster;
  }
}

/deep/ .hamburger__line-in {
  &::before,
  &::after {
    background-color: $alabaster;
  }
}
</style>
