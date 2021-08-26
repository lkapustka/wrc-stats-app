<template>
  <div class="container">
    <h1 class="heading">
      Get Started
    </h1>
    <form
      class="form"
      @submit.prevent
    >
      <div class="form__box">
        <label
          class="form__label"
          for="name"
        >Your name</label>
        <input
          id="name"
          v-model.trim="signupForm.name"
          class="form__input"
          type="text"
        >
      </div>
      <div class="form__box">
        <label
          class="form__label"
          for="email-signup"
        >E-mail</label>
        <input
          id="email-signup"
          v-model.trim="signupForm.email"
          class="form__input"
          type="email"
        >
      </div>
      <div class="form__box">
        <label
          class="form__label"
          for="password-signup"
        >Password</label>
        <input
          id="password-signup"
          v-model.trim="signupForm.password"
          class="form__input"
          type="password"
        >
      </div>
      <button
        class="btn form__btn"
        type="submit"
        @click="signup"
      >
        Sign Up
      </button>
    </form>
    <div class="extras extras--center">
      <slot name="link" />
    </div>
  </div>
</template>

<script>
import { inject, reactive, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "FormSignUp",

  setup() {
    const store = inject("vuex-store");
    const signupForm = reactive({
      name: "",
      email: "",
      password: "",
    });

    const signup = () => {
      store.dispatch("signup", {
        email: signupForm.email,
        password: signupForm.password,
        name: signupForm.name,
      });
    };

    return {
      signupForm,
      signup,
    };
  },
});
</script>
