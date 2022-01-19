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
      {{ displayRally }}
    </div>
    <rally-draw-history />
  </div>
</template>

<script>
import { inject, ref } from "@vue/composition-api";
import { useDebounceFn } from "@vueuse/core";
import useDrawRally, { Status } from "../composables/useDrawRally.js"
import RallyDrawButtons from "./UI Components/RallyDrawButtons.vue";
import RallyDrawHistory from "./RallyDrawHistory.vue";

export default {
  name: "RallyDraw",
  components: { RallyDrawButtons, RallyDrawHistory },

  setup() {
    const isActive = ref(true);
    const toggleButtons = () => {
      isActive.value = !isActive.value;
    }

    const displayRally = ref("Click the button above to get started");
    const store = inject("vuex-store");

    const showRandomRally = useDebounceFn(() => {
      toggleButtons();
      const { rally } = useDrawRally(store);
      displayRally.value = `${rally.country} - ${rally.name}  (${rally.time})`;
      store.commit("setActiveRally", rally);
      store.commit("setRalliesHistory", rally);
    }, 200);

    const discardRally = () => {
      toggleButtons();
      const rally = store.getters.getActiveRally;
      rally.status = Status.Discared;
      displayRally.value = "Click the button above to get started";
      store.commit("setActiveRally", null);
    };

    const acceptRally = () => {
      toggleButtons();
      const rally = store.getters.getActiveRally;
      rally.status = Status.Accepted;
    }

    return {
      showRandomRally,
      displayRally,
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
