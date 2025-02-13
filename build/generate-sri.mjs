#!/usr/bin/env node

/*!
 * Script to generate SRI hashes for use in our docs.
 * Remember to use the same vendor files as the CDN ones,
 * otherwise the hashes won't match!
 *
 * Copyright 2017-2025 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sh from 'shelljs'
import pkg from '../package.json' with { type: 'json' }

const __dirname = path.dirname(fileURLToPath(import.meta.url))

sh.config.fatal = true

const configFile = path.join(__dirname, '../hugo.yml')
const isCanaryVersion = pkg.version.includes('canary')

// Array of objects which holds the files to generate SRI hashes for.
// `file` is the path from the root folder
// `configPropertyName` is the hugo.yml variable's name of the file
const files = [
  {
    file: 'dist/css/coreui.min.css',
    configPropertyName: 'css_hash'
  },
  {
    file: 'dist/css/coreui.rtl.min.css',
    configPropertyName: 'css_rtl_hash'
  },
  {
    file: 'dist/css/themes/bootstrap/bootstrap.min.css',
    configPropertyName: 'css_bs_hash'
  },
  {
    file: 'dist/css/themes/bootstrap/bootstrap.rtl.min.css',
    configPropertyName: 'css_bs_rtl_hash'
  },
  {
    file: 'dist/js/coreui.min.js',
    configPropertyName: 'js_hash'
  },
  {
    file: 'dist/js/coreui.bundle.min.js',
    configPropertyName: 'js_bundle_hash'
  },
  {
    file: 'dist/js/bootstrap.min.js',
    configPropertyName: 'js_bs_hash'
  },
  {
    file: 'dist/js/bootstrap.bundle.min.js',
    configPropertyName: 'js_bs_bundle_hash'
  },
  {
    file: 'node_modules/@popperjs/core/dist/umd/popper.min.js',
    configPropertyName: 'popper_hash'
  }
]

for (const { file, configPropertyName } of files) {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      throw error
    }

    const propertyName = isCanaryVersion ? `canary_${configPropertyName}` : configPropertyName
    const algorithm = 'sha384'
    const hash = crypto.createHash(algorithm).update(data, 'utf8').digest('base64')
    const integrity = `${algorithm}-${hash}`

    console.log(`${propertyName}: ${integrity}`)

    sh.sed('-i', new RegExp(`^(\\s+${propertyName}:\\s+["'])\\S*(["'])`), `$1${integrity}$2`, configFile)
  })
}
