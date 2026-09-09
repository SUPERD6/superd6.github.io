import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const result = spawnSync(process.execPath, [resolve(root, 'node_modules/vinext/dist/cli.js'), 'build'], {
  cwd: root,
  env: { ...process.env, GITHUB_PAGES: 'true' },
  stdio: 'inherit',
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const output = resolve(root, 'dist/client');
const html = readFileSync(resolve(output, 'index.html'), 'utf8');
const profile = JSON.parse(readFileSync(resolve(root, 'app/profile.json'), 'utf8'));
if (!html.includes(profile.name) || !html.includes(profile.email)) {
  throw new Error('Static export is missing the academic profile.');
}
for (const paper of profile.publications) {
  if (!html.includes(paper.url)) throw new Error('Static export is missing a paper link.');
}
for (const asset of ['Hongyu_Deng_Academic_CV.pdf', 'favicon.svg']) {
  if (!existsSync(resolve(output, asset))) throw new Error(`Missing public asset: ${asset}`);
}
if (!readFileSync(resolve(output, 'Hongyu_Deng_Academic_CV.pdf')).equals(
  readFileSync(resolve(root, 'public/Hongyu_Deng_Academic_CV.pdf')),
)) throw new Error('Exported CV does not match the source PDF.');
writeFileSync(resolve(output, '.nojekyll'), '');
console.log('GitHub Pages export verified: profile, paper links, favicon, and CV.');
