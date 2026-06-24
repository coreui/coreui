#!/usr/bin/env node

/*!
 * Script to run vnu-jar if Java is available.
 * Copyright 2017-2026 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

import { execFile, spawn } from 'node:child_process'
import vnu from 'vnu-jar'

execFile('java', ['-version'], (error, stdout, stderr) => {
  if (error) {
    console.error('Skipping vnu-jar test; Java is probably missing.')
    console.error(error)
    return
  }

  console.log('Running vnu-jar validation...')

  const is32bitJava = !/64-Bit/.test(stderr)

  // vnu-jar accepts multiple ignores joined with a `|`.
  // Also note that the ignores are string regular expressions.
  const ignores = [
    // "autocomplete" is included in <button> and checkboxes and radio <input>s due to
    // Firefox's non-standard autocomplete behavior - see https://bugzilla.mozilla.org/show_bug.cgi?id=654072
    'Attribute “autocomplete” is only allowed when the input type is.*',
    'Attribute “autocomplete” not allowed on element “button” at this point.',
    // Per https://www.w3.org/TR/html-aria/#docconformance having "aria-disabled" on a link is
    // NOT RECOMMENDED, but it's still valid - we explain in the docs that it's not ideal,
    // and offer more robust alternatives, but also need to show a less-than-ideal example
    'An “aria-disabled” attribute whose value is “true” should not be specified on an “a” element that has an “href” attribute.',
    // A `code` element with the `is:raw` attribute coming from remark-prismjs (Astro upstream possible bug)
    'Attribute “is:raw” is not serializable as XML 1.0.',
    'Attribute “is:raw” not allowed on element “code” at this point.',
    // Astro's expecting trailing slashes on HTML tags such as <br />
    'Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.',
    // Allow `switch` attribute.
    'Attribute “switch” not allowed on element “input” at this point.',
    // CoreUI custom controls (chip input, OTP) build their labelled <input> in JS on
    // init, so the static markup the validator sees has a `for` with no target yet.
    'The value of the “for” attribute of the “label” element must be the ID of a non-hidden form control.',
    // Astro 6's `redirects` config emits the docs-root redirect as
    // <meta http-equiv="refresh" content="0;url=..."> — valid HTML, but the validator
    // wants a space after the semicolon, and Astro's output isn't configurable.
    'Bad value .*0;url=.*Expected a space character.*',
    // Same Astro-generated docs-root redirect stub: a bare <html> with no `lang`.
    // Every real page sets `lang` via the Shell layout; only this stub lacks it.
    'Consider adding a .lang. attribute to the .html. start tag.*'
  ].join('|')

  const args = [
    '-jar',
    `"${vnu}"`,
    '--asciiquotes',
    '--skip-non-html',
    '--Werror',
    `--filterpattern "${ignores}"`,
    '_site/',
    'js/tests/'
  ]

  // For the 32-bit Java we need to pass `-Xss512k`
  if (is32bitJava) {
    args.splice(0, 0, '-Xss512k')
  }

  console.log(`command used: java ${args.join(' ')}`)

  return spawn('java', args, {
    shell: true,
    stdio: 'inherit'
  })
    .on('exit', process.exit)
})
