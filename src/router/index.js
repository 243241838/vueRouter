import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import HelloWorld1 from '@/view/HelloWorld.1'
import HelloWorld2 from '@/view/HelloWorld.2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/HelloWorld1',
    //   name: 'HelloWorld1',
    //   component: HelloWorld1
    // },
    // {
    //   path: '/HelloWorld2',
    //   name: 'HelloWorld2',
    //   component: HelloWorld2
    // }
  ]
})
