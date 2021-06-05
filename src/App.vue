<template>
  <div id="app" v-cloak>
    <SiteNav v-if="showNav"></SiteNav>
    <router-view />
  </div>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import SiteNav from "./components/SiteNav";

export default {
  components: { SiteNav },

  setup() {
    const store = inject("vuex-store");
    const showNav = computed(() => {
      return Object.keys(store.state.userProfile).length > 0;
    });

    return {
      showNav,
    };
  },
};
</script>

<style lang="scss" scoped></style>
