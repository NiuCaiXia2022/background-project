const { defineConfig } = require('@vue/cli-service')

// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
// module.exports = defineConfig({
//   chainWebpack(config) {
//     // 设置 svg-sprite-loader
//     config.module.rule('svg').exclude.add(resolve('src/icons')).end()
//     config.module
//       .rule('icons')
//       .test(/\.svg$/)
//       .include.add(resolve('src/icons'))
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//       .end()
//   },
//   transpileDependencies: true,
//   devServer: {
//     port: 8888,
//     https: false,
//     host: 'localhost',
//     proxy: {
//       [process.env.VUE_APP_BASE_API]: {
//         target: process.env.VUE_APP_SERVER_URL,
//         changeOrigin: true,
//         pathRewrite: {
//           ['^' + process.env.VUE_APP_BASE_API]: ''
//         }
//       }
//     }
//   }
// })

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 解决第一行代码爆红的现象,
  transpileDependencies: true,
  devServer: {
    port: 8888,
    https: false,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
