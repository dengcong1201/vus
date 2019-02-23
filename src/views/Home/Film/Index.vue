<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <button @click="goCity">去城市选中页面</button>
    <ul>
      <router-link tag="li" to="/detail/100">流浪地球</router-link>
      <router-link tag="li" to="/detail/200">十二生肖</router-link>
      <router-link tag="li" to="/detail/300">喜剧之王</router-link>
    </ul>
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/Index';
import MzTabs from '@/components/MzTabs/Index ';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  },

  methods: {
    goCity () {
      // 字符串跳转
      this.$router.push('/city');
      // 对象方式
      /**
       * path   - 路径
       * name   - 名字
       * params  - 路由传参
       * query   -查询字符串， url？
       *
       * ps： params和 path 不能共同使用
       */
      // this.$router.push({
      //   // 根据你定义的 path
      //   path: '/city'
      // })
    }
  }
}
</script>
