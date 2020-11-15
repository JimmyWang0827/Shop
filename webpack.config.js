const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve('./build')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.jpg|png|gif|ttf|bmp|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940&esModule=false'
            }]
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        open: true
    },
    plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
        template: './index.html'
    })],
    resolve: {
        alias: {
            $views: path.resolve('./src/views'),
            $assets: path.resolve('./src/assets')
        }
    }
}
