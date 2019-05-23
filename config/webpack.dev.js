const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./default.json');

module.exports = merge(common(config), {
  mode: 'development',
});
