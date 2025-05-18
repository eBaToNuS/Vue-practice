import axios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,
  state() {
    return {
      requests: [], // Единообразное именование - используем множественное число
    };
  },
  mutations: {
    setRequest(state, requests) {
      state.requests = requests; // Сохраняем в правильное свойство
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters["auth/token"];
        if (!token) throw new Error("Токен авторизации отсутствует");

        const { data } = await axios.post(
          `/request.json?auth=${token}`,
          payload
        );
        commit("addRequest", { ...payload, id: data.name });

        dispatch(
          "setMessage",
          {
            value: "Заявка успешно создана",
            type: "primary",
          },
          { root: true }
        );

        return data;
      } catch (e) {
        console.error("Ошибка создания заявки:", e);
        dispatch(
          "setMessage",
          {
            value: `Ошибка создания заявки: ${
              e.response?.data?.error || e.message || "Неизвестная ошибка"
            }`,
            type: "danger",
          },
          { root: true }
        );
        throw e;
      }
    },
    async load({ commit, dispatch }) {
      try {
        const token = store.getters["auth/token"];
        if (!token) throw new Error("Токен авторизации отсутствует");

        const { data } = await axios.get(`/request.json?auth=${token}`);

        // Проверка на пустые данные
        if (!data) {
          commit("setRequest", []);
          return;
        }

        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setRequest", requests);
      } catch (e) {
        console.error("Ошибка загрузки заявок:", e);
        dispatch(
          "setMessage",
          {
            value: `Ошибка загрузки заявок: ${
              e.response?.data?.error || e.message || "Неизвестная ошибка"
            }`,
            type: "danger",
          },
          { root: true }
        );
        throw e;
      }
    },
  },
  getters: {
    requests: (state) => state.requests, // Теперь соответствует имени в state
    getRequestById: (state) => (id) =>
      state.requests.find((request) => request.id === id),
  },
};
