// Downloads country flags from Wikimedia Commons, once, for the repo. National flag files there are almost
// always public domain (simple government symbols, not usually eligible for copyright) or released by their
// uploader under a free licence. Keeps only free licences, saves the original SVG (crisp at any size, tiny
// file) to public/flags/<id>.svg, and records the credit under a "flag-<id>" key in
// src/library/photo-credits.json (prefixed so it can never collide with an animal or place id).
// Run: node scripts/fetch-flags.mjs [id …]   (only the given ids, or all that are missing)

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const UA = 'KidsLearningStudio/1.0 (https://github.com/Oluwasedago/kids-learning-studio; flag credits)'
const sources = JSON.parse(readFileSync('src/library/flag-sources.json', 'utf8'))
const creditsFile = 'src/library/photo-credits.json'
const credits = existsSync(creditsFile) ? JSON.parse(readFileSync(creditsFile, 'utf8')) : {}
const only = process.argv.slice(2)
const FREE = /^(public domain|pd|cc0|cc by(-sa)? \d(\.\d)?|cc by(-sa)?-\d(\.\d)?|attribution|cc-by-sa-\d)/i

const api = async (params) => {
  const url = `https://commons.wikimedia.org/w/api.php?format=json&formatversion=2&${new URLSearchParams(params)}`
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } })
    if (r.ok) return r.json()
    await new Promise((ok) => setTimeout(ok, 1500 * (attempt + 1)))
  }
  throw new Error('commons answered with an error')
}
const strip = (html = '') =>
  html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

/** The exact file, trying the given name first, then a Commons file-namespace search as a fallback. */
async function resolveFile(file) {
  let info = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url|extmetadata', titles: `File:${file}` })
  let page = info.query.pages[0]
  if (page?.missing) {
    const search = await api({ action: 'query', list: 'search', srnamespace: 6, srlimit: 1, srsearch: `${file}` })
    const hit = search.query.search[0]?.title
    if (!hit) return null
    info = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url|extmetadata', titles: hit })
    page = info.query.pages[0]
  }
  return page?.imageinfo ? page : null
}

for (const s of sources) {
  if (only.length ? !only.includes(s.id) : credits[`flag-${s.id}`] && existsSync(`public/flags/${s.id}.svg`)) continue
  try {
    const page = await resolveFile(s.file)
    const ii = page?.imageinfo?.[0]
    if (!ii) throw new Error(`not found: ${s.file}`)
    const m = ii.extmetadata ?? {}
    const licence = strip(m.LicenseShortName?.value)
    if (!FREE.test(licence)) throw new Error(`licence not free enough: "${licence}" (${s.file})`)
    if (!/\.svg(\?|$)/i.test(ii.url)) throw new Error(`not an SVG: ${ii.url}`)
    const img = await fetch(ii.url, { headers: { 'User-Agent': UA } })
    if (!img.ok) throw new Error(`download failed ${img.status}`)
    mkdirSync('public/flags', { recursive: true })
    writeFileSync(`public/flags/${s.id}.svg`, Buffer.from(await img.arrayBuffer()))
    credits[`flag-${s.id}`] = {
      author: strip(m.Artist?.value).slice(0, 120) || 'Unknown',
      licence,
      licenceUrl: m.LicenseUrl?.value ?? '',
      source: ii.descriptionurl,
    }
    console.log(`ok   ${s.id}: ${page.title} (${licence})`)
  } catch (e) {
    console.log(`FAIL ${s.id}: ${e.message}`)
  }
  await new Promise((ok) => setTimeout(ok, 300))
}
writeFileSync(creditsFile, `${JSON.stringify(credits, null, 2)}\n`)
