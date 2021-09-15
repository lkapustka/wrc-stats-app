<template>
  <div
    v-cloak
    id="app"
  >
    <the-header v-if="showNav" />
    <nav-site v-if="showNav" />
    <router-view />
  </div>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import NavSite from './components/NavSite.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { NavSite, TheHeader },

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
