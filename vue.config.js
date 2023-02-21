/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 11:36:50
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:24:55
 */
module.exports = {
  publicPath: './', // 配置根路径
  outputDir: 'blog', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js\css\img)
  lintOnSave: true, // 是否开启eslint
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    open: true, // 是否自动在浏览器打开
    host: '0.0.0.0', // 真机测试 0.0.0.0
    port: 9083, // 配置端口号
    https: false, // 是否配置https
    // hot: true,
    // hotOnly: true, // 是否热更新
    // disableHostCheck: true,
    proxy: {
      '/api': {
        // target: "http://127.0.0.1:7001/api",
        target: 'http://47.94.18.125:7001',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
