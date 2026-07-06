# portfolio7aery

Portfólio-narrativa de Marcílio Lemos. Conceito do produto (véus,
escassez, rede for tech): `docs/CONCEITO.md` — ler antes de mexer em
copy ou estrutura. Idioma do site e da conversa: **PT-BR**.

## Comandos

- `npm run dev` / `npm run build` / `npm start`
- `npm run fetch:imagery` — rebaixa imagens da NASA (curl via proxy);
  atualiza `public/space/credits.json`
- Verificação em runtime: skill do projeto em `.claude/skills/verify/`

## Arquitetura

- Next.js 16 App Router, página única estática (`app/page.tsx`)
- Narrativa: `Hero` (Sol, pinned + véu) → `PlanetSection` × 8 (dados em
  `lib/planets.ts`) → `Products` (órbitas/fila de espera) → `Network`
  (rede for tech) → `Footer`
- Scroll: `SmoothScroll` (Lenis + ticker GSAP, contexto `useLenis`);
  animações sempre dentro de `gsap.matchMedia("(prefers-reduced-motion:
  no-preference)")` — o estado padrão do CSS é o estado final (site
  legível sem JS/animação)
- `ApplyProvider` — diálogo único de aplicação (variantes `projeto` e
  `rede`), grava em `localStorage["7aery.fila"]`; **sem backend ainda**
- Design tokens só em `app/globals.css` (`--bg`, `--ink`, `--gold`…);
  fontes via Fontsource importadas no `layout.tsx`

## Convenções

- Imagens novas: sempre pela NASA Image Library ou ESA (crédito no
  rodapé + `credits.json`); planetas em disco usam crop circular
  (`shape: "disc"`), panorâmicas como Saturno usam `shape: "wide"`
- Sem preços no site — produtos abrem aplicação para fila de espera
- Branch de trabalho: `claude/marcilio-portfolio-site-87wycd`; deploy é
  dogfooding via Vercel Preview (um por push)
