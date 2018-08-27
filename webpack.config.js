const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/Index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({template: './src/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ]
}
