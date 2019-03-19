import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
// 引入echarts;
import echarts from 'echarts';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts ;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
