'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const pkg     = require(path.resolve(__dirname, '../package.json'))
const BUNDLE  = process.env.BUNDLE === 'true'
const year    = new Date().getFullYear()

let fileDest  = 'coreui-utilities.js'
const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**', // Only transpile our source code
    externalHelpersWhitelist: [ // Include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'objectSpread'
    ]
  })
]

if (BUNDLE) {
  fileDest = 'utilities.bundle.js'
  plugins.push(resolve())
}

export default {
  input: path.resolve(__dirname, '../js/src/utilities/index.js'),
  output: {
    banner: `/*!
  * CoreUI v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author.name}
  * Licensed under MIT (${pkg.homepage})
  */`,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    name: 'utilities'
  },
  plugins
}
