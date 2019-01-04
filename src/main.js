// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import { Button } from 'mint-ui';
//模拟数据
import  './mock/mockServer'

Vue.config.productionTip = false

//全局使用button
Vue.component(Button.name, Button);

//跨域处理
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h=>h(App)
})
