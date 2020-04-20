// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
let list = [
  {
    path: '/HelloWorld1',
    name: 'HelloWorld1',
    component: 'HelloWorld.1'
  },
  {
    path: '/HelloWorld2',
    name: 'HelloWorld2',
    component: 'HelloWorld.2'
  }
]
var array = function (arr) {
  arr.map((item) => {
    item.component = require('@/view/' + item.component).default;
    if (item.children && item.children.length > 0) {
      array(item)
    }
  })
}
router.beforeEach((to, from, next) => {
  next();
  if (router.options.routes.length < 2) {
    array(list)
    list.map((item) => {
      router.options.routes.push(item);
    })
    router.addRoutes(list);
    next();
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
