const mutations = {
  setUser(state, value) {
    state.user = value;
  },

  setError(state, value) {
    state.error = value;
  },

  setActiveRally(state, value) {
    state.activeRally = value;
  },

  setRalliesHistory(state, value) {
    if (state.ralliesHistory.length === 10) {
      state.ralliesHistory.shift();
    }
    state.ralliesHistory.push(value);
  },

  setGameVersion(state, value) {
    state.currentGameVersion = value;
  },
};

export default mutations;
