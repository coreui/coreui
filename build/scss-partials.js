#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const base = path.resolve(__dirname, '..')
const scss = path.resolve(base, './scss')
const partials = path.resolve(scss, './partials')

rimraf(partials, () => {
  fs.mkdir(partials, {
    recursive: true
  }, err => {
    if (err) {
      throw err
    }

    fs.readdir(scss, (err, files) => {
      if (err) {
        throw err
      }

      files.forEach(file => {
        if (file.indexOf('.scss') > -1 && file.charAt(0) === '_') {
          const content = `@import "../bootstrap";\n@import "../${file.replace('_', '').replace('.scss', '')}";\n`
          fs.writeFile(`${partials}/${file.replace('_', '')}`, content, err => {
            if (err) {
              throw err
            }
          })
        }
      })
    })
  })
})
