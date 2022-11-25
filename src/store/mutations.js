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
    if (state.ralliesHistory.length === state.ralliesHistoryQuantity) {
      state.ralliesHistory.shift();
    }
    state.ralliesHistory.push(value);
  },

  setRalliesHistoryQuantity(state, value) {
    state.ralliesHistoryQuantity = value;
  },

  setLastRallyStatus(state, value) {
    state.ralliesHistory.at(-1).status = value;
  },

  setGameVersion(state, { version, dataName }) {
    state.gameVersion = version;
    state.rallies = require(`../data/${dataName}.json`);
  },
};

export default mutations;
