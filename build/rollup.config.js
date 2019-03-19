'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const banner  = require('./banner.js')

const BUNDLE  = process.env.BUNDLE === 'true'

let fileDest  = 'coreui.js'
const external = ['jquery', 'perfect-scrollbar', 'popper.js']
const plugins = [
  babel({
    exclude: 'node_modules/**', // Only transpile our source code
    externalHelpersWhitelist: [ // Include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'defineProperty',
      'objectSpread'
    ]
  })
]
const globals = {
  jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
  'perfect-scrollbar': 'PerfectScrollbar',
  'popper.js': 'Popper'
}

if (BUNDLE) {
  fileDest = 'coreui.bundle.js'
  // Remove last entry in external array to bundle Popper and 
  external.pop()
  external.pop()
  delete globals['popper.js']
  delete globals['perfect-scrollbar']
  plugins.push(resolve())
}

module.exports = {
  input: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    globals,
    name: 'coreui'
  },
  external,
  plugins
}
