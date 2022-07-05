const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

    mode: 'production',

    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        devMiddleware:{
           writeToDisk: true,
        },
        port: 1239,
    },

 module:{
    rules:[
        {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options:{
                    minimize: true,
                }
            }
        ]
        },

        {
       test: /\.css$/,
       use:[
    
        MiniCssExtractPlugin.loader,
        'css-loader'
       ]

       
        },

        {
        
          test: /\.(png|jpe?g|gif)$/i,
          use:[
            {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
             
            },
          ]
        },
        

        {

        }
    ]
 },

 plugins: [
    new HtmlWebpackPlugin({filename:"index.html", 
    template: "./src/index.html" }),

    new MiniCssExtractPlugin({filename:"css/style.css"}),
 ],

};