<template>
  <div class="content">
    <h1>{{ $t('privacy.privacyStatement') }}</h1>

    <h2>{{ $t('privacy.overviewHeadline') }}</h2>
    <h3>{{ $t('privacy.generalInfos') }}</h3>
    <p>{{ $t('privacy.generalInfosDesc') }}</p>

    <h3>{{ $t('privacy.dataCollection') }}</h3>
    <p class="strong">
      {{ $t('privacy.dataCollectionQuestionOne') }}
    </p>
    <p>{{ $t('privacy.dataCollectionAnswerOne') }}</p>
    <p class="strong">
      {{ $t('privacy.dataCollectionQuestionTwo') }}
    </p>
    <p>{{ $t('privacy.dataCollectionAnswerTwo') }}</p>
    <p>{{ $t('privacy.dataCollectionAnswerTwoOne') }}</p>
    <p class="strong">
      {{ $t('privacy.dataCollectionQuestionThree') }}
    </p>
    <p>{{ $t('privacy.dataCollectionAnswerThree') }}</p>
    <p class="strong">
      {{ $t('privacy.dataCollectionQuestionFour') }}
    </p>
    <p>{{ $t('privacy.dataCollectionAnswerFour') }}</p>
    <p>{{ $t('privacy.dataCollectionAnswerFourOne') }}</p>

    <h3>{{ $t('privacy.analytics') }}</h3>
    <p>{{ $t('privacy.analyticsDesc') }}</p>
    <p>{{ $t('privacy.analyticsDescOne') }}</p>

    <h2>{{ $t('privacy.mandatoryInfos') }}</h2>
    <h3>{{ $t('privacy.dataProtection') }}</h3>
    <p>{{ $t('privacy.dataProtectionDesc') }}</p>
    <p>{{ $t('privacy.dataProtectionDescOne') }}</p>
    <p>{{ $t('privacy.dataProtectionDescTwo') }}</p>

    <h3>{{ $t('privacy.responsibility') }}</h3>
    <p>{{ $t('privacy.responsibilityDesc') }}</p>
    <p>
      {{ $t('shared.fullName') }}<br>
      {{ $t('shared.street') }}<br>
      {{ $t('shared.zip') }} {{ $t('shared.city') }}
    </p>
    <p>
      {{ $t('shared.email') }}
      <a :href="`mailto:${$t('shared.emailAddress')}`"> {{ $t('shared.emailAddress') }}</a>
    </p>
    <p>{{ $t('privacy.responsibilityDescOne') }}</p>

    <h3>{{ $t('privacy.revocation') }}</h3>
    <p>{{ $t('privacy.revocationDesc') }}</p>

    <h3>{{ $t('privacy.objectionRight') }}</h3>
    <p class="strong">
      {{ $t('privacy.objectionRightDesc') }}
    </p>
    <p class="strong">
      {{ $t('privacy.objectionRightDescOne') }}
    </p>

    <h3>{{ $t('privacy.appealRight') }}</h3>
    <p>{{ $t('privacy.appealRightDesc') }}</p>

    <h3>{{ $t('privacy.transferabilityRight') }}</h3>
    <p>{{ $t('privacy.transferabilityRightDesc') }}</p>

    <h3>{{ $t('privacy.encryption') }}</h3>
    <p>{{ $t('privacy.encryptionDesc') }}</p>
    <p>{{ $t('privacy.encryptionDescOne') }}</p>

    <h3>{{ $t('privacy.infoBlockDeleteCorrect') }}</h3>
    <p>{{ $t('privacy.infoBlockDeleteCorrectDesc') }}</p>

    <h3>{{ $t('privacy.limitationRight') }}</h3>
    <p>{{ $t('privacy.limitationRightDesc') }}</p>
    <ul>
      <li>{{ $t('privacy.limitationRightDescOne') }}</li>
      <li>{{ $t('privacy.limitationRightDescTwo') }}</li>
      <li>{{ $t('privacy.limitationRightDescThree') }}</li>
      <li>{{ $t('privacy.limitationRightDescFour') }}</li>
    </ul>
    <p>{{ $t('privacy.limitationRightDescFive') }}</p>

    <!--  -->
    {{ /* eslint-disable vue-i18n/no-raw-text */ }}
    <h2 id="cookies">
      3. {{ $t('privacy.dataCollection') }}
    </h2>
    {{ /* eslint-disable vue-i18n/no-raw-text */ }}
    <h3>{{ $t('privacy.cookies') }}</h3>
    <p>{{ $t('privacy.cookiesDesc') }}</p>
    <p>{{ $t('privacy.cookiesDescOne') }}</p>
    <p>{{ $t('privacy.cookiesDescTwo') }}</p>
    <p>{{ $t('privacy.cookiesDescThree') }}</p>

    <h3>{{ $t('privacy.contactForm') }}</h3>
    <p>{{ $t('privacy.contactFormDesc') }}</p>
    <p>{{ $t('privacy.contactFormDescOne') }}</p>
    <p>{{ $t('privacy.contactFormDescTwo') }}</p>

    <h2>{{ $t('privacy.analysisTools') }}</h2>
    <h3>{{ $t('privacy.matomo') }}</h3>
    <p>{{ $t('privacy.matomoDesc') }}</p>
    <p>{{ $t('privacy.matomoDescOne') }}</p>
    <p>{{ $t('privacy.matomoDescTwo') }}</p>
    <p>{{ $t('privacy.matomoDescThree') }}</p>
    <p>{{ $t('privacy.matomoDescFour') }}</p>
    <div class="optOut">
      <input id="enableMatomo" type="radio" name="matomoPreference" checked>
      <label for="enableMatomo">{{ $t('privacy.matomoEnable') }}</label>
    </div>
    <div class="optOut">
      <input id="disableMatomo" type="radio" name="matomoPreference">
      <label for="disableMatomo">{{ $t('privacy.matomoDisable') }}</label>
    </div>

    <h2>{{ $t('privacy.tools') }}</h2>
    <h3>{{ $t('privacy.fonts') }}</h3>
    <p>{{ $t('privacy.fontsDesc') }}</p>
    <h2>{{ $t('privacy.openStreetMap') }}</h2>
    <p>{{ $t('privacy.openStreetMapDesc') }}</p>
    <p>{{ $t('privacy.openStreetMapDescOne') }}</p>
    <p>{{ $t('privacy.openStreetMapDescTwo') }}</p>
    <p>{{ $t('privacy.openStreetMapDescThree') }}</p>
    <h2>{{ $t('privacy.reCaptcha') }}</h2>
    <p>{{ $t('privacy.reCaptchaDesc') }}</p>
    <p>{{ $t('privacy.reCaptchaDescOne') }}</p>
    <p>{{ $t('privacy.reCaptchaDescTwo') }}</p>
    <p>{{ $t('privacy.reCaptchaDescThree') }}</p>
    <p>
      {{ $t('privacy.reCaptchaDescFour') }}
      <a
        href="https://policies.google.com/privacy?hl=de"
        target="_blank"
        rel="noopener nofollow"
      >
        {{ $t('privacy.googlePrivacyPolicy') }}
      </a>
      {{ /* eslint-disable vue-i18n/no-raw-text */ }}
      &amp;
      {{ /* eslint-disable vue-i18n/no-raw-text */ }}
      <a
        href="https://www.google.com/recaptcha/intro/android.html"
        target="_blank"
        rel="noopener nofollow"
      >
        {{ $t('privacy.googleReCaptchaIntro') }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/privacy',
      de: '/datenschutz'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].privacy.privacyStatement
      } - Leon Ebel - Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
.optOut {
  font-weight: $bold;
  margin: 0.8em 0;
}
</style>
