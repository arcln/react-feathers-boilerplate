const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./default.json');
const prodConfig = require('./production.json');

module.exports = merge(common({ ...config, ...prodConfig }), {
  mode: 'production',
});
