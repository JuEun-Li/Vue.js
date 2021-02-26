import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'; // 뷰 라우터 사용

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')