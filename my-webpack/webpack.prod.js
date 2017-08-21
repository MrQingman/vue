const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const webpack=require("webpack");
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}