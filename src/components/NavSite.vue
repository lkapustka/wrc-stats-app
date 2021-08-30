<template>
  <nav class="nav">
    <div :class="[{ 'nav__wrapper--active': navActive }, 'nav__wrapper']">
      <div
        v-for="(route, index) in routes"
        :key="route.path"
        class="nav__item-wrapper"
        @click="toggleMenu"
      >
        <router-link
          :class="[
            { 'nav-items-animation': navActive },
            [`nav-items-animation--delay-${index}`],
            'link',
            'nav__item',
          ]"
          :to="route"
        >
          {{ route.name }}
        </router-link>
      </div>
    </div>
    <nav-burger-btn
      :is-active="navActive"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
import { computed, defineComponent, inject, ref } from "@vue/composition-api";
import NavBurgerBtn from "./NavBurgerBtn.vue";

export default defineComponent({
  components: { NavBurgerBtn },
  name: "NavSite",

  setup() {
    const store = inject("vuex-store");
    const router = inject("vue-router");
    const navActive = ref(false);

    const toggleMenu = () => {
      navActive.value = !navActive.value;
    };

    const logout = () => {
      store.dispatch("logout");
    };

    const routes = computed(() => {

      let routes = [];
      for (let i in router.options.routes) {

        let route = router.options.routes[i];
        if (Object.prototype.hasOwnProperty.call(route, "name") && route.name !== "Login") {
          routes.push(route);
        }
      }
      return routes;
    });

    return {
      navActive,
      toggleMenu,
      logout,
      routes,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;

  &__wrapper {
    position: fixed;
    display: grid;
    top: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    background: var(--gradient-solid);
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    z-index: 100;

    &--active {
      transform: translateX(0);
    }
  }

  &__item-wrapper {
    justify-self: start;
  }

  &__item {
    position: relative;
    display: block;
    margin: 0.5em 0;
    padding: 0.5em 2em;
    font-size: 2rem;
    font-weight: bold;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background-color: var(--text-color);
      transform: scaleY(0);
      transition: transform 0.3s;
    }

    &:hover::before {
      transform: scaleY(1);
    }
  }
}

@keyframes navItemsAnimation {
  from {
    transform: translateX(200%);
  }

  to {
    transform: translateX(0);
  }
}

.nav-items-animation {
  animation: navItemsAnimation 1s both;

  &--delay-1 {
    animation-delay: 0.1s;
  }

  &--delay-2 {
    animation-delay: 0.2s;
  }

  &--delay-3 {
    animation-delay: 0.3s;
  }
}
</style>
