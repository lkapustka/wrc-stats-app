<template>
  <header class="header section">
    <h1 class="header__heading">
      {{ heading }}
    </h1>
    <p class="header__text">
      {{ headerText }}
    </p>
  </header>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "HeaderSite",
  
  setup() {
    const heading = ref("WRC Stats");
    const headerText = ref(
      "An app for WRC9 players who race with friends on a split screen and want to record their results."
    );

    return {
      heading,
      headerText,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 75vh;
  padding: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  text-align: center;
  @include heroImages(var(--gradient), "../../public/img/header-small.jpg");

  &__heading {
    font-size: 4.8rem;
    font-weight: bold;
  }

  &__text {
    font-size: 1.4rem;
    font-weight: bold;
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
    background-image: var(--gradient), url("../../public/img/header-big.jpg");

    &__heading {
      font-size: 8rem;
    }
  }
}
</style>
