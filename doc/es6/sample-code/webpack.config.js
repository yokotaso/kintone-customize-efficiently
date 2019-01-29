const path = require('path');

module.exports = {
  mode: "development",
  entry: {
      'kintone-create-edit-show': [
          './src/kintone-create-edit-show.js'
        ]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "entry"
                    }
                ]
            ]
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: {
    vue: 'Vue',
  }
};