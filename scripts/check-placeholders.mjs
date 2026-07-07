#!/usr/bin/env node
/**
 * Lists content placeholders that still need to be filled in before
 * publishing. Placeholders are square-bracketed notes inside content
 * strings, e.g. "[năm tốt nghiệp]", plus empty credential links.
 *
 * Usage: npm run check
 * Exits 1 if anything is found, so it can gate a release checklist.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentFile = join(root, 'src', 'content', 'site.ts');
const source = readFileSync(contentFile, 'utf8');

const findings = [];
const lineOf = (index) => source.slice(0, index).split('\n').length;

// Bracketed notes inside single-quoted content strings.
const stringLiteral = /'((?:[^'\\]|\\.)*)'/g;
for (const match of source.matchAll(stringLiteral)) {
  const inner = match[1];
  const bracket = inner.match(/\[[^\]]+\]/);
  if (bracket) {
    findings.push({
      line: lineOf(match.index),
      note: bracket[0],
    });
  }
}

// Credential or contact links that are still empty.
for (const match of source.matchAll(/(href|email):\s*''/g)) {
  findings.push({
    line: lineOf(match.index),
    note: `empty ${match[1]} (link hidden on the page until filled)`,
  });
}

const file = relative(root, contentFile);
if (findings.length === 0) {
  console.log(`No placeholders left in ${file}. Ready to publish.`);
  process.exit(0);
}

console.log(`Found ${findings.length} placeholder(s) in ${file}:\n`);
for (const f of findings) {
  console.log(`  ${file}:${f.line}  ${f.note}`);
}
console.log('\nFill these in (or intentionally leave links empty) before publishing.');
process.exit(1);
