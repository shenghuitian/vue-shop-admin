const path = require('path') // path是node里面的一个模块，主要作用是对路径进行处理

function resolve(dir) {
  return path.join(__dirname, dir) // path.join()方法会把给定的path片段连在一起
}

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 打包后目录
  devServer: {
    // 跨域代理
    // proxy: {
    //   '/': {
    //     target: 'https://www.liulongbin.top:8888/api/private/v1/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': '/'
    //     }
    //   }
    // }
  },
  // vue-cli 4.x 版本别名配置方法
  chainWebpack(config) {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  }
}