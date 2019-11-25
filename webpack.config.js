const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
     entry : './src/index.js',
     output : {
          path : path.join(__dirname,'./dist'),
          filename : 'bundle.js'
     },
     module : {
         rules : [
             {
                 test : /\.js$/,
                 exclude : /node_modules/,
                 use : {
                     loader : 'babel-loader'
                 }
             },
             {
                test : /\.(png|svg|JPG|gif)$/,
                use : [
                    'file-loader'
             ]
            }
            
         ]
     },
     plugins : [
         new hwp({
             template : './public/index.html'
         })
     ]

     
}