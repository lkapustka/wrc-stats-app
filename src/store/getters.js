const getters = {
  getRally: (state) => (id) => {
    return state.rallies.find(rally => rally.id === id);
  },

  ralliesCount(state) {
    return state.rallies.length;
  },

  getActiveRally(state) {
    return state.activeRally;
  },

  getRalliesHistory(state) {
    return state.ralliesHistory;
  },

  isUserAuth(state) {
    return !!state.user;
  },

  getError(state) {
    return state.error;
  },

  getGameVersion(state) {
    return state.gameVersion;
  },

  getRalliesHistoryQuantity(state) {
    return state.ralliesHistoryQuantity;
  },
};

export default getters;
