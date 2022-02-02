import router from "../router/index";
import * as firebase from "../firebase";

const actions = {
  async signupAction({ dispatch, commit }, form) {
    try {
      const { user } = await firebase.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      // create user object in usersCollection
      await firebase.usersCollection.doc(user.uid).set({
        name: form.name,
        gameVersion: form.defaultGameVersion,
      });
      dispatch("fetchUser", user);
    }

    catch (error) {
      commit("setError", error.message);
    }
  },

  async loginAction({ dispatch, commit }, form) {
    try {
      const { user } = await firebase.auth.signInWithEmailAndPassword(form.email, form.password);
      dispatch("fetchUser", user);
    }

    catch (error) {
      commit("setError", error.message);
    }
  },

  async fetchUser({ commit }, user) {
    try {
      const userProfile = await firebase.usersCollection.doc(user.uid).get();
      commit("setUser", userProfile.data());
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    }

    catch (error) {
      commit("setError", error.message);
    }
  },

  async logoutAction({ commit }) {
    try {
      await firebase.auth.signOut();
      commit("setUser", null);
      router.push("/login");
    }

    catch (error) {
      commit("setError", error.message);
    }
  },

  async updateGameVersion({ commit, dispatch }, version) {
    const userId = firebase.auth.currentUser.uid;

    try {
      await firebase.usersCollection.doc(userId).update({ gameVersion: version});
      dispatch("fetchUser", { uid: userId });
    }

    catch (error) {
      commit("serError", error.message);
    }
  },
};

export default actions;
