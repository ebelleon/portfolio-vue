<template>
  <div class="homeBackground">
    <navigation />
    <section id="home">
      <div class="homeWrapper">
        <div class="homeText">
          <h1 class="homeTitle">{{ $t('shared.fullName') }}</h1>
          <h2 class="homeSubtitle">{{ $t('home.jobTitle') }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navigation from '@/components/Navigation.vue'

export default {
  components: {
    navigation
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/partials/vars';
@import 'assets/style/modules/media-queries';
@import 'assets/style/modules/page-transition';

.homeBackground {
  background: url(../assets/img/background.jpg) no-repeat center transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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
</style>
