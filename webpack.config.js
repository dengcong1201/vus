//这个就是webpack的配置文件

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackplugin = require('copy-webpack-plugin');

//需要暴露一个对象，注意，这里我用的暴露的方式还是commonjs方式
module.exports = {
  //模式
  mode:'development',   //development  |  prodution

  //入口
  entry:'./src/index.js',

  //出口
  output:{
    //出口的位置（绝对路径）
    path:path.resolve(__dirname,'./dist'),  //项目根目录下的dist 文件夹
    filename:'bundle.js',                   //打包之后文件的名字
  },

  //插件
  plugins:[
    //自动生成一个 HTML 文件在出口的位置，并且会自动在这个生成的文件中引入 打包生成的js文件。
    new HtmlWebpackPlugin({
      title:'三只松鼠',
      filename: 'zyh.html',
      template: './index.html',  //将index.html作为生成的zyh.html的模板
    }),

    //copy
    new CopyWebpackplugin([
      {
        from:'./lib/jquery.min.js',
        to:'lib'
      }
    ])
  ],

  //解析
  resolve:{
    /**
     * 别名：
     *  1、vue/dist/vue.esm.js -> a
     */
    alias:{
      vue:'vue/dist/vue.esm.js'
    }
  }
}
