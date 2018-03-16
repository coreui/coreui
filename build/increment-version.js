#!/usr/bin/env node

'use strict'

const path    = require('path')
const pkg     = require(path.resolve(__dirname, '../package.json'))
const semver  = require('semver');

function currentVersion() {
  return semver.valid(pkg.version);
}

function incrementVersion(args) {
  if (args.length !== 1) {
    console.error('USAGE: increment-version level')
    console.error('Got arguments:', args)
    process.exit(1)
  }
  const level = args[0];
  const version = semver.inc(currentVersion(), level);
}

incrementVersion(process.argv.slice(2));
