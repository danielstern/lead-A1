import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: path.resolve(__dirname,'index.spec.js'),
    output: {
        path: path.resolve(__dirname,),
        filename: '[name].js',
        publicPath: '/',
    },
    devServer:{
        open:true,
        inline:true
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /\.js?/,
            loader:'babel-loader'
        }]
    }
}