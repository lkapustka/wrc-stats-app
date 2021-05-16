<template>
  <div class="login">
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
      <div class="col2">
        <form @submit.prevent>
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
          <button @click="login()" type="submit" class="button">Log In</button>
          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
//import { reactive } from "@vue/composition-api";
import { useStore } from "vuex";

export default {
  setup() {
    //const data = reactive({});
    const login = () => {
      useStore().dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    };

    return {
      login,
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.login {
  background: linear-gradient(
    to right,
    $primary 0%,
    $primary 50%,
    white 50%,
    white 100%
  );
}

.col1,
.col2 {
  height: 100vh;
  padding-top: 30vh;
}

.col1 {
  color: white;

  p {
    max-width: 510px;
    line-height: 1.8;
  }
}

.col2 {
  color: $primary;

  form {
    margin: 0 auto;
    max-width: 450px;
  }

  .extras {
    float: right;
    text-align: right;

    a {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
