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
  véu) → `ProvaSocial` (posição firstbase: logo após o herói; MI6, logo
  em `public/logo-mi6.png`) → `Planeta` × 8 (ids `veu-01`…`veu-08`,
  dados em `src/dados/planetas.ts`) → `Produtos` (fila) → `Rede` (rede
  for tech) → `Rodape`; `Hud` (appbar + telemetria + trilho de paradas)
  e `Aplicacao` (diálogo) fora do `<main>`
- **A narrativa dos véus NÃO nomeia os planetas** e segue o fio da
  "nova loja" (ver `docs/CONCEITO.md`): véus 01–04 = tese → vitrine →
  qualificação → fast checkout; véus 05–08 = pilares de execução.
  Claim direto + sustentação objetiva; temas nos eyebrows
  (`Véu NN · Tema`). O método Triplo Diamante só aparece como alusão
  (linha `.processo` em Produtos)
- Appbar (`Hud.astro`): marca à esquerda; à direita links âncora
  (`data-stop`), profundidade % e CTA `Aplicar` (`data-aplicar`);
  ganha fundo blur com a classe `.rolou` após 60px de rolagem
  (toggle no handler de scroll do `index.astro`)
- **Todo o comportamento client vive em um único `<script>` no
  `index.astro`** (empacotado pelo Vite): Lenis + ticker GSAP, timelines
  ScrollTrigger, céu estrelado em canvas, HUD (progresso/paradas/nav) e
  o diálogo de aplicação. As timelines só são criadas quando
  `matchMedia('(prefers-reduced-motion: no-preference)')` — o estado
  padrão do CSS é o estado final (site legível sem JS/animação)
- **Entrada orbital dos planetas**: cada seção `.planet` entra da
  lateral (lados alternados por índice), com arco (x ease `power1.out`
  + y `sine.in`), rotação e véu de brilho — janela `top 92%`→`top 30%`,
  ease quase linear para a varredura acontecer dentro do viewport (easing
  agressivo esconde o efeito abaixo da dobra). Texto entra do lado oposto
- O Sol do herói usa `vmax` (não `vmin`) — em retrato o disco precisa
  transbordar a tela; scrim reforçado via media query ≤700px
- Diálogo único `Aplicacao.astro` (variantes `projeto`/`rede`, abertas
  por `[data-aplicar]`), grava em `localStorage["7aery.fila"]`; campos da
  variante inativa ficam `disabled` (fora do FormData); **sem backend**
- Design tokens e todo o CSS em `src/styles/global.css` (`--bg`, `--ink`,
  `--gold`…); fontes via Fontsource importadas no frontmatter do
  `index.astro`
- Imagens em `public/space/` referenciadas por caminho (`/space/*.jpg`);
  `vercel.json` põe headers de segurança + cache imutável em `/space/*`

## Convenções

- **Marca: 7Aery** (logo `public/logo.svg`, ciano `#3cc9e9`). O site é
  acessado pelo Instagram profissional do Marcílio — a marca assina o
  herói; o nome dele fica no rodapé. Copy **sem primeira pessoa e sem
  frases de efeito**; captação (aplicação/fila) presente já no herói
- Imagens novas: sempre pela NASA Image Library ou ESA (crédito no
  rodapé + `credits.json`); planetas em disco usam crop circular com
  **máscara radial suave** (`shape: "disc"`; máscara na `img`, não no
  contêiner, para o glow sobreviver), panorâmicas como Saturno usam
  `shape: "wide"`. Discos devem ser imagens de disco completo centrado
  (Júpiter é o Hubble OPAL da ESA por isso)
- Sem preços no site — produtos abrem aplicação para fila de espera
- Rolagem calibrada curta: seções de planeta com `min-height: 84svh`,
  pin do herói em `+=55%` — não realongar sem pedido
- Branch de trabalho: `claude/marcilio-portfolio-site-87wycd`; deploy é
  dogfooding via Vercel Preview (um por push). Produção na `main`
