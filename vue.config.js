module.exports = {
    lintOnSave: false,
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://localhost:3012/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
        before: app => { }
    }
};
