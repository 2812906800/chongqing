import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
// 		{
// 		  path: '/bull',
// 		  name: 'bull',
// 		  component: bull
// 		}
  ]
})
