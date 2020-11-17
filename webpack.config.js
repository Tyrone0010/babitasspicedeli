var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.jsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss', 'png', 'jpg', 'jpeg'],
    },
    module : {
        rules : [
            {test : /\.jsx$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(png|jpg|jpeg)$/i, type: 'asset/resource'}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]
}
