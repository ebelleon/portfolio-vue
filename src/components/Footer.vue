<template>
  <footer>
    <div class="socialMedia">
      <a
        v-for="(item, index) in linksSocialMedia"
        :key="index"
        :href="item.href"
        :title="item.title"
        :aria-label="item.label"
        target="_blank"
        rel="noopener nofollow"
      >
        <fa :icon="['fab', item.icon]"></fa>
      </a>
    </div>

    <div class="copyright">
      {{ /* eslint-disable vue-i18n/no-raw-text */ }}
      &copy; 2018 - <span>{{ currentYear }}</span> -
      {{ $t('shared.fullName') }}
      {{ /* eslint-disable vue-i18n/no-raw-text */ }}
    </div>

    <div class="disclaimer">
      <nuxt-link
        v-for="(item, index) in linksDisclaimer"
        :key="index"
        target="_self"
        :to="item.href"
        >{{ item.i18n }}</nuxt-link
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: null,
      linksSocialMedia: [
        {
          href: 'https://twitter.com/ImEberon',
          title: 'Twitter',
          label: 'Personal Twitter',
          icon: 'twitter'
        },
        {
          href: 'https://www.linkedin.com/in/ebelleon',
          title: 'LinkedIn',
          label: 'Personal LinkedIn',
          icon: 'linkedin'
        },
        {
          href: 'https://www.xing.com/profile/Leon_Ebel',
          title: 'Xing',
          label: 'Personal Xing',
          icon: 'xing'
        },
        {
          href: 'https://www.github.com/ebelleon',
          title: 'Github',
          label: 'Personal Github',
          icon: 'github'
        }
      ],
      linksDisclaimer: [
        { href: this.localePath('privacy'), i18n: this.$t('title.privacy') },
        { href: this.localePath('imprint'), i18n: this.$t('title.imprint') }
      ]
    }
  },
  created() {
    this.currentYear = new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/partials/vars';
@import 'assets/scss/modules/media-queries';

footer {
  background-color: $footer;
  bottom: 0;
  box-shadow: inset 0 1px 0 0 #4f4a4a, inset 0 2px 4px 0 $codGray;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.copyright,
.socialMedia,
.disclaimer {
  padding: 0.32em 0;

  a {
    color: $codGray;
    text-decoration: none;
    padding: 0 0.77em;

    &:hover {
      .fa-twitter {
        color: #1da1f2;
      }
      .fa-linkedin {
        color: #0077b5;
      }
      .fa-xing {
        color: #026466;
      }
      .fa-github {
        color: #24292e;
      }
    }
  }

  @include tablet {
    display: inline-block;
    width: 33%;

    a {
      padding: 0 0.385em;
    }
  }
}
</style>
