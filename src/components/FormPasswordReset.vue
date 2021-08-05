<template>
  <div class="container">
    <h1 class="title">Reset Password</h1>
    <p class="text">Enter your email adress below to reset password</p>
    <form class="form" @submit.prevent>
      <div class="form__box">
        <label class="form__label" for="email-reset">E-mail</label>
        <input
          class="form__input"
          id="email-reset"
          type="email"
          v-model.trim="email"
        />
      </div>
      <button class="btn form__btn" type="submit" @click="resetPassword">
        Reset
      </button>
    </form>
    <p class="text text--error" v-if="errorMassage !== ''">
      {{ errorMassage }}
    </p>
    <p class="text text--success" v-if="showSuccess">
      Success! Check your email for a reset link.
    </p>
    <div class="extras extras--center">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "@vue/composition-api";
import { auth } from "@/firebase";

export default defineComponent({
  setup() {
    const errorMassage = ref("");
    const email = ref("");
    const showSuccess = ref(false);

    const resetPassword = async () => {
      errorMassage.value = "";

      try {
        await auth.sendPasswordResetEmail(email.value);
        showSuccess.value = true;
      } catch (err) {
        errorMassage.value = err.message;
      }
    };

    return {
      errorMassage,
      showSuccess,
      resetPassword,
    };
  },
});
</script>

<style lang="scss" scoped>
.text {
  width: 80%;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;

  &--error {
    color: var(--error);
  }

  &--success {
    color: var(--success);
  }
}

@media (min-width: 768px) {
  .text {
    font-size: 2.5rem;
  }
}

@media (min-width: 992px) {
  .text {
    font-size: 3.5rem;
  }
}
</style>
