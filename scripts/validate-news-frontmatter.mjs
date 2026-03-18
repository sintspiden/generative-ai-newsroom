import fs from 'node:fs';
import path from 'node:path';

const NEWS_DIR = path.resolve('src/content/news');

const REQUIRED_FIELDS = ['title', 'date', 'category', 'source', 'tags', 'summary'];
// date format is validated with Date.parse below

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => path.join(dir, f));
}

function extractFrontmatter(content) {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return null;
  return content.slice(4, end + 1);
}

function hasField(frontmatter, field) {
  const re = new RegExp(`^${field}\\s*:`, 'm');
  return re.test(frontmatter);
}

function getScalarField(frontmatter, field) {
  const re = new RegExp(`^${field}\\s*:\\s*(.+)$`, 'm');
  const match = frontmatter.match(re);
  if (!match) return null;
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

const files = listMarkdownFiles(NEWS_DIR);
const errors = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const frontmatter = extractFrontmatter(content);

  if (!frontmatter) {
    errors.push(`${path.relative(process.cwd(), file)}: missing or malformed frontmatter`);
    continue;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!hasField(frontmatter, field)) {
      errors.push(`${path.relative(process.cwd(), file)}: missing required field '${field}'`);
    }
  }

  const date = getScalarField(frontmatter, 'date');
  if (date && Number.isNaN(Date.parse(date))) {
    errors.push(`${path.relative(process.cwd(), file)}: invalid date '${date}'`);
  }
}

if (errors.length > 0) {
  console.error('❌ News frontmatter validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`✅ News frontmatter validation passed (${files.length} files checked).`);
