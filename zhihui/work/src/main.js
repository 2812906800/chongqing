import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/Bubble.css';
import App from './App';
import router from './router';
import "babel-polyfill";
 // import 'babel-polyfill';
 // promise.prolyfill();
// 引入echarts;
import echarts from 'echarts';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts ;
import axios from 'axios';
Vue.prototype.$axios = axios ;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
