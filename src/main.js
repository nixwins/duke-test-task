import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/assets/scss/style.scss";

const axiosConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
};

Vue.config.productionTip = false;
Vue.use(VueAxios, axios.create(axiosConfig));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
