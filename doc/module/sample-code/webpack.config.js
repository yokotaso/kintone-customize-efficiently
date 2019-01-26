const path = require('path');

module.exports = {
  entry: {
      'kintone-create-submit' : './src/kintone-create-submit.js',
      'kintone-show-add-edit': './src/kintone-show-add-edit.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  externals: {
      vue: 'Vue',
      jquery: 'jQuery'
  }
};