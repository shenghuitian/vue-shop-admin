import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from 'api' // 导入API接口
import './plugins/element.js' // 导入element组件
import 'assets/css/global.css' // 导入全局样式表

Vue.config.productionTip = false

// 将API接口挂载到Vue原型以便全局使用
Vue.prototype.$api = Api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
