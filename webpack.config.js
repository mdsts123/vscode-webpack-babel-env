const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV, // "production" | "development" | "none"
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  chrome: '58',
                  ie: '10',
                  safari:'9'
                },
              },
            ],
          ],
          plugins:[
            '@babel/plugin-proposal-class-properties',
          ]
        },
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  },
};
