import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import echarts from 'echarts'
import animated from 'animate.css'
import Layout from './layout/default'
import './scss/reset.css'
import LoginLayout from './layout/login'
import DefaultLayout from './layout/default.vue'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './i18n/i18n'
import store from './vuex/store'

Vue.component('login-layout',LoginLayout)
Vue.component('default-layout',DefaultLayout)
// Vue.prototype.$echarts = echarts

Vue.use(animated)
Vue.use(ElementUI,{
  size:'',
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
