import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionApi from "@vue/composition-api";
import { provide } from "@vue/composition-api";
import { auth } from "./firebase";

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      setup() {
        provide("vuex-store", store);
        provide("vue-router", router);
      },
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUser", user);
  }
});
