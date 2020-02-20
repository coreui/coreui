// package metadata file for Meteor.js

Package.describe({
  name: 'coreui:coreui', // https://atmospherejs.com/coreui/coreui
  summary: 'Open Source UI Kit built on top of Bootstrap 4',
  version: '3.0.0',
  git: 'https://github.com/coreui/coreui.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'dist/css/coreui.css',
    'dist/js/coreui.js'
  ], 'client');
});
