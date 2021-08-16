module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({ //配置项，详见官方文档
                        remUnit: 75
                    }),
                ]
            }
        }
    },
	devServer: {
	    host: '127.0.0.1',
	    port: 8080,
	  },
}