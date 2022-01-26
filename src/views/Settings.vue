<template>
  <div class="container">
    <base-radio
      heading="Your WRC version"
      legend="Please select version of WRC game you are using"
      name="version"
      :options="['WRC 8', 'WRC 9', 'WRC 10']"
      @submit="changeVersion($event)"
    />
  </div>
</template>

<script>
import { inject, ref } from "@vue/composition-api";
import BaseRadio from "../components/UI Components/BaseRadio.vue";

export default {
  components: { BaseRadio },

  setup() {
    const store = inject("vuex-store");
    const gameVersion = ref("WRC 9");

    const changeVersion = (version) => {
      console.log(version);
      store.commit("setGameVersion", version);
    };

    return {
      gameVersion,
      changeVersion,
    };
  },
}
</script>
