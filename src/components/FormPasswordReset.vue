<template>
  <div class="container">
    <h1 class="heading heading--margin">
      Reset Password
    </h1>
    <p class="text text--description">
      Enter your email adress below to reset password
    </p>
    <form
      class="form"
      @submit.prevent
    >
      <div class="form__box">
        <label
          class="form__label"
          for="email-reset"
        >E-mail</label>
        <input
          id="email-reset"
          v-model.trim="email"
          class="form__input"
          type="email"
        >
      </div>
      <button
        class="btn form__btn"
        @click="resetPassword"
      >
        Reset
      </button>
    </form>
    <p
      v-if="errorMassage !== ''"
      class="text text--error"
    >
      {{ errorMassage }}
    </p>
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

export default {
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
    color: var(--success);
  }
}
</style>
