// 这就是入口文件


//引入vue

// import Vue from 'vue/dist/vue.esm.js';
import Vue from 'vue';
import './styles/style.css';


new Vue({
  el:'#app',
  data:{
    msg:'hello',
    abc:'青青99'
  },
  template:`
    <h1>我的天</h1>
  `
  
  //我将采用 render函数的方式去渲染页面元素
  // render:function(h){
  //   // h -> document.createElement
  //   // var pEl = document.createElement('p');
  //   // pEl.innerHTML = '你好，';
  //   return h('p','你好，');
  // }
})

