var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client', // WebpackDevServer host and port
        './src/index.js' // Your appʼs entry point
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'build.js',
        publicPath: '/build'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}