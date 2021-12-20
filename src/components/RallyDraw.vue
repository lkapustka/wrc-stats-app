<template>
  <div class="container">
    <button
      class="btn"
      @click="showRandomRally"
    >
      Draw Rally
    </button>
    <div class="input">
      {{ randomRally }}
    </div>
  </div>
</template>

<script>
import { inject, ref } from "@vue/composition-api";

export default {
  name: "RallyDraw",

  setup() {
    const getRandom = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };

    const drawRandomRally = () => {
      return getRandom(1, store.state.rallies[0].rallies.length);
    };

    const timeOfDay = ["Dawn", "Midday", "Evening", "Night"];
    const drawRandomTime = () => {
      return getRandom(1, timeOfDay.length);
    };

    const store = inject("vuex-store");
    const randomRally = ref("Click the button above to get started");
    const showRandomRally = () => {

      const time = timeOfDay[drawRandomTime() - 1];
      const rally = store.getters.getRally(drawRandomRally());
      randomRally.value = `${rally.country} - ${rally.name}  (${time})`;
    };


    return {
      showRandomRally,
      randomRally,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 80%;
  margin: 2em auto;
  justify-content: center;
}

.btn {
  background-color: var(--gradient-color-second);
}

.input {
  width: 100%;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: var(--gradient-color-first);
  border-radius: 3px;
  text-align: center;
  color: var(--gradient-color-second);
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
