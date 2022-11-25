import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const initialState = () => {
  return {
    user: null,
    error: null,
    gameVersion: 'WRC Generations',
    activeRally: null,
    ralliesHistoryQuantity: 10,
    ralliesHistory: [],
    rallies: require("../data/wrc-generations.json")
  };
};

export default new Vuex.Store({
  state: initialState(),
  getters: getters,
  mutations: mutations,
  actions: actions
});
