import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://example.com';
const repoBase = process.env.BASE_PATH || (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '/');

export default defineConfig({
  site,
  base: repoBase === '/' ? '/' : `${repoBase.replace(/\/$/, '')}/`,
});
