<template>
  <div class="container">
    <h1 class="heading">
      Welcome Back
    </h1>
    <validation-observer
      v-slot="{ handleSubmit }"
      class="wrapper"
    >
      <form
        class="form"
        @submit.prevent
      >
        <form-input
          :id="'email'"
          v-model="loginForm.email"
          :label="'E-mail'"
          :rules="'required|min:5|max:40|email'"
        >
          {{ loginForm.email }}
        </form-input>
        <form-input
          :id="'password'"
          v-model="loginForm.password"
          :label="'Password'"
          :type="'password'"
          :rules="'required|min:6|max:30'"
        >
          {{ loginForm.password }}
        </form-input>
        <button
          class="btn form__btn"
          @click="handleSubmit(login)"
        >
          Log In
        </button>
      </form>
    </validation-observer>
    <div class="extras">
      <slot name="login-form-btns" />
    </div>
  </div>
</template>

<script>
import { inject, reactive } from "@vue/composition-api";
import { ValidationObserver } from "vee-validate";
import FormInput from "./UI Components/FormInput.vue";

export default {
  name: "FormLogin",
  components: { ValidationObserver, FormInput },

  setup() {
    const loginForm = reactive({
      email: "",
      password: "",
    });

    const store = inject("vuex-store");
    const login = () =>
      store.dispatch("loginAction", {
        email: loginForm.email,
        password: loginForm.password,
      });

    return {
      loginForm,
      login,
    };
  },
};
</script>
