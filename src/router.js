// router.js 就是 vue-router 的配置文件

// 1、引入 vue
// 2、引入 vue-router
// 3、使用 vue.ues（vue-router）
// 4、路由设置
// new VueRouter({
// router: []
// })
// 5.暴露这个配置

import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  // 配置路由对照表 url -> 视图组件
  routes: [
    {
      path: '/films', // 就是url路径
      component: Film
    },
    {
      path: '/cinemas',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

export default router;
// 1、VueRouter
/**
 * 为什么要使用 Vue.use()，
 * 为了去触发 VueRouter 的install 方法
 */
