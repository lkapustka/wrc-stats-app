<template>
  <base-radio
    heading="Your WRC version"
    legend="Please select version of WRC game you are using"
    name="version"
    :options="options"
    :picked="currentVersion"
    @submit="updateVersion"
  />
</template>

<script>
import { inject, computed } from "@vue/composition-api";
import BaseRadio from "../components/UI Components/BaseRadio.vue";

export default {
  name: "SettingGameVersion",
  components: { BaseRadio },

  data() {
    const options = [
      { name: "wrc8", title: "WRC 8" },
      { name: "wrc9", title: "WRC 9" },
      { name: "wrc10", title: "WRC 10" },
      { name: "wrc-generations", title: "WRC Generations" },
    ];

    return {
      options,
    };
  },

  setup() {
    const store = inject("vuex-store");
    const currentVersion = computed(() => store.getters.getGameVersion);

    const updateVersion = (value) => {
      store.dispatch("updateGameVersion", value);
    };

    return {
      currentVersion,
      updateVersion,
    };
  },
};
</script>
