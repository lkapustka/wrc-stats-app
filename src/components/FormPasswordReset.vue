<template>
  <div class="container">
    <h1 class="heading heading--margin">
      Reset Password
    </h1>
    <p class="text text--description">
      Enter your email adress below to reset password
    </p>
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
          v-model="email"
          :label="'E-mail'"
          :rules="'required|min:5|max:40|email'"
          :error="errorMassage"
        >
          {{ email }}
        </form-input>
        <button
          class="btn form__btn"
          @click="handleSubmit(resetPassword)"
        >
          Reset
        </button>
      </form>
    </validation-observer>
    <p
      v-if="showSuccess"
      class="text text--success"
    >
      Success! Check your email for a reset link.
    </p>
    <div class="extras extras--center">
      <slot name="back-btn" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { auth } from "@/firebase";
import { ValidationObserver } from "vee-validate";
import FormInput from "./UI Components/FormInput.vue";

export default {
  name: "FormPasswordReset",
  components: { ValidationObserver, FormInput },

  setup() {
    const errorMassage = ref("");
    const email = ref("");
    const showSuccess = ref(false);

    const resetPassword = async () => {
      errorMassage.value = "";

      try {
        await auth.sendPasswordResetEmail(email.value);
        showSuccess.value = true;
      }

      catch (err) {
        errorMassage.value = err.message;
      }
    };

    return {
      errorMassage,
      email,
      showSuccess,
      resetPassword,
    };
  },
}
</script>

<style lang="scss" scoped>
.heading--margin {
  margin-bottom: 0.5em;
}

.text {
  &--description {
    margin-bottom: 1.5em;
  }

  &--success {
    color: var(--success-color);
  }
}
</style>
