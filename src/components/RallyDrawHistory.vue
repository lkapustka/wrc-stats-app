<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <base-table
      v-if="getHistory.length > 0"
      heading="Last 10 rallies"
      :headers="['country', 'name', 'time', 'date', 'status']"
      :items="getHistory"
    />
  </transition>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import BaseTable from "./UI Components/BaseTable.vue";

export default {
  name: "RallyDrawHistory",
  components: { BaseTable },

  setup() {
    const store = inject("vuex-store");
    const getHistory = computed(() => {
      return store.getters.getRalliesHistory || [];
    });

    return { getHistory };
  },
};
</script>
