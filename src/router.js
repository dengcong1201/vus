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
// import Film from './views/Film.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import City from './views/City.vue';
// import Home from './views/Home.vue';
// import Detail from './views/Detail.vue';
// import Login from './views/Login.vue';
// import Card from './views/Card.vue';
// import Money from './views/Money.vue';
// import System from './views/System.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  // 配置路由对照表 url -> 视图组件
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        // ps: 不是一级路由的话，path路径前面不要加 /
        // ps: 二级或二级以上的路径，他们的url路径，是会从一级路由开始一直做追加的
        // localhost:8080/#/home/films
        {
          path: 'films', // 就是url路径
          component: () => import('./views/Film.vue')
        },
        {
          path: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          path: 'center',
          component: () => import('./views/Center.vue')
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
    // 城市页
    {
      path: '/city',
      component: () => import('./views/City/Index.vue')
    },
    // 详情页
    {
      path: '/detail/:id',
      component: () => import('./views/Detail.vue')
      // props: true
      // props: {
      //   name: '月',
      //   age:19
      // }
      // props: function (route) {
      //   return {
      //     sex: route.query.sex
      //   }
      // }
    },
    {
      path: '/card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/money',
      component: () => import('./views/Money.vue')
    },
    {
      path: '/system',
      component: () => import('./views/System.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会与这个匹配
    {
      path: '*',
      redirect: './films'
    }
  ]
})

// 全局前置守卫
/**
 * 路由守卫中
 * to 将要去的路由的路由对象
 * from 从哪里去的路由的路由对象
 * naxt  是否允许去
 *        naxt('/login')
 */
router.beforeEach((to, from, next) => {
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/card', '/money', '/system'];
  if (list.indexOf(to.path) > -1 && !nickname) {
    // 阻止
    // next(false);
    // 字符串模式
    // next('/login');
    // 对象模式
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next();
  }
})

//

export default router;
// 1、VueRouter
/**
 * 为什么要使用 Vue.use()，
 * 为了去触发 VueRouter 的install 方法
 */
