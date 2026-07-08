// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site estático para deploy na Vercel (preview por branch, produção na main).
// `site` gera canonical + sitemap; troca para o domínio final quando houver.
export default defineConfig({
  site: 'https://portfolio7aery.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
    },
    // /en/ e /fr/ servem o conteúdo pt-BR até a tradução real chegar
    // (rodada futura); o rewrite mantém a URL do idioma escolhido.
    fallback: {
      en: 'pt',
      fr: 'pt',
    },
  },
});
