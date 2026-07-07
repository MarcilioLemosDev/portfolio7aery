// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site estático para deploy na Vercel (preview por branch, produção na main).
// `site` gera canonical + sitemap; troca para o domínio final quando houver.
export default defineConfig({
  site: 'https://portfolio7aery.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
