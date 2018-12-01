import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
// import element from 'element-ui'
import App from './app.vue'
// import plugin from '../libarary/index'
// import 'iview/dist/styles/iview.css'
// import 'font-awesome/css/font-awesome.css'
// import router from './router/index'
// Vue.use(plugin)
// Vue.use(element)
global.logo = 'kindo'
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
