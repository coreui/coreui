import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import banner from './banner.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BUNDLE = process.env.BUNDLE === 'true'
const BOOTSTRAP = process.env.BOOTSTRAP === 'true'
const ESM = process.env.ESM === 'true'

let destinationFile = BOOTSTRAP ? `bootstrap${ESM ? '.esm' : ''}` : `coreui${ESM ? '.esm' : ''}`
const external = ['@popperjs/core']
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'bundled'
  }),
  BOOTSTRAP && replace({
    preventAssignment: false,
    delimiters: ['', ''],
    '/coreui': '/coreui', // prevents changes in URLs
    coreui: 'bs',
    '-coreui': '-bs',
    'coreui=': 'bs=', // [data-coreui="navigation"] => [data-bs="navigation"] (workaround for `preventAssignment` being true),
    '--cui-': '--bs-'
  })
]
const globals = {
  '@popperjs/core': 'Popper'
}

if (BUNDLE) {
  destinationFile += '.bundle'
  // Remove last entry in external array to bundle Popper
  external.pop()
  delete globals['@popperjs/core']
  plugins.push(
    replace({
      'process.env.NODE_ENV': '"production"',
      preventAssignment: true
    }),
    nodeResolve()
  )
}

const rollupConfig = {
  input: path.resolve(__dirname, `../js/index.${ESM ? 'esm' : 'umd'}.js`),
  output: {
    banner: banner(),
    file: path.resolve(__dirname, `../dist/js/${destinationFile}.js`),
    format: ESM ? 'esm' : 'umd',
    globals,
    generatedCode: 'es2015'
  },
  external,
  plugins
}

if (!ESM) {
  rollupConfig.output.name = BOOTSTRAP ? 'bootstrap' : 'coreui'
}

export default rollupConfig
