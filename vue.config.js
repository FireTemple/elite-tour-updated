const webpack = require('webpack')

module.exports = {
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
