<template>
  <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">Close</div>
      <h3>Reset Password</h3>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="Email" />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword" class="button">Reset</button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "@vue/composition-api";
import { auth } from "@/firebase";

export default defineComponent({
  setup() {
    const errorMsg = ref("");
    const email = ref("");
    const showSuccess = ref(false);

    const resetPassword = async () => {
      errorMsg.value = "";

      try {
        await auth.sendPasswordResetEmail(email.value);
        showSuccess.value = true;
      } catch (err) {
        errorMsg.value = err.message;
      }
    };

    return {
      errorMsg,
      email,
      showSuccess,
      resetPassword,
    };
  },
});
</script>
