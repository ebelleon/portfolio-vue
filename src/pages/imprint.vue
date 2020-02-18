<template>
  <div>
    <div class="content">
      <h1>{{ title }}</h1>
      <h3>Angaben gemäß § 5 TMG:</h3>

      <p>
        {{ fullName }}<br /><br />
        <a href="/#contact">{{ contactForm }}</a>
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </div>

    <client-only>
      <cookieBanner />
    </client-only>
  </div>
</template>

<script>
import CookieBanner from '@/components/CookieBanner.vue'
export default {
  components: {
    CookieBanner
  },
  props: {
    title: {
      type: String,
      default: 'Impressum'
    },
    fullName: {
      type: String,
      default: 'Leon Ebel'
    },
    contactForm: {
      type: String,
      default: 'Kontaktforumlar'
    }
  },
  head() {
    return {
      title: `${this.title} - Leon Ebel - Full Stack Developer`
    }
  }
}
</script>

<style lang="scss">
@import 'layouts/partials/vars';
@import 'layouts/modules/media-queries';

body {
  background-color: $transparent;
  font-family: $robotoSlab;
  font-style: normal;
  margin: 0;
  padding: 0;
}

.content {
  font-size: 0.85em;
  padding: 0.5em 1em;
  word-break: break-word;
  font-weight: $light;

  a {
    color: #0645ad;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 2.35em;

    li {
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
  }

  @include desktop {
    padding-left: 2em;
  }
}
</style>
