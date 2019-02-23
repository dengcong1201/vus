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

