import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from 'api' // 导入API接口
import Axios from 'api/http.js'
import './plugins/element.js' // 导入element组件
import 'assets/css/global.css' // 导入全局样式表

Vue.config.productionTip = false

// 将API接口挂载到Vue原型以便全局使用
Vue.prototype.$api = Api
Vue.prototype.$http = Axios

// 开发环境下引入 Mock 数据
if (process.env.NODE_ENV === 'development') {
  require('api/mock.js')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
