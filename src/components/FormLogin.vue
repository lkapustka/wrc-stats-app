<template>
  <div class="container">
    <h1 class="heading">
      Welcome Back
    </h1>
    <form
      class="form"
      @submit.prevent="login"
    >
      <div class="form__box">
        <label
          class="form__label"
          for="email-login"
        >E-mail</label>
        <input
          id="email-login"
          v-model.trim="loginForm.email"
          class="form__input"
          type="email"
        >
      </div>
      <div class="form__box">
        <label
          class="form__label"
          for="password-login"
        >Password</label>
        <input
          id="password-login"
          v-model.trim="loginForm.password"
          class="form__input"
          type="password"
        >
      </div>
      <button
        class="btn form__btn"
        type="submit"
        @click="login"
      >
        Log In
      </button>
    </form>
    <p
      v-if="errorMassage !== ''"
      class="text text--error"
    >
      {{ errorMassage }}
    </p>
    <div class="extras">
      <slot name="login-form-btns" />
    </div>
  </div>
</template>

<script>
import { inject, reactive, ref } from "@vue/composition-api";

export default {
  name: "FormLogin",

  setup() {
    const store = inject("vuex-store");
    const errorMassage = ref("");
    const loginForm = reactive({
      email: "",
      password: "",
    });

    const login = () =>
      store.dispatch("loginAction", {
        email: loginForm.email,
        password: loginForm.password,
      });

    return {
      loginForm,
      login,
      errorMassage,
    };
  },
};
</script>
