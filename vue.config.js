module.exports = {
  publicPath: '/', //根路经  './'相对路径
  outputDir: 'dist', //构建输出目录
  assetsDir: 'assets', //静态资源目录（js,css,img,fonts）
  lintOnSave: false, //是否开启eslint保存监测，有效值：true  ||  false  ||  'error'
  devServer: {
    open: false, //项目运行起来自动打开浏览器
    host: '0.0.0.0', //可选值 'localhost'  ||  '127.0.0.1'  ||  '0.0.0.0'( 本机ip)
    port: 8870, //端口号
    https: false, // http://127.0.0.1:8081/  与   https://127.0.0.1:8081/的区别
    hotOnly: true, //热更新
    headers: {
      'Access-Control-Allow-Origin': '*', // 配置跨域请求头，解决开发环境的跨域问题
    },
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://locallhost:8870/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          //地址重写
          '^/api': '',
        },
      },
    },
  },
  //...
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ],
      },
    },
  },
}
