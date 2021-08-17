<template>
  <div class="bg">
    <transition
      name="fade"
      mode="out-in"
    >
      <component :is="selectedComponent">
        <a
          slot="two-links"
          class="link extras__link"
          @click="selectedComponent = 'form-password-reset'"
        >Forgot Password?</a>
        <a
          slot="two-links"
          class="link extras__link"
          @click="selectedComponent = 'form-sign-up'"
        >Sign Up</a>
        <a
          slot="link"
          class="link extras__link"
          @click="selectedComponent = 'form-login'"
        >Back to Log In</a>
      </component>
    </transition>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import FormLogin from "../components/FormLogin.vue";
import FormSignUp from "../components/FormSignUp.vue";
import FormPasswordReset from "../components/FormPasswordReset.vue";

export default {
  components: {
    FormLogin,
    FormSignUp,
    FormPasswordReset,
  },

  setup() {
    const selectedComponent = ref("form-login");

    return {
      selectedComponent,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @include heroImages(linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), "../../public/img/bg-login-small.jpg");
}

@media (min-width: 992px) {
  .bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../public/img/bg-login-xl.jpg");
  }
}
</style>
