const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          '@': [ 
              path.resolve(__dirname, 'src'), 
              path.resolve(__dirname, 'helpers'),
              path.resolve(__dirname,'libs')
            ]
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./public/index.html",
        }),
    ],
};