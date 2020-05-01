<template>
  <section id="contact">
    <h1 class="title">
      {{ $t('title.contact') }}
    </h1>
  </section>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/contact',
      de: '/kontakt'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.contact
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
