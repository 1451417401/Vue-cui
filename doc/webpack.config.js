const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss', '.css'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader',
            }),
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: ['css-loader'],
                        fallback: 'vue-style-loader'
                    }),
                    scss: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader'],
                        fallback: 'vue-style-loader'
                    })
                },
                sourceMap: true
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
}
