<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>WRC Stats</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/"> Dashboard </router-link>
          </li>
          <li>
            <router-link to="/settings"> Settings </router-link>
          </li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
import { defineComponent, inject } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const store = inject("vuex-store");
    const logout = () => {
      store.dispatch("logout");
    };

    return {
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

header {
  background: white;
  box-shadow: 0 0 5px 0 rgba(var(--shadow), 0.5);
  z-index: 10;

  .col1 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin: 0;
    }

    li {
      margin-left: 15px;
      font-weight: bold;
    }
  }
}
</style>
