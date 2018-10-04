const path = require('path');

module.exports = {
    mode: "development",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: path.resolve(__dirname, "public"),
        watchContentBase: true,
        compress: true
    }
};