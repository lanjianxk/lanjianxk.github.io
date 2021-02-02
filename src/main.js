// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueParticles from 'vue-particles'

import '@/common/css/reset.css'
import '@/common/css/base.css'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueParticles)
Vue.use(ElementUI);

Vue.config.productionTip = false // 线上改为true
Vue.config.debug = true // 开启debug模式

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
