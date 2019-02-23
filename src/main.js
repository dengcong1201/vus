import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import './assets/style/reset.less';
import './assets/style/common.less';

// vue 的配置  开发的提示 让浏览器里的console里不出现生产的提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
