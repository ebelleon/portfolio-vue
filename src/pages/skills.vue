<template>
  <section id="skills">
    <h1 class="title">
      {{ $t('title.experience') }}
    </h1>

    <div class="employerWrapper">
      <h2 class="employerTitle">
        {{ $t('skills.employers') }}
      </h2>

      <div class="employerContent">
        <a href="https://www.jochen-schweizer.de" target="_blank" rel="noopener nofollow">
          <!-- use <svg> -->
          <span class="JSPicture" title="Jochen Schweizer" />
        </a>
        <p>2016</p>
        <p>Software Entwickler</p>
        <p>Jochen Schweizer</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/partials/vars';
@import '~@/assets/scss/modules/media-queries';
@import '~@/assets/scss/modules/skills-pictures';

.employerWrapper {
  @include desktop {
    .employerTitle {
      text-align: initial;
      padding-left: 5em;
    }
  }

  .employerContent {
    margin: auto;
    width: 250px;

    p {
      margin: 0 0 0.23em 8.3em;
      font-size: 0.875em;

      &:nth-child(2) {
        padding-top: 1.8em;
      }
    }

    a {
      color: initial;
    }

    @include tablet {
      width: 300px;

      p {
        font-size: inherit;

        &:nth-child(2) {
          padding-top: 0.85em;
        }
      }
    }

    @include desktop {
      margin: 3.6em 0 3.6em 5em;
      width: initial;
    }
  }
}

.JSPicture {
  @include pic($bg-img: url('../assets/img/logos.svg#jochen-schweizer-without-slogan'));
  background-position-y: 55%;
  border: 2px solid $codGray;
  border-left-style: dashed;
  border-right-style: dashed;
  border-radius: 50%;
  margin-top: 0.5em;
  position: absolute;
  height: 100px;
  width: 100px;

  @include tablet {
    margin-top: initial;
  }
}
</style>
