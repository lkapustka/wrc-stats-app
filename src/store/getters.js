import _ from "lodash";

const getters = {
  getRally: (state) => (id) => {
    const index = _.findIndex(state.rallies[0].rallies, ["id", id]);
    return state.rallies[0].rallies[index];
  },

  isUserAuth(state) {
    return !!state.user;
  },
};

export default getters;
