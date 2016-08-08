const path = require('path')

module.exports = {
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: [],
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg|svg|ttf|woff|woff2|eot)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}
