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

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#333, 0.5);

  .modal-content {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(#333, 0.5);
    z-index: 999;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }

    p {
      margin: 15px 0;
    }

    .error {
      font-size: 12px;
      color: tomato;
    }

    .button {
      width: 100%;
    }
  }
}
</style>
