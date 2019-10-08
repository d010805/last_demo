import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Split from './common/split/split.vue';
import HeaderSlot from './common/HeaderSlot/HeaderSlot.vue';


Vue.config.productionTip = false

Vue.component('Split', Split)
Vue.component('HeaderSlot', HeaderSlot)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
