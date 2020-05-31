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
        <ul>
          <li v-for="item in employers" :key="item.id">
            <a :href="item.url" target="_blank" rel="noopener nofollow" class="employer-wrapper__link">
              <svg :class="`employer-wrapper__link--${item.svgClass}`">
                <use :xlink:href="require('@/assets/img/logos.svg') + item.svgName" />
              </svg>
            </a>
            <p>{{ item.year }}</p>
            <p>{{ $t(item.position) }}</p>
            <p>{{ $t(item.company) }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="skills-wrapper">
      <h2 class="skills-wrapper__title">
        {{ $t('skills.primary' ) }}
      </h2>
      <br>
      <div
        v-for="item in primarySkills"
        :key="item.id"
        class="skills-wrapper__picture"
        :class="`skills-wrapper__picture--${$t(item.label)}`"
        :title="$t(item.label)"
      >
        <h4 class="skills-wrapper__label">
          {{ $t(item.label) }}
        </h4>
      </div>
      <input id="skills-wrapper__dropdown-btn--CSS" class="skills-wrapper__dropdown-btn--CSS" type="checkbox">
      <label for="skills-wrapper__dropdown-btn--CSS">
        <div class="skills-wrapper__picture skills-wrapper__picture--CSS" title="CSS">
          <h4 class="skills-wrapper__label">{{ $t('skills.css' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
        </div>
      </label>
      <input id="skills-wrapper__dropdown-btn--JavaScript" class="skills-wrapper__dropdown-btn--JavaScript" type="checkbox">
      <label for="skills-wrapper__dropdown-btn--JavaScript">
        <div class="skills-wrapper__picture skills-wrapper__picture--JavaScript" title="JavaScript">
          <h4 class="skills-wrapper__label">{{ $t('skills.javascript' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
        </div>
      </label>

      <!-- Dropdown Content -->
      <div class="skills-wrapper__dropdown-content--CSS">
        <div
          v-for="item in cssDropdownContent"
          :key="item.id"
          class="skills-wrapper__picture"
          :class="`skills-wrapper__picture--${$t(item.label)}`"
          :title="$t(item.label)"
        >
          <h4 class="skills-wrapper__label">
            {{ $t(item.label) }}
          </h4>
        </div>
      </div>
      <div class="skills-wrapper__dropdown-content--JavaScript">
        <div
          v-for="item in jsDropdownContent"
          :key="item.id"
          class="skills-wrapper__picture"
          :class="`skills-wrapper__picture--${item.className}`"
          :title="$t(item.label)"
        >
          <h4 class="skills-wrapper__label">
            {{ $t(item.label) }}
          </h4>
        </div>
      </div>

      <div
        v-for="item in otherSkill"
        :key="item.id"
        class="skills-wrapper__picture"
        :class="`skills-wrapper__picture--${$t(item.label)}`"
        :title="$t(item.label)"
      >
        <h4 class="skills-wrapper__label">
          {{ $t(item.label) }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      employers: [
        {
          id: 1,
          url: 'https://www.jochen-schweizer.de',
          svgClass: 'jochenschweizer',
          svgName: '#jochen-schweizer-without-slogan',
          year: 2016,
          position: 'aboutMe.developer',
          company: 'skills.jochenschweizer'
        },
        {
          id: 2,
          url: 'https://www.myposter.de',
          svgClass: 'myposter',
          svgName: '#myposter',
          year: 2020,
          position: 'aboutMe.developer',
          company: 'skills.myposter'
        }
      ],
      primarySkills: [
        { id: 3, label: 'skills.docker' },
        { id: 4, label: 'skills.php' },
        { id: 5, label: 'skills.html' }
      ],
      cssDropdownContent: [
        { id: 6, label: 'skills.less' },
        { id: 7, label: 'skills.sass' },
        { id: 8, label: 'skills.bootstrap' }
      ],
      jsDropdownContent: [
        { id: 9, label: 'skills.nodejs', className: 'Nodejs' },
        { id: 10, label: 'skills.vuejs', className: 'Vuejs' },
        { id: 16, label: 'skills.jquery', className: 'jQuery' }
      ],
      otherSkill: [
        { id: 11, label: 'skills.scrum' },
        { id: 12, label: 'skills.agile' },
        { id: 13, label: 'skills.sql' },
        { id: 14, label: 'skills.perl' },
        { id: 15, label: 'skills.linux' }
      ]
    }
  },
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
      text-align: unset;
      padding-left: 10rem;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    height: 150px;

    ul {
      list-style-type: none;

      li {
        margin-bottom: 3rem;
      }
    }

    p {
      line-height: 2;
      margin: 0 0 0 12rem;
      font-size: 1.4rem;
      width: 100%;
    }

    @include tablet {
      p {
        font-size: 1.5rem;
      }
    }

    @include desktop {
      align-items: flex-start;
    }
  }

  &__link {
    background-position-y: 55%;
    border: 2px solid $black;
    border-left-style: dashed;
    border-right-style: dashed;
    border-radius: 50%;
    display: flex;
    position: absolute;
    justify-content: center;
    height: 100px;
    width: 105px;

    &--myposter {
      width: 90px;
    }

    &--jochenschweizer {
      height: 100px;
    }
  }
}

.skills-wrapper {
  overflow: hidden;
  padding: 15rem 0 0;
  text-align: center;

  ul {
    list-style-type: none;
  }

  @include desktop {
    padding-top: 0;
    padding-left: 50vw;
  }
}

.employer-wrapper__title, .skills-wrapper__title {
  font-size: $skillsSubtitle;
  font-weight: $regular;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 3rem;
}

.skills-wrapper__picture {
  display: inline-block;
  margin: 0.6em 1em 6em;
  height: 85px;
  width: 95px;

  @include tablet{
    width: 110px;
  }
}

.skills-wrapper__label {
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
  .skills-wrapper__picture--#{$name} {
    @include pic(
      $bg-img: url('../assets/img/skills/#{$name}.svg'),
      $bg-size: nth($skillsBgSize, $i)
    );
    @if $name == 'Scrum' {
      width: 115px;
    }
  }
  @if $name == 'CSS' or $name == 'JavaScript' {
    .skills-wrapper__dropdown-btn--#{$name} {
      @include dropdownBtn(skills-wrapper__dropdown-content--#{$name});
    }
    .skills-wrapper__dropdown-content--#{$name} {
      background-color: $transparent;
      @include dropdownDefault;

      @include desktop {
        width: 97%;
      }
    }
  }
}
</style>
