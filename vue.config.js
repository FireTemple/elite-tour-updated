const webpack = require('webpack')

module.exports = {
  devServer: {
    proxy: {
      '/test': {
        target: 'http://localhost:8081',
        pathReWrite:{
          '^/test': ''
        },
        changeOrigin: true,
        secure:false
      },
      '/api': {
        target: 'http://localhost:8081',
        pathReWrite:{
          '^/api': ''
        },
        changeOrigin: true,
        secure:false
      },
    }
  },
  configureWebpack: {
    resolve: {
      // 已经默认配置了@ 是项目路径
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'img': '@/assets/img'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
      })
    ]
  }
}
