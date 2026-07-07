---
name: verify
description: Receita de verificação em runtime deste portfólio — build Astro, servir com `astro preview` e dirigir o site com Playwright (Chromium do ambiente), capturando screenshots e erros de console.
---

# Verificação do portfólio (Astro estático)

Superfície: GUI no navegador. Página única (`/`), 100% estática, com
scroll narrativo (GSAP ScrollTrigger + Lenis), HUD de telemetria,
diálogo de aplicação (`<dialog>`) e canvas de estrelas. Todo o
comportamento client está no `<script>` de `src/pages/index.astro`.

## Build + servir

```bash
npm run build              # precisa terminar verde (astro build)
npx astro preview --port 3100   # serve o dist/; aguardar HTTP 200
```

## Dirigir

Playwright está em `playwright-core` (devDependency). O Chromium do
ambiente fica em `/opt/pw-browsers/chromium` — usar
`chromium.launch({ executablePath: "/opt/pw-browsers/chromium" })`,
nunca `playwright install`. Se o script rodar fora do repo (scratchpad),
symlinkar `node_modules` para resolver o import.

Fluxos que valem dirigir (cobertos na migração para Astro):

1. **Véu do herói** — carregar (velado), rolar ~800px (Sol surgindo).
   Esperar ~1,2s após cada rolagem (scrub).
2. **Jornada** — seções de véu têm ids `#veu-01`…`#veu-08` (Saturno é o
   `#veu-06`, formato largo). `scrollIntoView` + screenshots; para flagrar
   a entrada orbital, posicionar o topo da seção em ~62–78% do viewport
   (offset lateral alterna por índice). Depois `#orbitas`, `#prova`, `#rede`.
3. **Appbar/HUD** — links `Projetos`/`A rede` e trilho lateral navegam
   (`data-stop`); CTA `Aplicar` da appbar abre o diálogo; classe `.rolou`
   na `.hud-top` após rolar 60px; `[data-hud-pct]` > 0. Prova social:
   `.prova-cliente` com href mi6consorcio.com.br, `target=_blank` e
   `rel=noopener`.
4. **Fila de espera** — abrir "Aplicar à fila de espera"; submit vazio deve
   deixar `[data-apply-done]` ainda `hidden` (validação nativa). Preencher
   `#apply-nome`, `#apply-email`, `#apply-msg-projeto` → `[data-apply-done]`
   visível e entrada em `localStorage["7aery.fila"]` (tipo/missao/mensagem).
5. **Rede** — "Aplicar para construir"; campos `#apply-stack` +
   `#apply-msg-rede`; entrada com `tipo:"rede"`, `stack`, `missao:null`.
6. **Mobile** (390×844) — `.hud-stops` com `display:none`, sem scroll
   horizontal (`scrollWidth <= innerWidth`).
7. **Movimento reduzido** (`reducedMotion: "reduce"`) — `.hero-veil`
   opacity 0, `h1` e `#marte .orb` opacity 1 (conteúdo visível sem animação;
   as timelines não são criadas).

Capturar `console` (type error) e `pageerror` em todos os contextos —
zero é o esperado. Script de referência da última rodada:
`scratchpad/verify-astro.mjs`.

## Gotchas

- Animações são scrub: screenshot logo após scroll pega estado
  intermediário; esperar 1,2–1,5s.
- Diálogo: os dois textareas têm nomes distintos (`mensagem` no projeto,
  `mensagem_rede` na rede) e a variante inativa fica `disabled` para sair
  do FormData. Não reintroduzir `required` em campo escondido.
- `npm run fetch:imagery` rebaixa imagens da NASA (curl, respeita proxy).
  Só rodar se for trocar iconografia; conferir `credits.json`.
