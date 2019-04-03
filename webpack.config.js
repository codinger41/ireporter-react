/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const webpackDev = require('./webpack.config.development');

module.exports = (env) => {
  let envConfig;
  !env.mode ? (envConfig = webpackDev) : (envConfig = require(`./webpack.config.${env.mode}`));
  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
