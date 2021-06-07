<template>
  <div class="container">
    <h2>WRC Rallies Draw</h2>
    <button class="button" @click="showRandomRally">Draw Rally</button>
    <div class="input">{{ randomRally }}</div>
  </div>
</template>

<script>
import { defineComponent, inject, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const store = inject("vuex-store");

    const getRandom = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };

    const drawRandomRally = () => {
      return getRandom(1, store.state.rallies[0].rallies.length);
    };

    const drawRandomTime = () => {
      return getRandom(1, store.state.timeOfDay.length);
    };

    const showRandomRally = () => {
      const rally = store.getters.getRally(drawRandomRally());
      const time = store.getters.getTimeOfDay(drawRandomTime());
      randomRally.value = `${rally.country} - ${rally.name}  (${time})`;
    };

    const randomRally = ref("");

    return {
      showRandomRally,
      randomRally,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.container {
  display: grid;
  grid-template-rows: 50px 50px 40px;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 10px;
  row-gap: 50px;
}

h2 {
  grid-row: 2;
  grid-column: 4 / 8;
}

.button {
  grid-row: 3;
  grid-column: 4;
}

.input {
  background: lighten($color: $primary, $amount: 55);
  border-radius: 3px;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  min-width: 400px;
  grid-row: 3;
  grid-column: 5 / 8;
}
</style>
