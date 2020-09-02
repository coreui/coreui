'use strict'

const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const banner = require('./banner.js')
const replace = require('@rollup/plugin-replace')

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'

let fileDest = `coreui${ESM ? '.esm' : ''}`
const external = ['perfect-scrollbar', '@popperjs/core']
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'bundled'
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]
const globals = {
  'perfect-scrollbar': 'PerfectScrollbar',
  '@popperjs/core': 'createPopper'
}

if (BUNDLE) {
  fileDest += '.bundle'
  // Remove entries to bundle Popper and Perfect Scrollbar
  external.pop()
  external.pop()
  delete globals['@popperjs/core']
  delete globals['perfect-scrollbar']
  plugins.push(nodeResolve())
}

const rollupConfig = {
  input: path.resolve(__dirname, `../js/index.${ESM ? 'esm' : 'umd'}.js`),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDest}.js`),
    format: ESM ? 'esm' : 'umd',
    globals
  },
  external,
  plugins
}

if (!ESM) {
  rollupConfig.output.name = 'coreui'
}

module.exports = rollupConfig
