<template>
  <div class="container">
    <h1 class="title">Get Started</h1>
    <form class="form" @submit.prevent>
      <div class="form__box">
        <label class="form__label" for="name">Your name</label>
        <input
          class="form__input"
          id="name"
          type="text"
          v-model.trim="signupForm.name"
        />
      </div>
      <div class="form__box">
        <label class="form__label" for="email-signup">E-mail</label>
        <input
          class="form__input"
          id="email-signup"
          type="email"
          v-model.trim="signupForm.email"
        />
      </div>
      <div class="form__box">
        <label class="form__label" for="password-signup">Password</label>
        <input
          class="form__input"
          id="password-signup"
          type="password"
          v-model.trim="signupForm.password"
        />
      </div>
      <button class="btn form__btn" type="submit" @click="signup">
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
