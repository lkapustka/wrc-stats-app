<template>
  <nav class="nav">
    <div :class="[{ 'nav__wrapper--active': navActive }, 'nav__wrapper']">
      <router-link
        class="link nav__item nav__logo"
        to="/"
      >
        WRC Stats
      </router-link>
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
      class="nav__burger"
      :is-active="navActive"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
import { computed, inject, ref } from "@vue/composition-api";
import NavBurgerBtn from "./NavBurgerBtn.vue";

export default {
  components: { NavBurgerBtn },
  name: "NavSite",

  setup() {
    const router = inject("vue-router");
    const navActive = ref(false);

    const toggleMenu = () => {
      navActive.value = !navActive.value;
    };

    const routes = computed(() => {
      return router.options.routes.filter(route => route.meta.requiresAuth);
    });

    return {
      navActive,
      toggleMenu,
      routes,
    };
  },
}
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

    & > a.nav__logo {
      display: none;
    }

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

@media (min-width: 1200px) {
  .nav {
    position: sticky;
    display: flex;
    top: 0;
    justify-content: center;
    border: none;
    background: var(--gradient-solid);

    &__wrapper {
      position: static;
      display: flex;
      width: 1200px;
      height: auto;
      justify-content: space-between;
      background: transparent;
      transform: translateX(0);

      & > a.nav__logo {
        display: block;
      }
    }

    &__item {
      animation: none;
      transition: color 0.3s;

      &:hover {
        color: var(--secondary);
      }
    }

    &__item::before {
      display: none;
    }

    &__logo {
      margin-right: 5em;
      font-family: "Rock Salt", cursive;

      & + div.nav__item-wrapper {
        display: none;
      }
    }

    &__burger {
      display: none;
    }
  }
}
</style>
