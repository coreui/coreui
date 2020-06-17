/* eslint-env node */

const commonjs = require('@rollup/plugin-commonjs')
const configRollup = require('./rollup.bundle')
const replace = require('@rollup/plugin-replace')


const config = {
  ...configRollup,
  input: 'js/tests/integration/bundle-modularity.js',
  output: {
    file: 'js/coverage/bundle-modularity.js',
    format: 'iife'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}

config.plugins.unshift(commonjs())

module.exports = config
