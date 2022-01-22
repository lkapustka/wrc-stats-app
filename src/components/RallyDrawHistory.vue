<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <vue-table
      v-if="getHistory.length > 0"
      heading="Last 10 rallies"
      :headers="['country', 'name', 'time', 'date', 'status']"
      :items="getHistory"
    />
  </transition>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import VueTable from "./VueTable.vue";

export default {
  name: "RallyDrawHistory",
  components: { VueTable },

  setup() {
    const store = inject("vuex-store");
    const getHistory = computed(() => {
      return store.getters.getRalliesHistory || [];
    });

    return { getHistory };
  },
};
</script>
