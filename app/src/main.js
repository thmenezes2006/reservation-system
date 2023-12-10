import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css";
import router from "./routes";
import "./assets/css/index.css";
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'


Vue.use(VueMask);
Vue.use(Vuelidate)
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
