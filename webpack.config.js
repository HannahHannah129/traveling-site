const path = require('path');
 
module.exports = {
    entry: {
        App: './app/assets/scripts/App.js',
        Vendor: './app/assets/scripts/Vendor.js'
    },
    output: {
    // [name].js instead of setting it to its actual value fe (App.js) will keep the name of the js file dynamic ! 
        filename: '[name].js',
        path: path.resolve(__dirname, './app/temp/scripts')
    } ,


};





/*
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "./app/temp/scripts",
    filename: "App.js"
  },
  module: {
    // save "loaders" to "rules"
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
         exclude: /[node_modules]/
      }
    ]
  }
}
*/