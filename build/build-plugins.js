/*!
 * Script to build our plugins to use them separately.
 * Copyright 2019 The Bootstrap Authors
 * Copyright 2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict'

const path = require('path')
const rollup = require('rollup')
const { babel } = require('@rollup/plugin-babel')
const banner = require('./banner.js')

const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Inline the required helpers in each file
    babelHelpers: 'inline'
  })
]
const coreuiPlugins = {
  Data: path.resolve(__dirname, '../js/src/dom/data.js'),
  EventHandler: path.resolve(__dirname, '../js/src/dom/event-handler.js'),
  Manipulator: path.resolve(__dirname, '../js/src/dom/manipulator.js'),
  Polyfill: path.resolve(__dirname, '../js/src/dom/polyfill.js'),
  SelectorEngine: path.resolve(__dirname, '../js/src/dom/selector-engine.js'),
  Alert: path.resolve(__dirname, '../js/src/alert.js'),
  AsyncLoad: path.resolve(__dirname, '../js/src/async-load.js'),
  Button: path.resolve(__dirname, '../js/src/button.js'),
  Carousel: path.resolve(__dirname, '../js/src/carousel.js'),
  ClassToggler: path.resolve(__dirname, '../js/src/class-toggler.js'),
  Collapse: path.resolve(__dirname, '../js/src/collapse.js'),
  Dropdown: path.resolve(__dirname, '../js/src/dropdown.js'),
  Modal: path.resolve(__dirname, '../js/src/modal.js'),
  Popover: path.resolve(__dirname, '../js/src/popover.js'),
  ScrollSpy: path.resolve(__dirname, '../js/src/scrollspy.js'),
  Sidebar: path.resolve(__dirname, '../js/src/sidebar.js'),
  Tab: path.resolve(__dirname, '../js/src/tab.js'),
  Toast: path.resolve(__dirname, '../js/src/toast.js'),
  Tooltip: path.resolve(__dirname, '../js/src/tooltip.js')
}
const rootPath = path.resolve(__dirname, '../js/dist/')

const defaultPluginConfig = {
  external: [
    coreuiPlugins.Data,
    coreuiPlugins.EventHandler,
    coreuiPlugins.SelectorEngine
  ],
  globals: {
    [coreuiPlugins.Data]: 'Data',
    [coreuiPlugins.EventHandler]: 'EventHandler',
    [coreuiPlugins.SelectorEngine]: 'SelectorEngine'
  }
}

// eslint-disable-next-line complexity
function getConfigByPluginKey(pluginKey) {
  if (
    pluginKey === 'Data' ||
    pluginKey === 'Manipulator' ||
    pluginKey === 'EventHandler' ||
    pluginKey === 'Polyfill' ||
    pluginKey === 'SelectorEngine' ||
    pluginKey === 'Util' ||
    pluginKey === 'Sanitizer'
  ) {
    return {
      external: [coreuiPlugins.Polyfill],
      globals: {
        [coreuiPlugins.Polyfill]: 'Polyfill'
      }
    }
  }

  if (pluginKey === 'Alert' || pluginKey === 'Tab') {
    return defaultPluginConfig
  }

  if (
    pluginKey === 'AsyncLoad' ||
    pluginKey === 'Button' ||
    pluginKey === 'Carousel' ||
    pluginKey === 'ClassToggler' ||
    pluginKey === 'Collapse' ||
    pluginKey === 'Modal' ||
    pluginKey === 'ScrollSpy' ||
    pluginKey === 'Sidebar'
  ) {
    const config = Object.assign(defaultPluginConfig)
    config.external.push(coreuiPlugins.Manipulator)
    config.globals[coreuiPlugins.Manipulator] = 'Manipulator'
    return config
  }

  if (pluginKey === 'Dropdown' || pluginKey === 'Tooltip') {
    const config = Object.assign(defaultPluginConfig)
    config.external.push(coreuiPlugins.Manipulator, '@popperjs/core')
    config.globals[coreuiPlugins.Manipulator] = 'Manipulator'
    config.globals['@popperjs/core'] = 'createPopper'
    return config
  }

  if (pluginKey === 'Popover') {
    return {
      external: [
        coreuiPlugins.Data,
        coreuiPlugins.SelectorEngine,
        coreuiPlugins.Tooltip
      ],
      globals: {
        [coreuiPlugins.Data]: 'Data',
        [coreuiPlugins.SelectorEngine]: 'SelectorEngine',
        [coreuiPlugins.Tooltip]: 'Tooltip'
      }
    }
  }

  if (pluginKey === 'Sidebar') {
    const config = Object.assign(defaultPluginConfig)
    config.external.push(coreuiPlugins.Manipulator, 'perfect-scrollbar')
    config.globals['perfect-scrollbar'] = 'PerfectScrollbar'
    return config
  }

  if (pluginKey === 'Toast') {
    return {
      external: [
        coreuiPlugins.Data,
        coreuiPlugins.EventHandler,
        coreuiPlugins.Manipulator
      ],
      globals: {
        [coreuiPlugins.Data]: 'Data',
        [coreuiPlugins.EventHandler]: 'EventHandler',
        [coreuiPlugins.Manipulator]: 'Manipulator'
      }
    }
  }
}

const utilObjects = [
  'Util',
  'Sanitizer'
]

const domObjects = [
  'Data',
  'EventHandler',
  'Manipulator',
  'Polyfill',
  'SelectorEngine'
]

const build = async plugin => {
  console.log(`Building ${plugin} plugin...`)

  const { external, globals } = getConfigByPluginKey(plugin)
  const pluginFilename = path.basename(coreuiPlugins[plugin])
  let pluginPath = rootPath

  if (utilObjects.includes(plugin)) {
    pluginPath = `${rootPath}/util/`
  }

  if (domObjects.includes(plugin)) {
    pluginPath = `${rootPath}/dom/`
  }

  const bundle = await rollup.rollup({
    input: coreuiPlugins[plugin],
    plugins,
    external
  })

  await bundle.write({
    banner: banner(pluginFilename),
    format: 'umd',
    name: plugin,
    sourcemap: true,
    globals,
    file: path.resolve(__dirname, `${pluginPath}/${pluginFilename}`)
  })

  console.log(`Building ${plugin} plugin... Done!`)
}

const main = async () => {
  try {
    await Promise.all(Object.keys(coreuiPlugins).map(plugin => build(plugin)))
  } catch (error) {
    console.error(error)

    process.exit(1)
  }
}

main()
