<template>
  <div
    v-cloak
    id="app"
  >
    <section v-if="isUserAuth">
      <the-header />
      <nav-site />
    </section>
    <router-view />
  </div>
</template>

<script>
import { computed, inject, onMounted } from "@vue/composition-api";
import NavSite from "./components/NavSite.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { NavSite, TheHeader },

  setup() {
    const store = inject("vuex-store");
    const isUserAuth = computed(() => store.getters.isUserAuth);

    return {
      isUserAuth
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
