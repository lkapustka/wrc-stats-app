<template>
  <nav class="nav">
    <div class="nav__wrapper" :class="{ 'nav__wrapper--active': navActive }">
      <ul class="nav__items">


        <!-- <li class="nav__item" :class="{ 'nav-items-animation': navActive }">
          <router-link to="/" class="link"> Dashboard </router-link>
        </li>
        <li
          @click="toggleMenu"
          class="nav__item"
          :class="[
            { 'nav-items-animation': navActive },
            'nav-items-animation--delay1',
          ]"
        >
          <router-link to="/" class="link"> Rallies Stats </router-link>
        </li>
        <li
          class="nav__item"
          :class="[
            { 'nav-items-animation': navActive },
            'nav-items-animation--delay2',
          ]"
        >
          <router-link to="/settings" class="link"> Settings </router-link>
        </li>
        <li
          class="nav__item"
          :class="[
            { 'nav-items-animation': navActive },
            'nav-items-animation--delay3',
          ]"
          @click="logout"
        >
          <router-link to="" class="link">Logout </router-link>
        </li> -->
      </ul>
    </div>
    <nav-burger-btn @click="toggleMenu" />
  </nav>
</template>

<script>
import { defineComponent, inject, ref } from "@vue/composition-api";
import NavBurgerBtn from "./NavBurgerBtn.vue";

export default defineComponent({
  components: { NavBurgerBtn },
  name: "NavSite",

  setup() {
    const store = inject("vuex-store");
    const navActive = ref(false);

    const toggleMenu = () => {
      navActive.value = !navActive.value;
    };

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      navActive,
      toggleMenu,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;

  &__wrapper {
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: var(--gradient-solid);
    transform: translateX(100%);
    transition: 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    z-index: 100;

    &--active {
      transform: translateX(0);
    }
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

  &--delay1 {
    animation-delay: 0.1s;
  }

  &--delay2 {
    animation-delay: 0.2s;
  }

  &--delay3 {
    animation-delay: 0.3s;
  }
}
</style>
