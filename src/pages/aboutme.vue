<template>
  <section id="aboutMe">
    <h1 class="title">
      {{ $t('title.aboutMe') }}
    </h1>
    <div class="aboutMeWrapper">
      <img
        class="aboutMePicture"
        src="~/assets/img/pic.jpg"
        alt="Leon Ebel"
      >
      <p class="aboutMeParagraph">
        {{ $t('aboutMe.myname') }}
        {{ /* eslint-disable-next-line */ }}
        <span class="semi-bold">{{ $t('aboutMe.developer') }},</span>
        {{ $t('aboutMe.specialized') }}
        <span class="semi-bold">{{ $t('aboutMe.webdev') }}</span>
        {{ $t('aboutMe.workinin') }}
        <span class="semi-bold">{{ $t('aboutMe.frontend') }}</span>
        {{ $t('aboutMe.aswellas') }}
        <span class="semi-bold">{{ $t('aboutMe.backend') }}</span>
        {{ $t('aboutMe.technologies') }}
        <br><br>
        {{ $t('aboutMe.since') }}
        {{ /* eslint-disable-next-line */ }}
        <span class="semi-bold">{{ $t('shared.city') }},</span>
        {{ $t('aboutMe.before') }}
        {{ $t('aboutMe.apprenticeship') }}
        <span class="semi-bold">{{ $t('aboutMe.apprenticeshipName') }}</span>
        {{ $t('aboutMe.completed') }}
        <br><br>
        <span class="semi-bold">{{ $t('aboutMe.started') }}</span>
        {{ $t('aboutMe.with') }}
        {{ $t('aboutMe.howStarted') }}
        <span class="semi-bold">{{ $t('aboutMe.computerSoftware') }}</span>
        {{ $t('aboutMe.whyStarted') }}
        <br><br>
        {{ $t('aboutMe.basically') }}
        <span class="semi-bold">{{ $t('aboutMe.prototypeDev') }}</span>
        {{ $t('aboutMe.whatIDo') }}
        <br><br>
        {{ $t('aboutMe.butOk') }}
        <span class="semi-bold">{{ $t('aboutMe.luckily') }}</span>
        {{ $t('aboutMe.notAll') }}
        <span class="semi-bold">{{ $t('aboutMe.besideJob') }}</span>
        {{ $t('aboutMe.whichAlso') }}
        <span class="semi-bold">{{ $t('aboutMe.hobby') }}</span>
        {{ $t('aboutMe.isAlso') }}
        <span class="semi-bold">{{ $t('aboutMe.sport') }}</span>
        {{ $t('aboutMe.important') }}
        {{ $t('aboutMe.watchSport') }}
        {{ $t('aboutMe.couchPotato') }}
        <span class="semi-bold">{{ $t('aboutMe.actively') }}</span>
        {{ $t('aboutMe.hobbys') }}
        <span class="semi-bold">{{ $t('aboutMe.handball') }}</span>
        {{ $t('aboutMe.hobbyHandball') }}
        <br><br>
        {{ $t('aboutMe.closing') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  nuxtI18n: {
    paths: {
      en: '/aboutme',
      de: '/uebermich'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.aboutMe
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutMeWrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
  hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;

  @include desktop {
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0;
  }
}

.aboutMePicture {
  align-self: center;
  border: 2px solid $black;
  border-left-style: dashed;
  border-radius: 50%;
  border-right-style: dashed;
  margin: 1rem 0 3rem 0;
  height: 145px;
  width: 150px;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 5%;
  }

  @include tablet {
    height: 160px;
    width: 165px;
  }

  @include desktop {
    margin: 0 5rem 0 0;
  }
}

.aboutMeParagraph {
  line-height: 2;
  padding: 0 2rem;
  text-align: justify;
  margin: 0;

  @include desktop {
    padding: 0;
    width: 70%;
  }
}
</style>
