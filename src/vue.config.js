/* 配置别名 */
module.exports = {
  // 配置跨域请求
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/postTrial/save',
        ws: true,
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  },

  configurewebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}