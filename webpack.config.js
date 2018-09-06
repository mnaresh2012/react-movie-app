const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {   
                test: /\.css$/, 
                loader: 'style-loader!css-loader'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "file-loader?name=/src/images/[name].[ext]"
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
