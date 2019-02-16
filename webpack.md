#前端自己的模块化之路
  1、script标签要啥引啥
  2、AMD规范（require.js）
  3、CMD规范（sea.js）
  4、ESM规范（es6中出现）

#webpack(打包)之路
  1、手动压缩，手动打包
  2、grunt
  3、gulp
  4、webpack(最火、最热、用的最多)

#结合 webpack 搭建起 vue 的开发环境
  1、创建一个项目并初始化
  2、下载项目需要的资源包
      - 生产环境
        - vue

      - 开发环境
        - webpack 
        - webpack-cli
  
  3、项目根目录下面创建一个 src 文件夹（source意思 源文件），这个文件夹下面放源文件
  
  4、项目根目录下面创建一个webpack.config.js （webpack 配置文件）

  5、src下面创建一个 js 文件作为项目的入口文件

  6、配置webpack的文件

  7、简单使用一下

  8、根目录 下面创建一个index.html 文件，作为项目的页面入口
## 项目目录结构

  - dist    (最终生成的文件 - 这个文件夹才是最终需要上传到服务器上的代码)
  - node_modules(放资源包)
  -src      (源文件，里面放置一些项目总结写的模块，被webpack打包的文件，都需要放到这个文件夹下面)
  - index.js     (项目的打包入口)
  - index.html   (项目页面入口)
  - package_lock.json (包锁文件)
  - package.json (项目依赖的资源包与项目的描述信息的文件)
  - webpack.config.js   (webpack的配置文件)


## webpack 的配置

    -模式       指定这次打包是打的开发环境用的包，还是生产环境用的包 4.x+ 支持的
  四大核心
    - 入口      指定webpack需要打包的项目的入口文件
    - 出口      打包之后生成的文件需要放到哪个位置
    - 加载器    默认情况下，webpack只是简单的打包js文件，如果需要打包 css img 之类的文件，则需要添加相对应的加载器去处理这种类型的文件
    - 插件      插件是加载器干不了的事情，就可以用插件来干

  如何配置：
    就是在webpack.config.js文件中，暴露一个写用这些选项的对象。


## 如何调用 webpack 开始打包
  命令行中，使用  webpack 这个命令

    - ./node_modules/.bin/webpack
    - npx webpack(npm 5.x+ 最增的功能)
    -配置 package.json 的 npm 脚本

## 将根目录下的 index.html 打包到dist文件夹里
  使用一款插件 ： HtmlWebpackPlugin

## 插件的使用
  1、找到需要使用的插件并安装   注意短横线(开发依赖)
  2、在webpack.config.js中引入他
  3、在plugins选项中调用他，并按照他的文档去做配置

##  那个代码中需要使用vue， 就在哪里像commonJS 一样通过一种方式去引入他就ok
    通过es6 的模块引入
      import 'xxx'
      import Vue from  'vue'

     import Vue from  'vue';  引入的vue到时引入的事啥？
          1、具体找到 node_modules下面的 vue 文件夹
          2、找到package.json 中的 main和 moudule 选项的值
          3、如果通过 commonJS require 的方式去引入 vue，引入的事main选项指定的
          4、如果通过exm import的方式引入vue ，引入的事module选项指定的文件


    ### import Vue from  'vue'； 默认页面不ok？
        vue.common.js
        vue.esm.js

        vue.runtime    运行时的版本     render 函数去渲染模板
        vue.没runtime   运行时 + 编译    （完整版）template

        修改 引入的vue文件为 esm完整版的版本
            ps：请不要直接修改node_modules下面vue的package.json 可以通过设置 webpack的别名这个选项完成


## 自动打包(开发时的打包)
  webpack-dev-server资源包
    1、npm install --save-dev webpack-dev-server
    2、配置
    3、webpack 启动换成 webpack-dev-server 启动


## 引入模块的方式去引入 样式文件报错
    css-loader         对css文件做转换   转换成 webpack所能识别的模块css文件
    style-loader       对上一步转换之后的 css模块文件在做解析，解析到页面的style标签中去

  1、npm install --save-dev css-loader style-loader
  2、配置