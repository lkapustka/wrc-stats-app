<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>WRC Stats</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
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
  position: relative;
  background: white;
  box-shadow: 0 0 5px 0 rgba($shadow, 0.5);
  z-index: 10;

  h3 {
    display: inline-block;
  }

  ul {
    float: right;
    text-align: right;

    li {
      margin-top: 4px;
      margin-left: 6px;

      a {
        display: block;
        padding: 5px;
      }
    }
  }
}
</style>
