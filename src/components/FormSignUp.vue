<template>
  <div class="container">
    <h1 class="heading">
      Get Started
    </h1>
    <validation-observer
      v-slot="{ handleSubmit }"
      class="form__validator"
    >
      <form
        class="form"
        @submit.prevent="handleSubmit(signup)"
      >
        <validation-provider
          v-slot="{ errors }"
          tag="div"
          class="form__box"
          name="name"
          rules="required|min:4|max:30|alpha_dash"
        >
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
          <p class="text text--error">
            {{ errors[0] }}
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          tag="div"
          class="form__box"
          name="email"
          rules="required|min:3|max:40|email"
        >
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
          <p class="text text--error">
            {{ errors[0] }}
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          tag="div"
          class="form__box"
          name="password"
          rules="required|min:6|max:30"
        >
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
          <p class="text text--error">
            {{ errors[0] }}
          </p>
        </validation-provider>
        <button
          class="btn form__btn"
          type="submit"
          @click="signup"
        >
          Sign Up
        </button>
      </form>
    </validation-observer>
    <div class="extras extras--center">
      <slot name="back-btn" />
    </div>
  </div>
</template>

<script>
import { inject, reactive } from "@vue/composition-api";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  setInteractionMode
} from "vee-validate";

export default {
  name: "FormSignUp",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  setup() {
    Object.keys(rules).forEach((rule) => {
      extend(rule, {
        ...rules[rule],
        message: messages[rule],
      });
    });

    setInteractionMode("eager");

    const store = inject("vuex-store");
    const signupForm = reactive({
      name: "",
      email: "",
      password: "",
    });

    const signup = () => {
      store.dispatch("signupAction", {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.password,
      });
    };

    return {
      signupForm,
      signup,
    };
  },
};
</script>
<style lang="scss" scoped>
.form__validator {
  width: 100vw;
}

.text {
  position: absolute;
  padding: 1em 2em 0;
}
</style>
