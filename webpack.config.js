const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './dist'),    // 输出的路径
        filename: 'bundle.js',                      // 打包后文件
        publicPath: '/',
    },
    devtool: 'inline-source-map',                   //source map
    devServer: {                                    //webpack devserver
        contentBase: './dist'                       //发布文件位置
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
