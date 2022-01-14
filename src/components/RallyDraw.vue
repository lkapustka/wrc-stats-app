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
      <rally-draw-buttons
        v-else
        @accept="acceptRally"
        @discard="discardRally"
      />
    </transition>
    <div class="input">
      {{ randomRally }}
    </div>
    <rally-draw-history />
  </div>
</template>

<script>
import { inject, ref, set } from "@vue/composition-api";
import { useDebounceFn } from "@vueuse/core";
import RallyDrawButtons from "./UI Components/RallyDrawButtons.vue";
import RallyDrawHistory from './RallyDrawHistory.vue';

export default {
  name: "RallyDraw",
  components: { RallyDrawButtons, RallyDrawHistory },

  setup() {
    const isActive = ref(true);
    const toggleButtons = () => {
      isActive.value = !isActive.value;
    }

    const getRandom = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    };

    const timeOfDay = ["Dawn", "Midday", "Evening", "Night"];
    const drawRandomTimeOfDay = () => {
      const index = getRandom(0, timeOfDay.length - 1);
      return timeOfDay[index];
    };

    const store = inject("vuex-store");
    const drawRandomRally = () => {
      const id = getRandom(1, store.getters.ralliesCount);
      return store.getters.getRally(id);
    };

    const createRally = () => {
      const rally = drawRandomRally();
      set(rally, "time",  drawRandomTimeOfDay());
      set(rally, "date", new Date().toLocaleString("en-GB"));
      set(rally, "status", "Active");
      return rally;
    }

    const randomRally = ref("Click the button above to get started");
    const showRandomRally = useDebounceFn(() => {
      toggleButtons();
      const rally = createRally();
      randomRally.value = `${rally.country} - ${rally.name}  (${rally.time})`;

      store.commit("setActiveRally", rally);
      store.commit("setRalliesHistory", rally);
    }, 200);

    const discardRally = () => {
      toggleButtons();
      const rally = store.getters.getActiveRally;
      rally.status = "Discarded";
      randomRally.value = "Click the button above to get started";

      store.commit("setActiveRally", null);
    };

    const acceptRally = () => {
      toggleButtons();
      const rally = store.getters.getActiveRally;
      rally.status = "Accepted";
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

.input {
  width: 100%;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: var(--secondary-color);
  border-radius: 3px;
  text-align: center;
  color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
