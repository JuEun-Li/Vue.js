import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 뷰 라우터 사용

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
