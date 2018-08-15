const path = require('path');
 
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './app/temp/scripts')
    } 
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