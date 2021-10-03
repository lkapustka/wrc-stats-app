import router from "../router/index";
import * as firebase from "../firebase";

const actions = {
  signupAction({ dispatch, commit }, form) {
    firebase.auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // create user object in usersCollection
        firebase.usersCollection.doc(user.uid).set({
          name: form.name,
        });

        return user;
      })
      .then((user) => {
        dispatch("fetchUser", user);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  loginAction({ dispatch, commit }, form) {
    firebase.auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((user) => {
        dispatch("fetchUser", user);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  fetchUser({ commit }, user) {
    const userData = firebase.usersCollection.doc(user.uid);

    userData
      .get()
      .then((data) => {
        commit("setUser", data);

        if (router.currentRoute.path === "/login") {
          router.push("/");
        }
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },

  logoutAction({ commit }) {
    firebase.auth
      .signOut()
      .then(() => {
        commit("setUser", {});
        router.push("/login");
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
};

export default actions;
