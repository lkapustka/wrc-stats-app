<template>
  <div
    v-cloak
    id="app"
  >
    <section v-if="isUserAuth">
      <the-header />
      <the-nav />
      <rally-draw />
    </section>
    <router-view />
  </div>
</template>

<script>
import { computed, inject } from "@vue/composition-api";
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import RallyDraw from './components/RallyDraw.vue';

export default {
  components: { TheNav, TheHeader, RallyDraw },

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
