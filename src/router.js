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
import City from './views/City.vue';
import Home from './views/Home.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  // 配置路由对照表 url -> 视图组件
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // ps: 不是一级路由的话，path路径前面不要加 /
        // ps: 二级或二级以上的路径，他们的url路径，是会从一级路由开始一直做追加的
        // localhost:8080/#/home/films
        {
          path: 'films', // 就是url路径
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        // 空的儿子
        {
          path: '',
          // component: Film
          // 重定向 自动跳转到 localhost:8080/#/films
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会与这个匹配
    {
      path: '*',
      redirect: './films'
    }

    // {
    //   path: '/films', // 就是url路径
    //   component: Film
    // },
    // {
    //   path: '/cinemas',
    //   component: Cinema
    // },
    // {
    //   path: '/center',
    //   component: Center
    // },
    // {
    //   path: '/city',
    //   component: City
    // }
  ]
})

export default router;
// 1、VueRouter
/**
 * 为什么要使用 Vue.use()，
 * 为了去触发 VueRouter 的install 方法
 */
