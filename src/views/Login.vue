<template>
  <div class="bg">
    <div class="bg__img" />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="selectedComponent">
          <a
            class="extras__link"
            slot="two-links"
            @click="selectedComponent = 'form-password-reset'"
            >Forgot Password?</a
          >
          <a
            class="extras__link"
            slot="two-links"
            @click="selectedComponent = 'form-sign-up'"
            >Sign Up</a
          >
          <a
            class="extras__link"
            slot="link"
            @click="selectedComponent = 'form-login'"
            >Back to Log In</a
          >
        </component>
      </keep-alive>
    </transition>
  </div>
  <!-- <p>
      Do you like The WRC game series? Are you racing against a friend in split-screen mode and
      would you like to save the results of your competition and even play the championship against
      each other? This application will help you with that.
    </p> -->
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
  width: 100%;
  height: 100vmax;
  background-color: rgba(0, 0, 0, 0.6);

  &__img {
    position: absolute;
    width: 100%;
    height: 100vmax;
    background-image: url("../../public/img/bg-login-small.jpg");
    background-size: cover;
    background-position: center;
    z-index: -10;
  }
}

@media (min-width: 768px) {
  .bg__img {
    background-image: url("../../public/img/bg-login-large.jpg");
  }
}

@media (min-width: 1200px) {
  .bg__img {
    background-image: url("../../public/img/bg-login-xl.jpg");
  }
}
</style>
