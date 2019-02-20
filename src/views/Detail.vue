<template>
  <div>
    详情页
    <h1>当前影片的id是 {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    age: Number,
    sex: String
  },
  created () {
    // 根据 id 去请求数据
    console.log(this.$route.params.id);
    console.log(this.$router);
  }
}
</script>
