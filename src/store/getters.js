import _ from "lodash";

const getters = {
  getRally: (state) => (id) => {
    const index = _.findIndex(state.rallies, ["id", id]);
    return state.rallies[index];
  },

  isUserAuth(state) {
    return !!state.user;
  },

  getError(state) {
    return state.error;
  }
};

export default getters;
