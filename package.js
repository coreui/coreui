// package metadata file for Meteor.js

Package.describe({
  name: 'coreui:coreui', // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '3.0.0-alpha.14',
  git: 'https://github.com/coreui/coreui.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'dist/css/coreui.css',
    'dist/js/coreui.js'
  ], 'client');
});
