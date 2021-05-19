<template>
  <div class="modal">
    <div class="modal-content">
      <div @click="$emit('close')" class="close">close</div>
      <h3>Reset Password</h3>
      <div v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input v-model.trim="email" type="email" placeholder="Email" />
        </form>
        <button @click="resetPassword" class="button">Reset</button>
      </div>
      <p v-else>Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
//import { auth } from "@/firebase";

export default defineComponent({
  setup() {},
});
</script>
