<template>
  <div>
    <div class="content">
      <h1>Impressum</h1>
      <h3>Angaben gem&auml;&szlig; &sect; 5 TMG:</h3>

      <p>
        Leon Ebel<br /><br />
        <a href="/#contact">Kontaktforumlar</a>
      </p>

      <h3>Haftung f&uuml;r Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
        gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen
        Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        &uuml;bermittelte oder gespeicherte fremde Informationen zu
        &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine
        rechtswidrige T&auml;tigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon
        unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem
        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>

      <h3>Haftung f&uuml;r Links</h3>
      <p>
        Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf
        deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
        f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
        F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
        wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
        Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
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
        Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
        kommerziellen Gebrauch gestattet.
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

    <div class="cookieBanner">
      <p>
        Diese Website verwendet Cookies. Durch die weitere Nutzung der Website
        stimmst du der <a href="/privacy/#cookies">Cookie-Nutzung</a> zu.
      </p>
      <div class="closeContainer">
        <span class="close"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'disclaimer-script',
          src: '/js/disclaimer.js',
          defer: true
        }
      ],
      title: 'Impressum - Leon Ebel - Full Stack Developer'
    }
  }
}
</script>

<style lang="scss">
@import 'layouts/partials/colors';
@import 'layouts/partials/typography';
@import 'layouts/modules/media-queries';
@import 'layouts/modules/cookie-banner';

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

.optOut {
  font-weight: $bold;
  margin: 0.8em 0;
}

.cookieBanner {
  @include cookieBanner;
}

.closeContainer {
  @include closeContainer;
}
</style>
