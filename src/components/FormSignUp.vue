<template>
  <div class="container">
    <h1 class="heading">
      Get Started
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
          :id="'name'"
          v-model="signupForm.name"
          :label="'Your nickname'"
          :rules="'required|min:4|max:30|alpha_dash'"
        >
          {{ signupForm.name }}
        </form-input>
        <form-input
          :id="'email'"
          v-model="signupForm.email"
          :label="'E-mail'"
          :rules="'required|min:5|max:40|email'"
        >
          {{ signupForm.email }}
        </form-input>
        <form-input
          :id="'password'"
          v-model="signupForm.password"
          :label="'Password'"
          :type="'password'"
          :rules="'required|min:6|max:30'"
        >
          {{ signupForm.password }}
        </form-input>
        <button
          class="btn form__btn"
          @click="handleSubmit(signup)"
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
import { ValidationObserver } from "vee-validate";
import FormInput from "./UI Components/FormInput.vue";

export default {
  name: "FormSignUp",
  components: {
    ValidationObserver,
    FormInput,
  },

  setup() {
    const signupForm = reactive({
      name: "",
      email: "",
      password: "",
      defaultGameVersion: "WRC 9",
    });

    const store = inject("vuex-store");
    const signup = () => {
      store.dispatch("signupAction", {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.password,
        defaultGameVersion: signupForm.defaultGameVersion,
      });
    };

    return {
      signupForm,
      signup,
    };
  },
};
</script>
