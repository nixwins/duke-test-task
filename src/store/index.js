import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false,
    basketProducts: [],
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    ADD_PRODUCT_BASKET(state, payload) {
      if (!state.basketProducts.find((item) => item == payload)) {
        state.basketProducts.push(payload);
        localStorage.setItem(
          "basket_products",
          JSON.stringify(state.basketProducts)
        );
      }
      state.products.forEach((item) => {
        if (item.id === payload) {
          item.is_exists_basket = true;
        }
      });
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    SET_IS_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async addToBakset({ commit }, productId) {
      commit("SET_IS_LOADING", true);
      Vue.axios
        .get(`/posts/${productId}`)
        .then(() => {
          commit("ADD_PRODUCT_BASKET", productId);
        })
        .catch(() => {
          commit("SET_IS_LOADING", false);
        })
        .finally(() => {
          commit("SET_IS_LOADING", false);
        });
    },
    saveProductsLocal({ commit }, products) {
      if (localStorage.key("products")) {
        commit("SET_PRODUCTS", JSON.parse(localStorage.getItem("products")));
      } else {
        products.forEach((item) => (item.is_exists_basket = false));
        commit("SET_PRODUCTS", products);
      }
    },
  },
  getters: {
    getBasketProducts: (state) => {
      return state.basketProducts.length
        ? state.basketProducts
        : JSON.parse(localStorage.getItem("basket_products"));
    },
    getProducts: (state) => {
      const products =
        state.products.length > 0
          ? state.products
          : JSON.parse(localStorage.getItem("products"));

      return products;
    },
  },
  modules: {},
});
