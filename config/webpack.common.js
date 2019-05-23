const path = require('path');
const webpack = require('webpack');

module.exports = server => {
  return {
    context: path.join(__dirname, '../client'),
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, '../public/dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/react']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(`http://${server.host}:${server.port}`),
      }),
    ],
  };
};


