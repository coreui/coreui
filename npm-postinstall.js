#!/usr/bin/env node

const pkg = require(require('path').resolve('./package.json'))
const log = console.log

const VERSIONS = {
  '@coreui/coreui': 'https://coreui.io/pro/',
  '@coreui/angular': 'https://coreui.io/pro/angular/',
  '@coreui/react': 'https://coreui.io/pro/react/',
  '@coreui/vue': 'https://coreui.io/pro/vue/'
}

const url = pkg.homepage.replace('.io/', '.io/pro/')

log('\x1b[32m')
log('\x1b[1mThank you for using free version of CoreUI! \x1b[22m')
log(`CoreUI is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying CoreUI Pro Version: \x1b[4m${VERSIONS[pkg.name]}\x1b[24m]`)
log('\x1b[39m')

