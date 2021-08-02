<template>
  <div class="container">
    <div class="bg">
      <div class="bg__img"></div>
    </div>
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePaswordReset"
    ></PasswordReset>
    <transition name="fade" mode="out-in">
      <form class="form" v-if="showLoginForm" key="true" @submit.prevent>
        <h1 class="form__title">Welcome Back</h1>
        <div class="form__box">
          <input
            class="form__input"
            type="email"
            id="email-login"
            v-model.trim="loginForm.email"
          />
          <label class="form__label" for="email-login">E-mail</label>
        </div>
        <div class="form__box">
          <input
            class="form__input"
            type="password"
            id="password-login"
            v-model.trim="loginForm.password"
          />
          <label class="form__label" for="password-login">Password</label>
        </div>
        <button class="btn form__btn" type="submit" @click="login">
          Log In
        </button>
      </form>
    </transition>
    <transition name="fade" mode="out-in">
      <form class="form" v-if="!showLoginForm" @submit.prevent>
        <h1 class="form__title">Get Started</h1>
        <div class="form__box">
          <input
            class="form__input"
            type="text"
            id="name"
            v-model.trim="signupForm.name"
          />
          <label class="form__label" for="name">Your name</label>
        </div>
        <div class="form__box">
          <input
            class="form__input"
            type="email"
            id="email-signup"
            v-model.trim="signupForm.email"
          />
          <label class="form__label" for="email-signup">E-mail</label>
        </div>
        <div class="form__box">
          <input
            class="form__input"
            type="password"
            id="password-signup"
            v-model.trim="signupForm.password"
          />
          <label class="form__label" for="password-signup">Password</label>
        </div>
        <button class="btn form__btn" @click="signup">Sign Up</button>
      </form>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="extras" v-if="showLoginForm">
        <a class="extras__link" @click="togglePaswordReset">Forgot Password?</a>
        <a class="extras__link" @click="toggleForm">Sign Up</a>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="extras extras--signup" v-if="!showLoginForm">
        <a class="extras__link" @click="toggleForm">Back to Log In</a>
      </div>
    </transition>
  </div>

  <!-- <div class="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePaswordReset"
    ></PasswordReset>
    <section>
      <div class="col1">
        <h1>WRC Stats</h1>
        <p>
          Do you like The WRC game series? Are you racing against a friend in
          split-screen mode and would you like to save the results of your
          competition and even play the championship against each other? This
          application will help you with that.
        </p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome Back</h1>
          <input
            v-model.trim="loginForm.email"
            type="text"
            placeholder="Email"
            class="email"
          />
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="Password"
            class="password"
          />
          <button @click="login" type="submit" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePaswordReset">Forgot Password</a>
            <a @click="toggleForm">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <input
            v-model.trim="signupForm.name"
            type="text"
            placeholder="Your name"
          />
          <input
            v-model.trim="signupForm.friend"
            type="text"
            placeholder="Your friend name"
          />
          <input
            v-model.trim="signupForm.email"
            type="text"
            placeholder="Email"
          />
          <input
            v-model.trim="signupForm.password"
            type="password"
            placeholder="Password"
          />
          <button @click="signup" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div> -->
</template>

<script>
import { reactive, ref, inject } from "@vue/composition-api";
import PasswordReset from "@/components/PasswordReset.vue";

export default {
  components: { PasswordReset },

  setup() {
    const store = inject("vuex-store");
    const showLoginForm = ref(true);
    const showPasswordReset = ref(false);

    const toggleForm = () => {
      showLoginForm.value = !showLoginForm.value;
    };

    const togglePaswordReset = () => {
      showPasswordReset.value = !showPasswordReset.value;
    };

    const loginForm = reactive({
      email: "",
      password: "",
    });

    const login = () => {
      store.dispatch("login", {
        email: loginForm.email,
        password: loginForm.password,
      });
    };

    const signupForm = reactive({
      name: "",
      friend: "",
      email: "",
      password: "",
    });

    const signup = () => {
      store.dispatch("signup", {
        email: signupForm.email,
        password: signupForm.password,
        name: signupForm.name,
        friend: signupForm.friend,
      });
    };

    return {
      toggleForm,
      togglePaswordReset,
      showPasswordReset,
      showLoginForm,
      login,
      signup,
      signupForm,
      loginForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  &__img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url("../../public/img/bg-login-small.jpg");
    background-size: cover;
    background-position: 20% 0;
    z-index: -10;
  }
}

.form {
  position: absolute;
  display: flex;
  width: 80%;
  height: 80%;
  flex-direction: column;

  &__title {
    margin: 1em 0 1em;
    align-self: center;
    font-size: 3.5rem;
    letter-spacing: 1px;
  }

  &__box {
    position: relative;
    margin-bottom: 3.5em;

    &::after {
      content: "";
      display: block;
      height: 0.3em;
      background-color: white;
      opacity: 0.7;
      transition: opacity 0.4s ease;
    }

    &:focus-within::after,
    &:focus-within > .form__label {
      opacity: 1;
    }
  }

  &__input {
    display: block;
    width: 100%;
    padding: 0.5em 0;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    font-family: inherit;
    letter-spacing: 1px;

    &:focus {
      color: white;
      font-weight: bold;
    }
  }

  &__label {
    position: absolute;
    top: 3.5em;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 1px;
    opacity: 0.7;
    transition: opacity 0.4s ease;
  }

  &__btn {
    margin: 2em 0;
    background-color: rgba(23, 31, 192, 0.7);
    font-weight: bold;
    letter-spacing: 1px;
  }
}

.extras {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: space-between;

  &--signup {
    justify-content: center;
  }

  &__link {
    margin: 0.5em;
    padding: 1em;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
</style>
