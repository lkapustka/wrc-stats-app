<template>
  <div id="app" v-cloak>
    <nav-site v-if="showNav"></nav-site>
    <router-view />
  </div>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import NavSite from "./components/NavSite";

export default {
  components: { NavSite },

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

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
