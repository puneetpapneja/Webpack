const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(commonConfig,{
  mode:'production',
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins:[
    new miniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],  
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        
        
      }),
    ],
    
  },
})