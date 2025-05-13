export default {
  namespaced: true,
  state() {
    return {
      token: null,
    };
  },
  actions: {
    async login(commit) {},
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAithenticated(state) {
      return !!state.token;
    },
  },
};
