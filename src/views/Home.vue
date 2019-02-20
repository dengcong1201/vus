// 这是个一级路由，他包裹着film、cinema、center二级路由
<template>
  <div>
    <router-view></router-view>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '../components/MzFooter/Index';
export default {
  components: {
    MzFooter
  }
}
</script>
