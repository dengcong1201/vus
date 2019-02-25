<template>
  <router-view></router-view>
  <!-- <div> -->
    <!-- 放置一个坑，后面页面切换（路由切换）就会按照路由对照表的配置去渲染这个坑的内容 -->
    <!-- <router-view></router-view> -->
    <!--
      1. localhost:8080/#/films   Film.vue
      2. localhost:8080/#/cinemas   Cineam.vue
      3. localhost:8080/#/center   Center.vue
     -->
    <!-- <MzFooter></MzFooter> -->
  <!-- </div> -->
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getCityName');
  }
}
</script>

<style lang="less">
// body {
//   width: 100px;
// }
</style>
