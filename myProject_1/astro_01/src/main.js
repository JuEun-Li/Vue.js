import Vue from 'vue'
import App from './App.vue'
import VueRouter, { router } from './router/index.js'; // 뷰 라우터 사용

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
