'use strict'

const fs = require('fs')
const listSelectors = require('list-selectors')

listSelectors(['dist/css/coreui.css'], cssList => {
  const classes = JSON.parse(JSON.stringify(cssList, null, 2)).simpleSelectors.classes
  fs.writeFileSync('migration/css_details.json', JSON.stringify(cssList, null, 2), 'utf-8')

  const replace = {}
  const key = 'replace'
  replace[key] = []

  classes.forEach(element => {
    const data = {
      old: element.replace('.c-','.'),
      new: element
    }
    if (data.old !== data.new) {
      replace[key].push(data)
    }
  })
  fs.writeFileSync('migration/css_prefix_migration.json', JSON.stringify(replace, null, 2), 'utf-8')
})
