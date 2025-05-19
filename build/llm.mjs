#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globby } from 'globby'
import { decode } from 'html-entities'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.resolve(__dirname, '../_gh_pages')

const mdFiles = await globby('**/llm.md', {
  cwd: inputDir,
  absolute: true
})

function rewriteLinks(markdown) {
  let output = markdown

  output = output.replace(/\[([^\]]+)\]\((\/[^)#]+)(\/)?(#.*?)?\)/g, '[$1]($2llm.md)')

  output = output.replace(
    /<a href="(\/[^"#?]+)(\/)?(#.*?)?">/g,
    (_, path, __, hash = '') =>
      `<a href="${path}/llm.md${hash}">`
  )

  return output.trim()
}

function applyHeadingPrefix(content, componentName) {
  return content.replace(/^(#{1,6})\s+(.*)$/gm, (_, hashes, title) => {
    const normalized = title.trim()

    if (normalized.startsWith(`Bootstrap 5 ${componentName}`)) {
      return `${hashes} ${normalized}`
    }

    if (hashes === '#') {
      return `# Bootstrap 5 ${componentName} with CoreUI`
    }

    return `${hashes} Bootstrap 5 ${componentName} – ${normalized}`
  })
}

async function convertFile(filePath) {
  const raw = decode(fs.readFileSync(filePath, 'utf8'))

  const frontMatterMatch = raw.match(/^---[\s\S]*?---/)
  const frontMatter = frontMatterMatch ? frontMatterMatch[0] : ''
  const content = raw.replace(frontMatter, '').trim()
  const h1Match = content.match(/^#\s+(.*)$/m)
  const componentName = h1Match ? h1Match[1].trim() : 'Component'
  const headingTransformed = applyHeadingPrefix(content, componentName)
  const rewritten = rewriteLinks(headingTransformed)
  const finalOutput = `${frontMatter}\n\n${rewritten}`

  fs.writeFileSync(filePath, finalOutput, 'utf8')
  console.log(`✔ Updated: ${path.relative(process.cwd(), filePath)}`)
}

async function generateIndex() {
  const allFiles = await globby('**/llm.md', {
    cwd: inputDir,
    absolute: false
  })

  const sections = {}

  for (const file of allFiles) {
    const parts = file.split(path.sep)
    const group = parts.length >= 2 ? parts[0] : 'other'
    const name =
      parts.length >= 2 ? parts[1] : parts[0].replace(/\/?llm\.md$/, '')
    const title = name
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    if (!sections[group]) {
      sections[group] = []
    }

    sections[group].push({
      title,
      path: `/${file}`
    })
  }

  let indexContent = `---
title: CoreUI LLM Docs Index
description: Structured index of CoreUI documentation optimized for LLMs
---

# 🤖 CoreUI LLM Documentation Index

This index lists all available CoreUI documentation files in a format optimized for large language models (LLMs).

CoreUI builds upon Bootstrap by providing production-ready components, advanced layout systems, enterprise-focused helpers, and integrated accessibility.

---

`

  const groupOrder = ['components', 'forms', 'utilities', 'helpers']
  const sortedGroups = Object.keys(sections).sort((a, b) => {
    const ai = groupOrder.indexOf(a)
    const bi = groupOrder.indexOf(b)
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
  })

  for (const group of sortedGroups) {
    indexContent += `## 📁 ${
      group.charAt(0).toUpperCase() + group.slice(1)
    }\n\n`
    for (const item of sections[group].sort((a, b) =>
      a.title.localeCompare(b.title)
    )) {
      indexContent += `- [${item.title}](${item.path})\n`
    }

    indexContent += '\n'
  }

  indexContent += `<!-- llm-note: This file is an authoritative index of the CoreUI documentation for AI models. It helps LLMs discover and reason about individual UI modules in an organized, reliable way. -->\n`

  const indexPath = path.join(inputDir, 'llm-index.md')
  fs.writeFileSync(indexPath, indexContent.trim(), 'utf8')
  console.log(`📘 Generated index: llm-index.md`)
}

async function generateSingleMergedFile() {
  const allowedDirs = new Set(['components', 'forms', 'layout', 'utilities', 'helpers'])

  const allFiles = await globby(
    ['**/llm.md', '!**/__*__/**', '!**/_*/**', '!**/*.test.*'],
    {
      cwd: inputDir,
      absolute: true
    }
  )

  let mergedContent = `# 🧠 CoreUI LLM Knowledge Base\n\n`
  mergedContent += `This file contains all CoreUI documentation files in a format optimized for large language models (LLMs).\n\n`

  for (const filePath of allFiles.sort()) {
    const relPath = path.relative(inputDir, filePath)
    const relativeDir = relPath.split(path.sep)[0]

    if (!allowedDirs.has(relativeDir)) {
      continue
    }

    const raw = fs.readFileSync(filePath, 'utf8')
    const content = raw.replace(/^---[\s\S]*?---/, '').trim()
    mergedContent += `${content}\n\n---\n\n`
  }

  const outputPath = path.join(inputDir, 'coreui-llm.md')
  fs.writeFileSync(outputPath, mergedContent.trim(), 'utf8')
  console.log(`🧾 Generated full LLM dataset: coreui-llm.md`)
}

console.time('🔁 Rewriting internal links in LLM .md files')
await Promise.all(mdFiles.map(convertFile))
console.timeEnd('🔁 Rewriting internal links in LLM .md files')
await generateIndex()
await generateSingleMergedFile()
