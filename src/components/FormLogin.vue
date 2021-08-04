<template>
  <div class="container">
    <h1 class="title">Welcome Back</h1>
    <form class="form" @submit.prevent>
      <div class="form__box">
        <label class="form__label" for="email-login">E-mail</label>
        <input
          class="form__input"
          id="email-login"
          type="email"
          v-model.trim="loginForm.email"
        />
      </div>
      <div class="form__box">
        <label class="form__label" for="password-login">Password</label>
        <input
          class="form__input"
          id="password-login"
          type="password"
          v-model.trim="loginForm.password"
        />
      </div>
      <button class="btn form__btn" type="submit" @click="login">Log In</button>
    </form>
    <div class="extras">
      <slot name="two-links" />
    </div>
  </div>
</template>

<script>
import { inject, reactive, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "FormLogin",

  setup() {
    const store = inject("vuex-store");
    const loginForm = reactive({
      email: "",
      password: "",
    });

    const login = () => {
      store.dispatch("login", {
        email: loginForm.email,
        password: loginForm.password,
      });
    };

    return {
      loginForm,
      login,
    };
  },
});
</script>
