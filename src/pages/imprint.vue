<template>
  <div>
    <langToggle />
    <div class="content">
      <h1>{{ $t('imprint') }}</h1>
      <h3>{{ $t('liabilityHeadline') }}</h3>

      <p>
        {{ fullName }}<br /><br />
        <nuxt-link to="/#contact">{{ $t('contactForm') }}</nuxt-link>
      </p>

      <h3>{{ $t('liabilityContent') }}</h3>
      <p>{{ $t('liabilityContentText') }}</p>
      <p>{{ $t('liabilityContentTextTwo') }}</p>

      <h3>{{ $t('liabilityLinks') }}</h3>
      <p>{{ $t('liabilityLinksText') }}</p>
      <p>{{ $t('liabilityLinksTextTwo') }}</p>

      <h3>{{ $t('copyright') }}</h3>
      <p>{{ $t('copyrightText') }}</p>
      <p>{{ $t('copyrightTextTwo') }}</p>
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
  props: {
    fullName: {
      type: String,
      default: 'Leon Ebel'
    }
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
        this.$i18n.messages[this.$i18n.locale].imprint
      } - Leon Ebel - Full Stack Developer`
    }
  }
}
</script>
