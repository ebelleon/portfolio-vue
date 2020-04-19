<template>
  <div>
    <section id="aboutMe">
      <div class="aboutMeWrapper">
        <h1 class="title">{{ $t('title.aboutMe') }}</h1>
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
          {{ /* eslint-disable-next-line */ }}
          <span class="strong">{{ $t('shared.city') }}.</span>
          {{ /* eslint-disable-next-line */ }}
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
    </section>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/aboutme',
      de: '/uebermich'
    }
  },
  head() {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.aboutMe
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/style/partials/vars';
@import 'assets/style/modules/media-queries';
@import 'assets/style/modules/page-transition';

.aboutMeWrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
  hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;

  @include desktop {
    display: initial;
    margin-right: 10em;
    padding-bottom: initial;
  }
}

.aboutMePicture {
  align-self: center;
  border: 2px solid $codGray;
  border-left-style: dashed;
  border-radius: 50%;
  border-right-style: dashed;
  height: 150px;
  width: 150px;
  margin: 2em 4em 6em;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 5%;
  }

  @include desktop {
    float: left;
    margin-left: 9em;
    margin-top: 5.5em;
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
