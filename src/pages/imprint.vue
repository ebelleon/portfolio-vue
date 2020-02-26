<template>
  <div>
    <langToggle />
    <div class="content">
      <h1>{{ $t('imprint.title') }}</h1>
      <h3>{{ $t('imprint.liabilityHeadline') }}</h3>

      <p>
        {{ $t('shared.fullName') }}<br /><br />
        <nuxt-link to="/#contact">{{ $t('shared.contactForm') }}</nuxt-link>
      </p>

      <h3>{{ $t('imprint.liabilityContent') }}</h3>
      <p>{{ $t('imprint.liabilityContentDesc') }}</p>
      <p>{{ $t('imprint.liabilityContentDescTwo') }}</p>

      <h3>{{ $t('imprint.liabilityLinks') }}</h3>
      <p>{{ $t('imprint.liabilityLinksDesc') }}</p>
      <p>{{ $t('imprint.liabilityLinksDescTwo') }}</p>

      <h3>{{ $t('imprint.copyright') }}</h3>
      <p>{{ $t('imprint.copyrightDesc') }}</p>
      <p>{{ $t('imprint.copyrightDescTwo') }}</p>
    </div>

    <client-only>
      <cookieBanner />
    </client-only>
  </div>
</template>

<script>
import CookieBanner from '@/components/CookieBanner.vue'
import LangToggle from '@/components/LangToggle.vue'
export default {
  layout: 'imprint',
  components: {
    CookieBanner,
    LangToggle
  },
  nuxtI18n: {
    paths: {
      en: '/imprint',
      de: '/impressum'
    }
  },
  head() {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].imprint.title
      } - Leon Ebel - Full Stack Developer`
    }
  }
}
</script>
