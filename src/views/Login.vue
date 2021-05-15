<template>
  <div id="login">
    <section>
      <form>
        <h1>Welcome</h1>
        <input type="text" placeholder="Email" id="email" />
        <input type="password" placeholder="Password" id="password" />
        <button type="submit" class="button">Log In</button>
        <div class="extras">
          <a>Forgot Password</a>
          <a>Create an Account</a>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped></style>
