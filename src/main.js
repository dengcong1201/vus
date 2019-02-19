import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/reset.less';

// vue 的配置  开发的提示 让浏览器里的console里不出现生产的提示
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
