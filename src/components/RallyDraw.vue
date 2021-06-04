<template>
  <div>
    <h1>WRC Rallies Draw</h1>
    <button class="button" @click="showRandomRally">Draw Rally</button>
    <div>{{ randomRally }}</div>
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
      randomRally.value = `${rally.country} - ${rally.name}  ${time}`;
    };

    const randomRally = ref("");

    return {
      showRandomRally,
      randomRally,
    };
  },
});
</script>
<style lang="scss" scoped></style>
