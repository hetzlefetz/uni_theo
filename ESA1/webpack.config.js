const CreateFileWebpack = require('create-file-webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CreateFileWebpack({
      path: './dist',
      fileName: 'index.html',
      content:
        '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>ESA 1</title></head><body><div id="app"></div><script src="./main.js"></script></body></html>',
    }),
  ],
};
