<template>
  <div class="container">
    <transition
      name="fade"
      mode="out-in"
    >
      <button
        v-if="isActive"
        class="btn"
        @click="showRandomRally"
      >
        Draw Rally
      </button>
      <buttonsCTA
        v-else
        @accept="acceptRally"
        @discard="discardRally"
      />
    </transition>
    <div class="input">
      {{ randomRally }}
    </div>
  </div>
</template>

<script>
import { inject, ref } from "@vue/composition-api";
import ButtonsCTA from "./UI Components/ButtonsCTA.vue";

export default {
  name: "RallyDraw",
  components: { ButtonsCTA },

  setup() {
    const isActive = ref(true);
    const toggleButtons = () => {
      isActive.value = !isActive.value;
    }

    const getRandom = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };

    const timeOfDay = ["Dawn", "Midday", "Evening", "Night"];
    const drawRandomTime = () => {
      const index = getRandom(1, timeOfDay.length);
      return timeOfDay[index - 1];
    };

    const store = inject("vuex-store");
    const drawRandomRally = () => {
      const id = getRandom(1, store.state.rallies.length);
      return store.getters.getRally(id);
    };

    const randomRally = ref("Click the button above to get started");
    const showRandomRally = () => {

      try {
        toggleButtons();
        const rally = drawRandomRally();
        const time = drawRandomTime();
        randomRally.value = `${rally.country} - ${rally.name}  (${time})`;
        store.commit("setActiveRally", rally);
      }

      catch (error) {
        store.commit("setError", error);
      }
    }

    const discardRally = () => {

      try {
        toggleButtons();
        randomRally.value = "Click the button above to get started";
        store.commit("setActiveRally", null);
      }

      catch(error) {
        store.commit("setError", error);
      }
    }

    const acceptRally = () => {
      console.log("accept");
    }

    return {
      showRandomRally,
      randomRally,
      isActive,
      acceptRally,
      discardRally,
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
