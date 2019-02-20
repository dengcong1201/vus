<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    handleLogin () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then(response => {
        var res = response.data;
        if (res.code === 0) {
          // 成功
          sessionStorage.setItem('nickname', res.data.nickName);
          // 跳转页面
          // this.$router.push('/card');
          // 跳转到用户具体想去的页面
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(res.msg);
        }
        console.log(res);
      })
    }
  }
}
</script>
