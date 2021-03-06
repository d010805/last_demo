import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Split from './common/split/split.vue';
import HeaderSlot from './common/HeaderSlot/HeaderSlot.vue';

import './mockData/mockServer';
import store from './store/index';
import VueLazyLoad from "vue-lazyload"
import loadingGIF from "./common/img/loading.gif"

Vue.config.productionTip = false

Vue.component('Split', Split)
Vue.component('HeaderSlot', HeaderSlot)

Vue.use(VueLazyLoad, {loading: loadingGIF})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
