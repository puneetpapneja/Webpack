const path = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
      new CleanWebpackPlugin(),
      new htmlWebpackPlugin({
          filename:'index.html',
          inject:true,
          template:path.resolve(__dirname,'src','index.html')
      })
  ],
  module: {
    rules: [      
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  }
}