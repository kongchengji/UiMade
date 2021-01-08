var path=require('path');
// 配置vue.config.js,支持markdown语法
module.exports={
    chainWebpack: config => {
        config.module
          .rule('md')
          .test(/\.md$/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            raw: true
          })
    },
}