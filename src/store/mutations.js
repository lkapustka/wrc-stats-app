const mutations = {
  setUser(state, value) {
    state.user = value;
  },

  setError(state, value) {
    state.error = value;
  },

  setActiveRally(state, value) {
    state.activeRally = value;
  }
};

export default mutations;
