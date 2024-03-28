// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'coreui:coreui', // https://atmospherejs.com/coreui/coreui
  summary: 'The most popular front-end framework for developing responsive, mobile-first projects on the web rewritten and maintained by the CoreUI Team.',
  version: '5.0.0',
  git: 'https://github.com/coreui/coreui.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/coreui.css',
    'dist/js/coreui.js'
  ], 'client')
})
