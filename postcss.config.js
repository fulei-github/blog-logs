/*
 * @Descripttion:适配配置
 * @version: 1.0.0
 * @Author: fulei🐰
 * @Date: 2023-02-21 11:46:15
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 11:46:23
 */
module.exports = {
  plugins: {
    'postcss-px-to-viewport': { // http://npm.taobao.org/package/postcss-px-to-viewport
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      exclude: [/node_modules/, /pc/], // If value is regexp, will ignore the matches files.If value is array, the elements of the array are regexp.
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    },
    cssnano: { // 主要用来压缩和清理CSS代码
      'cssnano-preset-advanced': {
        zindex: false,
        autoprefixer: false
      }
    }
  }
}
