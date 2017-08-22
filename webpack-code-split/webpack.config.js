const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack=require("webpack");
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code splitting'
        })
    ]
}