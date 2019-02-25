# vuex 是什么？
  是一个专为vue.js 应用程序开发的状态管理器

  采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

## 概念
  - 核心： store(仓库)

    1、state: 状态
    2、getters：对state的派生，可以理解为store的计算属性
    3、mutaions：修改state的唯一操作就是提交mutaion
    4、actions：类似于mutaion， 用来处理异步
    5、modules：对仓库分割成模块

  - mapState(): sate的辅助函数
  - mapGetters() : getters的辅助函数
  - mapMutaions(): mutations的辅助函数
  - mapActions(): actions的辅助函数

## 使用步骤

  1、安装 yarn add xuex
  2、创建一个vuex 的仓库文件 src/store/index.js
  3、编写 仓库文件， 并暴露仓库
  4、在 mian.js 中，将 仓库做一个注入

###
  1、curCityName 写到了仓库中
  2、组件中用了 curCityName 的需要删掉，而要使用仓库中的 curCityName

#### 如何从仓库中取出数据在组件中使用
  1、computed
    curCityName () {
      return this.$store.state.curCityName;
    }


##### 需要修改数据的时候，得到仓库里改， 如何在仓库里改数据？
  只能通过 仓库的 mutation 去修改

   mutations: {
    // key: value
    /**
     * 修改curCityName
     * @param {Object} state 就是当前仓库的 state
     */
    chgCityName () {
      state.curCityName = '北京';
    }
  }

  组件中： （需要提交 chgCityName 这个 mutation）
  this.$store.commit('chgCityName')


  ######
    1、this.$store.state.xxx 用起来不方便，
        vuex 提供有 mapState() 这个辅助函数供我们去调用

    2、this.$store.getters.xxx
        ------ vuex  mapGetters()

    3、this.$store.commit('xxxx')
        --------- vuex maoMutations()

### 辅助函数的使用
  1、哪里要用就在哪里引用

### mapState
  返回的是个对象
数组
  Vuex.mapState([
    'cityData',
    'curCityName'
  ]),

  cityData () {
    return this.$store.state.cityData
  },
  curCityName () {
    return this.$store.state.curCityName;
  }

---------------------------------------
对象
Vuex.mapState({
  citdData: (state) => state.cityData,
  curCityName:'curCityName'
})

{
  cityData () {
    return this.$store.state.cityData
  },

  curCityName () {
    return this.$store.state.curCityName
  }
}




################
  ##对象展开运算符
    ...obj1



## moduels
  使用了 moduels 推荐大家都使用上命名空间：
  在模块中写上：
      namespaced: true
