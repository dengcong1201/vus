# mz-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



1、设置viewport

2、reset.css 重置样式
    模块的方式去加载 -- src
    老方式              --public

3、vue中使用 ajax
  vue-resoure  vue专门用来处理ajax请求的

  axios      第三方提供的封装了ajax请求的一个类库。尤雨溪推荐我们使用这个，于是不再对vue-resoure进行维护

4、axios

  对ajax封装成了 promise

  使用：
    1、script
    2、npm模块方式

  调用它的api
  

  1、get
    axios.get(url,conifg)

  2、post
    axios.post(url,data,congif)

  3、普通
    axios({
      methods:'',
      url:''
    })  


  #config配置
    1、params   请求参数，  url？name=张三&age=18

    params:{
      name:'张三',
      age: 18
    }

  #headers   请求头信息

  #后台在 node.js 中设置允许跨域

