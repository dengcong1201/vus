<template>
  <footer class="mz-footer">
    <router-link to="/films">
      <i class="iconfont icon-dianying"></i>电影
    </router-link>
    <router-link to="/cinemas">
      <i class="iconfont icon-yingyuana"></i>影院
    </router-link>
    <router-link to="/center">
      <i class="iconfont icon-wode"></i>我的
    </router-link>
  </footer>
</template>

<style lang="less">
.mz-footer {
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #797d82;

    i {
      font-size: 22px;
    }
  }
}
</style>
