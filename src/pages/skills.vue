<template>
  <section id="skills">
    <h1 class="title">
      {{ $t('title.experience') }}
    </h1>

    <div class="employer-wrapper">
      <h2 class="employer-wrapper__title">
        {{ $t('skills.employers') }}
      </h2>

      <div class="employer-wrapper__content">
        <a href="https://www.jochen-schweizer.de" target="_blank" rel="noopener nofollow" class="employer-wrapper__link">
          <svg class="employer-wrapper__link--picture">
            <use xlink:href="../assets/img/logos.svg#jochen-schweizer-without-slogan" />
          </svg>
        </a>
        {{ /* eslint-disable-next-line */ }}
        <p>2016</p>
        <p>{{ $t('aboutMe.developer') }}</p>
        <p>{{ $t('skills.jochenschweizer') }}</p>
      </div>
    </div>

    <div class="skillsWrapper">
      {{ /* eslint-disable */ }}
      <h2 class="skillsTitle">
        {{ $t('skills.primary' ) }}
      </h2>
      <br>
      <div class="skillsPicture HTMLPicture" title="HTML">
        <h4 class="skillsLabel">
        {{ $t('skills.html' ) }}
        </h4>
      </div>
      <input id="CSSDropdownBtn" class="CSSDropdownBtn" type="checkbox">
      <label for="CSSDropdownBtn">
        <div class="skillsPicture CSSPicture" title="CSS">
          <h4 class="skillsLabel">{{ $t('skills.css' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
        </div>
      </label>
      <input id="JavaScriptDropdownBtn" class="JavaScriptDropdownBtn" type="checkbox">
      <label for="JavaScriptDropdownBtn">
        <div class="skillsPicture JavaScriptPicture" title="JavaScript">
          <h4 class="skillsLabel">{{ $t('skills.javascript' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
        </div>
      </label>
      <div class="skillsPicture PHPPicture" title="PHP">
        <h4 class="skillsLabel">
          {{ $t('skills.php' ) }}
        </h4>
      </div>
      <div class="skillsPicture DockerPicture" title="Docker">
        <h4 class="skillsLabel">
          {{ $t('skills.docker' ) }}
        </h4>
      </div>

      <!-- Dropdown Content -->
      <div class="CSSDropdownContent">
        <div class="skillsPicture LESSPicture" title="LESS">
          <h4 class="skillsLabel">
            {{ $t('skills.less' ) }}
          </h4>
        </div>
        <div class="skillsPicture SASSPicture" title="SASS">
          <h4 class="skillsLabel">
            {{ $t('skills.sass' ) }}
          </h4>
        </div>
        <div class="skillsPicture BootstrapPicture" title="Bootstrap">
          <h4 class="skillsLabel">
            {{ $t('skills.bootstrap' ) }}
          </h4>
        </div>
      </div>
      <div class="JavaScriptDropdownContent">
        <div class="skillsPicture NodejsPicture" title="Node.js">
          <h4 class="skillsLabel">
            {{ $t('skills.nodejs' ) }}
          </h4>
        </div>
        <div class="skillsPicture jQueryPicture" title="jQuery">
          <h4 class="skillsLabel">
            {{ $t('skills.jquery' ) }}
          </h4>
        </div>
      </div>

      <h2 class="skillsTitle">
        {{ $t('skills.other' ) }}
      </h2>
      <div class="skillsPicture ScrumPicture" title="Scrum">
        <h4 class="skillsLabel">
          {{ $t('skills.scrum' ) }}
        </h4>
      </div>
      <div class="skillsPicture AgilePicture" title="Agile Softwaredevelopment">
        <h4 class="skillsLabel">
          {{ $t('skills.agile' ) }}
        </h4>
      </div>
      <div class="skillsPicture MySQLPicture" title="MySQL">
        <h4 class="skillsLabel">
          {{ $t('skills.sql' ) }}
        </h4>
      </div>
      <div class="skillsPicture PerlPicture" title="Perl">
        <h4 class="skillsLabel">
          {{ $t('skills.perl' ) }}
        </h4>
      </div>
      <div class="skillsPicture TuxPicture" title="Linux">
        <h4 class="skillsLabel">
          {{ $t('skills.linux' ) }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/skills',
      de: '/erfahrung'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.experience
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/skills-pictures';
@import '~@/assets/scss/modules/dropdown';

.employer-wrapper {
  @include desktop {
    height: 0;

    .employer-wrapper__title {
      text-align: initial;
      padding-left: 5em;
    }
  }

  .employer-wrapper__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 250px;
    height: 150px;

    p {
      line-height: 2;
      margin: 0 0 0 7.5rem;
      font-size: 0.8rem;
    }

    @include tablet {
      width: 300px;

      p {
        font-size: 0.9rem;
      }
    }

    @include desktop {
      margin-left: 5rem;
    }
  }
}

.employer-wrapper__link {
  background-position-y: 55%;
  border: 2px solid $codGray;
  border-left-style: dashed;
  border-right-style: dashed;
  border-radius: 50%;
  position: absolute;
  height: 100px;
}

.employer-wrapper__link--picture {
  height: 100px;
  width: 100px;
}

.skillsWrapper {
  overflow: hidden;
  padding: 10em 0 0;
  text-align: center;

  ul {
    list-style-type: none;
  }

  @include desktop {
    padding-top: 0;
    padding-left: 50vw;
  }
}

.employer-wrapper__title, .skillsTitle {
  font-size: $subtitle;
  font-weight: $regular;
  text-align: center;
  text-transform: uppercase;
  margin: 0 2em 0.83em;

  & ~ .skillsTitle {
    margin-top: 6em;
  }
}

.skillsPicture {
  display: inline-block;
  margin: 0.6em 1em 6em;
  height: 85px;
  width: 95px;

  @include tablet{
    width: 110px;
  }
}

.skillsLabel {
  font-size: 0.90625em;
  font-weight: $light;
  letter-spacing: 0.5px;
  margin-top: 7.5em;
  text-align: center;

  @include tablet {
    margin-top: 8em;
  }
}

@each $name in $skillsPictures {
  $i: index($skillsPictures, $name);
  .#{$name}Picture {
    @include pic(
      $bg-img: url('../assets/img/skills/#{$name}.svg'),
      $bg-size: nth($skillsBgSize, $i)
    );
    @if $name == 'Scrum' {
      width: 115px;
    }
    @if $name == 'PHP' {
      .skillsLabel {
        margin-top: 7.5em;
      }
    }
  }
  @if $name == 'CSS' or $name == 'JavaScript' {
    .#{$name}DropdownBtn {
      @include dropdownBtn(#{$name}DropdownContent);
    }
    .#{$name}DropdownContent {
      background-color: $transparent;
      @include dropdownDefault;

      @include tablet {
        width: 90%;
      }
    }
  }
}
</style>
