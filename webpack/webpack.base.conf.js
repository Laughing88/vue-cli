const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    entry: './src/main.js',  //指定打包的入口文件
    output: {
        path: __dirname + '/dist',  // 注意：__dirname表示webpack.config.js所在目录的绝对路径
        filename: 'build.js'		   //输出文件
    },
    resolve: {
        alias:{
            'vue$':'vue/dist/vue.esm.js'//配置别名 确保webpack可以找到.vue文件
        },
        extensions: ['*', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 12000,
                      name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html', // dist目录下生成的文件名
            template: './src/index.html'
        })
    ],
}