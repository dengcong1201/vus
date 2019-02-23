<template>
  <div class="home-film">
    <router-link tag="div" to="/city" class="city-fixed">
      <span>{{ curCityName }}</span>
      <i class="iconfont icon-xiala" style="font-size: 10px;"></i>
    </router-link>

    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <button @click="goCity">去城市选中页面</button>
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

  computed: {
    curCityName () {
      return this.$store.state.curCityName
    }
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

<style lang="less">
  .home-film {
    .city-fixed {
      position: absolute;
      top: 18px;
      left: 7px;
      color: #fff;
      z-index: 10;
      font-size: 13px;
      background: rgba(0, 0, 0, .2);
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
      padding: 0 5px;

      .icon-xiala {
        font-size: 10px;
      }
    }
  }
</style>
