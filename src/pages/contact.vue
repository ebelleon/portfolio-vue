<template>
  <section id="contact">
    <h1 class="title">
      {{ $t("title.contact") }}
    </h1>

    <form name="contactForm" class="contactForm">
      <input
        type="text"
        name="name"
        :title="$t('contact.nameTitle')"
        class="contactInput"
        placeholder="Name*"
        required
      >
      <input
        type="email"
        name="email"
        :title="$t('contact.emailTitle')"
        class="contactInput"
        placeholder="E-Mail*"
        required
      >
      <input
        id="honeypot"
        type="text"
        name="honeypot"
        value=""
        style="opacity: 0; position: absolute;"
        tabindex="-1"
        autocomplete="off"
      >
      <button type="button" class="valMessage" :title="$t('contact.validateTitle')" tabindex="-1" @click="valMessage" />
      <textarea name="message" class="contactMessage" :title="$t('contact.messageTitle')" :placeholder="$t('contact.messagePlaceholder')" required />
      <br>
      <input type="submit" class="contactSubmit" name="submit" :value="$t('contact.send')" @click="submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  nuxtI18n: {
    paths: {
      en: '/contact',
      de: '/kontakt'
    }
  },
  methods: {
    submit () {
      return this.submitContactForm()
    },
    valMessage () {
      if (this.$suggestedEmail()) { document.querySelector('[name="email"]').value = this.$suggestedEmail() }
      document.querySelector('[name="email"]').focus()
      this.$gatherDataAndCheck()
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
@import '~@/assets/scss/modules/input-field';

.title {
  @include desktop {
    margin-bottom: 2rem;
  }
}

.contactForm {
  text-align: center;
  margin: 0;
}

.contactInput {
  @extend %inputField;

  @include desktop {
    width: 50%;
  }
}

.valMessage {
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: $trackAndField;
  display: none;
  font-family: inherit;
  margin-left: 1.5em;
  text-align: left;
  text-decoration: underline;
  width: 75%;

  @include desktop {
    width: 50%;
  }
}

.contactMessage {
  @extend %inputField;
  height: 370px;

  @include desktop {
    width: 50%;
  }
}

.contactSubmit {
  @extend %inputField;
  background-color: transparent;
  border: 1px solid $black;
  color: $black;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover:enabled {
    background-color: $gray;
    border-color: $gray;
    color: $white;
    cursor: pointer;
  }

  @include tablet {
    width: 50%;
  }

  @include desktop {
    width: 25%;
  }
}
</style>
