<template>
  <div>
    <navigation />
    <section id="aboutMe">
      <div class="container">
        <h1 class="title">{{ $t('home.aboutMe') }}</h1>
        <div class="aboutMeWrapper">
          <img
            class="aboutMePicture"
            src="~/assets/img/pic.jpg"
            alt="Leon Ebel"
          />
          <p class="aboutMeParagraph">
            {{ $t('aboutMe.myname') }}
            <span class="strong">{{ $t('aboutMe.developer') }}</span>
            {{ $t('aboutMe.specialized') }}
            <span class="strong">{{ $t('aboutMe.webdev') }}</span>
            {{ $t('aboutMe.workinin') }}
            <span class="strong">{{ $t('aboutMe.frontend') }}</span>
            {{ $t('aboutMe.aswellas') }}
            <span class="strong">{{ $t('aboutMe.backend') }}</span>
            {{ $t('aboutMe.technologies') }}
          </p>
          <p class="aboutMeParagraph">
            {{ $t('aboutMe.since') }}
            <!-- eslint-disable-next-line -->
            <span class="strong">{{ $t('shared.city') }}.</span>
            <!-- eslint-disable-next-line -->
            {{ $t('aboutMe.apprenticeship') }}
            <span class="strong">{{ $t('aboutMe.apprenticeshipName') }}</span>
            {{ $t('aboutMe.completed') }}
          </p>
          <p class="aboutMeParagraph">
            {{ $t('aboutMe.my') }}
            <span class="strong">{{ $t('aboutMe.interest') }}</span>
            {{ $t('aboutMe.began') }}
          </p>
          <p class="aboutMeParagraph">
            {{ $t('aboutMe.whenIm') }}
            <span class="strong">{{ $t('aboutMe.notDevelop') }}</span>
            {{ $t('aboutMe.orAt') }}
            <span class="strong">{{ $t('aboutMe.work') }}</span>
            {{ $t('aboutMe.iWillBe') }}
            <span class="strong">{{ $t('aboutMe.sport') }}</span>
            {{ $t('aboutMe.orInFront') }}
            <span class="strong">{{ $t('aboutMe.tv') }}</span>
          </p>
        </div>
      </div>
    </section>
    <client-only>
      <cookiebanner />
    </client-only>
  </div>
</template>

<script>
import cookiebanner from '@/components/CookieBanner.vue'
import navigation from '@/components/Navigation.vue'

export default {
  components: {
    cookiebanner,
    navigation
  },
  nuxtI18n: {
    paths: {
      en: '/aboutme',
      de: '/uebermich'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

.aboutMeWrapper {
  hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;

  @include desktop {
    margin-right: 10em;
  }
}

.aboutMePicture {
  border: 2px solid $codGray;
  border-left-style: dashed;
  border-right-style: dashed;
  border-radius: 50%;
  margin: 4em 6em;
  height: 150px;
  width: 150px;

  @include desktop {
    float: left;
    margin: 3em 2.25em 10em 9em;
    height: 164px;
    width: 164px;
  }
}

.aboutMeParagraph {
  line-height: 2;
  margin: 0;
  padding: 0.77em 1.66em;
  text-align: justify;
}
</style>
