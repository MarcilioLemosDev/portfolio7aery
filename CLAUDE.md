# portfolio7aery

Portfólio-narrativa de Marcílio Lemos. Conceito do produto (véus,
escassez, rede for tech): `docs/CONCEITO.md` — ler antes de mexer em
copy ou estrutura. Idioma do site e da conversa: **PT-BR**.

Framework espelhado do site da MI6 (`marciliolemosdev/mi6-site`): Astro
estático, deploy na Vercel (preview por branch).

## Comandos

- `npm run dev` / `npm run build` / `npm run preview`
- `npm run fetch:imagery` — rebaixa imagens da NASA (curl via proxy);
  atualiza `public/space/credits.json`
- Verificação em runtime: skill do projeto em `.claude/skills/verify/`

## Arquitetura

- **Astro 7**, `output: 'static'`, página única (`src/pages/index.astro`)
  com `<head>` inline + sitemap (`@astrojs/sitemap`)
- Narrativa (componentes em `src/components/`): `Heroi` (Sol, pinned +
  véu) → `Planeta` × 8 (dados em `src/dados/planetas.ts`) → `Produtos`
  (órbitas/fila) → `Rede` (rede for tech) → `Rodape`; `Hud` (telemetria)
  e `Aplicacao` (diálogo) fora do `<main>`
- **Todo o comportamento client vive em um único `<script>` no
  `index.astro`** (empacotado pelo Vite): Lenis + ticker GSAP, timelines
  ScrollTrigger, céu estrelado em canvas, HUD (progresso/paradas/nav) e
  o diálogo de aplicação. As timelines só são criadas quando
  `matchMedia('(prefers-reduced-motion: no-preference)')` — o estado
  padrão do CSS é o estado final (site legível sem JS/animação)
- Diálogo único `Aplicacao.astro` (variantes `projeto`/`rede`, abertas
  por `[data-aplicar]`), grava em `localStorage["7aery.fila"]`; campos da
  variante inativa ficam `disabled` (fora do FormData); **sem backend**
- Design tokens e todo o CSS em `src/styles/global.css` (`--bg`, `--ink`,
  `--gold`…); fontes via Fontsource importadas no frontmatter do
  `index.astro`
- Imagens em `public/space/` referenciadas por caminho (`/space/*.jpg`);
  `vercel.json` põe headers de segurança + cache imutável em `/space/*`

## Convenções

- Imagens novas: sempre pela NASA Image Library ou ESA (crédito no
  rodapé + `credits.json`); planetas em disco usam crop circular
  (`shape: "disc"`), panorâmicas como Saturno usam `shape: "wide"`
- Sem preços no site — produtos abrem aplicação para fila de espera
- Branch de trabalho: `claude/marcilio-portfolio-site-87wycd`; deploy é
  dogfooding via Vercel Preview (um por push). Produção na `main`
