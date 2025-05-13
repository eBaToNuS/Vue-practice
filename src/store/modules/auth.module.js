export default {
  namespaced: true,
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("jwt-token", token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("jwt-token");
    },
  },
  actions: {
    async login({ commit }, payload) {
      commit("setToken", "TEST TOKEN");
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};
