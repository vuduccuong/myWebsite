const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    //mode: 'development',
    mode: 'production',
    entry: {
        "index": './public/ClientApp/Source/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/ClientApp/Dist'),
        filename: '[name]/[name]_bundle.js',
        publicPath: 'Dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
