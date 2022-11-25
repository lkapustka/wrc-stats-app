<template>
  <header class="header section">
    <h1 class="header__heading">
      WRC Stats
    </h1>
    <p class="header__text">
      The App for WRC players who race with friends on a split screen and want to record their
      results.
    </p>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 30vh;
  padding: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  text-align: center;

  @include heroImages(
    var(--gradient),
    var(--header-bg-small));

  &__heading {
    font: bold 3.2rem "Rock Salt", cursive;
  }

  &__text {
    font-size: 1.4rem;
    display: none;
  }
}

@media (min-width: 768px) {
  .header {
    &__heading {
      font-size: 6.6rem;
    }

    &__text {
      font-size: 2.2rem;
    }
  }
}

@media (min-width: 992px) {
  .header {
    background-image: var(--gradient), var(--header-bg-big);

    &__heading {
      font-size: 8rem;
    }
  }
}
</style>
