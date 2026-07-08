# portfolio7aery

Site institucional da **7Aery** — sites, apps e produtos digitais sob
aplicação, projeto de **Marcílio Lemos** (Desenvolvedor de Software ·
Brasil).

O visitante chega pelo Instagram profissional do Marcílio e encontra
uma página única em Astro estático, com iconografia oficial da NASA/ESA
e narrativa em camadas (removidas por scroll) construída em cima do
conceito: **a loja do empresário agora é um funil online**. Detalhes de
produto, conceito e método de desenvolvimento em
[`docs/CONCEITO.md`](docs/CONCEITO.md).

## Stack

- **Astro 7** (`output: 'static'`), Vite bundler, `@astrojs/sitemap`
- **i18n**: `pt` (padrão), `en`, `fr` — `en`/`fr` ainda servem o
  conteúdo em português via fallback automático do Astro; tradução
  real é rodada futura
- **GSAP ScrollTrigger** (véus e entrada orbital) + **Lenis** (scroll
  suave, dirigido pelo ticker do GSAP), num único `<script>` central
  em `src/pages/index.astro`
- **Canvas próprio** para o céu estrelado com paralaxe
- Fontes via Fontsource (Space Grotesk Variable + IBM Plex Mono) —
  empacotadas no build, zero chamadas externas em runtime
- **Zero dependências de UI**; design system em `src/styles/global.css`
- `playwright-core` como devDependency (verificação em runtime usa o
  Chromium do ambiente Claude Code em `/opt/pw-browsers/chromium`)

## Arquitetura resumida

```
src/
├── pages/index.astro          # página única (head inline + script central)
├── components/
│   ├── Heroi.astro            # Sol, pinned + véu; CTA "Aplicar para um projeto"
│   ├── ProvaSocial.astro      # posição pós-Sol; logo da MI6 → mi6consorcio.com.br
│   ├── Planeta.astro          # 8 seções (ids veu-01…veu-08)
│   ├── Produtos.astro         # 3 escopos + card Plus (modelo preditivo)
│   ├── Rede.astro             # Trabalhe conosco
│   ├── Rodape.astro
│   ├── Hud.astro              # appbar (Projetos, Time, Aplicar) + trilho lateral
│   └── Aplicacao.astro        # <dialog> com variantes projeto/time
├── dados/planetas.ts          # dados das 8 seções + paradas do trilho
└── styles/global.css          # tokens e todo o CSS
public/
├── logo.svg, favicon.svg      # marca 7Aery (ciano #3cc9e9)
├── logo-mi6.png               # prova social (do repo mi6-site)
└── space/*.jpg + credits.json # iconografia NASA/ESA, com proveniência
```

## Rodar

```bash
npm install
npm run dev            # dev server (astro dev)
npm run build          # build de produção → dist/
npm run preview        # serve o build local (astro preview)
npm run fetch:imagery  # rebaixa imagens da NASA/ESA (curl via proxy)
```

## Deploy — Vercel

Cada push em qualquer branch gera um Preview Deployment. A produção
publica a partir de `main`.

Framework detectado: **Astro**. Diretório de saída: **`dist`**. Sem
variáveis de ambiente por enquanto (os formulários registram em
`localStorage["7aery.fila"]` — integração de backend é rodada futura).

`vercel.json` adiciona headers de segurança e cache imutável para
`/space/*`.

## Iconografia

Imagens em `public/space/`, todas de fontes oficiais:

- **NASA Image and Video Library** (domínio público) — Sol (SDO),
  Mercúrio (MESSENGER), Vênus (Magellan/Pioneer), Terra (Apollo 17),
  Marte (JPL/MSSS), Saturno (Cassini), Urano e Netuno (Voyager 2),
  Deep Field (Hubble XDF).
- **ESA/Hubble** (CC BY 4.0, crédito no rodapé) — Júpiter (retrato
  OPAL 2019 do Hubble).

Proveniência completa em `public/space/credits.json`; o script
`scripts/fetch-imagery.mjs` refaz a curadoria (usa `curl`, respeita o
proxy do ambiente).

## Verificação em runtime

O projeto vem com uma skill do Claude Code em `.claude/skills/verify/`
que builda, sobe o `astro preview` na porta 3100 e dirige o site com
`playwright-core` + Chromium local — capturando screenshots e erros de
console. Rode via `/verify` numa sessão Claude Code, ou siga o
`SKILL.md` manualmente.

## Estado atual do produto

- **Formulários registram em `localStorage`** ("7aery.fila") e mostram
  o estado de sucesso. Integração real (e-mail / planilha / CRM) fica
  para rodada futura.
- **Sem preços públicos.** Todo produto abre o mesmo diálogo de
  aplicação (variantes `projeto` e `time`, com chip `Escopo:` quando
  vem de um card específico).
- **Conteúdo em pt-BR.**

## Método

Este repositório é desenvolvido pelo **Triplo Diamante** do próprio
Marcílio: (1) entender e organizar, (2) desenvolvimento livre em
rodadas — várias versões sem conceito de "errado", com dogfooding via
Vercel Preview a cada push — até chegar à (3) versão final e deploy em
produção. O log das rodadas fica em `docs/CONCEITO.md`.
