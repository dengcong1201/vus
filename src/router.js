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
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
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
    // 城市页
    {
      path: '/city',
      components: {
        top: City
      }
    },
    // 详情页
    {
      path: '/detail/:id',
      component: Detail,
      props: true
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
      path: '/card/:abc',
      component: {
        render (h) {
          let that = this;
          return h('div', [
            '卖座卡页面',
            h('button', {
              on: {
                click: function () {
                  that.reload();
                }
              }
            }, [
              '点击',
              h('span', '你好')
            ])
          ])
        },
        methods: {
          reload () {
            // router.push('/card/月');
            router.push({
              path: '/card/月'
            })
          }
        },
        // 组件内的路由守卫函数
        beforeRouteEnter (to, from, next) {
          console.log('enter');
          next();
        },
        // 只会在页面使用了路由参数的时候
        beforeRouteUpdate (to, from, next) {
          console.log('Update');
          next();
        },
        beforeRouteLeave (to, from, next) {
          console.log('Leave');
          next();
        }
      }
      // 路由独享的钩子函数
      // beforeEnter (to, from, next) {
      //   next(false);
      // }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '余额页面')
        }
      }
    },
    {
      path: '/system',
      component: {
        render (h) {
          return h('div', '设置页面')
        }
      }
    },
    {
      path: '/login',
      component: Login
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
// router.beforeEach((to, from, next) => {
//   if (to.path === '/card' || to.path === '/money' || to.path === '/system') {
//     // 阻止
//     // next(false);
//     // 字符串模式
//     // next('/login');
//     // 对象模式
//     next({
//       path: '/login'
//     })
//   } else {
//     next();
//   }
// })

export default router;
// 1、VueRouter
/**
 * 为什么要使用 Vue.use()，
 * 为了去触发 VueRouter 的install 方法
 */
