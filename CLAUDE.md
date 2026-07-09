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
- **i18n**: `astro.config.mjs` define locales `pt` (padrão, sem
  prefixo) / `en` / `fr` com `fallbackType: 'rewrite'` — `/en/` e
  `/fr/` servem automaticamente o conteúdo pt-BR até a tradução real
  (rodada futura). Seletor de idioma no `Hud.astro` (`Astro.currentLocale`
  + links `hreflang`); toggle do menu no script central
- Narrativa (componentes em `src/components/`): `Heroi` (Sol, pinned +
  véu) → `ProvaSocial` (posição firstbase: logo após o herói; MI6, logo
  em `public/logo-mi6.png`) → `Planeta` × 8 (ids `veu-01`…`veu-08`,
  dados em `src/dados/planetas.ts`) → `Produtos` (fila) → `Rede` (rede
  for tech) → `Rodape`; `Hud` (appbar + telemetria + trilho de paradas)
  e `Aplicacao` (diálogo) fora do `<main>`
- **A narrativa dos véus NÃO nomeia os planetas nem usa a palavra
  "véu" na copy visível** (jargão zero desde a R7) e segue o fio da
  "nova loja" (ver `docs/CONCEITO.md`): seções 01–04 = tese → vitrine →
  qualificação → fast checkout; 05–08 = pilares de execução. Claim
  direto + sustentação objetiva; eyebrows `NN · Tema`. O método Triplo
  Diamante só aparece como alusão (linha `.processo` em Produtos)
- Produtos: 3 escopos (Site / Site + App / Site + App + Rede Social) +
  card Plus de largura total (`.tier-plus`): "Modelo preditivo de
  venda". Chip do diálogo usa "Escopo:"; a seção "Trabalhe conosco"
  (id `#rede`) é uma sessão simples de recrutamento — engenharia,
  design e produto
- Diálogo `Aplicacao.astro`: `.field`, `.apply-done` e
  `[data-apply-form]` **precisam** de regras `[hidden] { display:none }`
  no CSS porque o base é `display: grid`. Sem isso, o diálogo vaza
  todos os campos e o estado done simultaneamente (bug caçado na R8)
- Appbar (`Hud.astro`): marca à esquerda; à direita links âncora
  (`data-stop`), profundidade % e CTA `Aplicar` (`data-aplicar`);
  ganha fundo blur com a classe `.rolou` após 60px de rolagem
  (toggle no handler de scroll do `index.astro`)
- **Trilho de paradas (`.hud-stops`, desktop ≥1000px only) é uma órbita
  em miniatura**: cada parada de planeta (`veu-01`..`veu-08`) vira um
  anel (`.rail-orbit`) com o planeta girando dentro (`.rail-pivot` +
  `.rail-planet`, `18×18px` reaproveitando as imagens normalizadas). O
  planeta grande (`.orb`) some acima de 1000px — vive só na órbita; no
  mobile (trilho escondido) o `.orb` grande continua exatamente como
  antes, sem nenhuma mudança. Giro amarrado ao scroll da PÁGINA INTEIRA
  (não da seção), velocidade decrescente por planeta (`data-speed`,
  `1.6 - índice*0.18`, Mercúrio mais rápido que Netuno). Cada
  planetinha nasce apagado/dessaturado e "acende" (`data-revelado`) na
  primeira vez que sua seção fica ativa — e não apaga de novo depois
  (extensão do mesmo `IntersectionObserver` que já controlava
  `data-active`)
- **Todo o comportamento client vive em um único `<script>` no
  `index.astro`** (empacotado pelo Vite): Lenis + ticker GSAP, timelines
  ScrollTrigger, céu estrelado em canvas, HUD (progresso/paradas/nav) e
  o diálogo de aplicação. As timelines só são criadas quando
  `matchMedia('(prefers-reduced-motion: no-preference)')` — o estado
  padrão do CSS é o estado final (site legível sem JS/animação)
- **Revelação dos planetas**: cada `.orb` já nasce na posição final (sem
  translação/rotação); o scroll anima a custom property `--reveal`
  (0→1, usada em `calc()` nas paradas do `mask-image`) e o `brightness`
  do filter — o planeta "acende" e a máscara abre de um núcleo apagado
  até o recorte final, mesma lógica do véu do herói. Fallback CSS
  `--reveal: 1` (estado final sem JS/reduced-motion). O texto (`.p-copy`)
  só recebe fade no scroll-trigger; a flutuação (`y` ± 7px, loop
  `sine.inOut`, `yoyo`, `repeat: -1`) roda independente do scroll,
  dessincronizada por seção via `delay`/`duration` variáveis por índice
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
- **Imagens de planeta são normalizadas** (disco centralizado, ~90% do
  quadro) por `scratchpad/normalizar-discos.mjs` (canvas headless, mede
  o bounding box do disco e reenquadra). Por isso **uma única máscara
  radial** no CSS serve para todos — sem `pos`/`zoom`/`maskStops` por
  planeta. A máscara fica transparente já em ~87% (antes da borda nítida
  do disco em ~90%), então a linha dura do recorte da foto **nunca é
  mostrada**; só o interior com vinheta suave. Cada foto-fonte enquadrava
  o disco num tamanho diferente (Terra preenchia só 66,7% do quadro
  original, Netuno 56,6%) — sem a normalização, a margem preta da foto
  cobria as estrelas como um halo escuro. Se trocar uma imagem, rode a
  normalização de novo
- Sem preços no site — produtos abrem aplicação para fila de espera
- Rolagem calibrada curta: seções de planeta com `min-height: 84svh`,
  pin do herói em `+=55%` — não realongar sem pedido
- Branch de trabalho: `claude/marcilio-portfolio-site-87wycd`; deploy é
  dogfooding via Vercel Preview (um por push). Produção na `main`
