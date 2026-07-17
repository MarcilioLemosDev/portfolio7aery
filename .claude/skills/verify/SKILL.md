---
name: verify
description: Receita de verificação em runtime do portfolio7aery — build Astro, servir com `astro preview` e dirigir o site com `playwright-core` (Chromium do ambiente), capturando screenshots e erros de console.
---

# Verificação do portfolio7aery (Astro estático)

Superfície: GUI no navegador. Página única (`/`), 100% estática, com
scroll narrativo (GSAP ScrollTrigger + Lenis), HUD (appbar + trilho),
diálogo de aplicação (`<dialog>` nativo) e canvas de estrelas. Todo o
comportamento client vive no `<script>` central de
`src/pages/index.astro`.

## Build + servir

```bash
npm run build                    # precisa terminar verde
npx astro preview --port 3100    # serve dist/ ; aguardar HTTP 200
```

Se um preview antigo estiver rodando: `pkill -f "[a]stro preview"`.

## Dirigir

Playwright está em `playwright-core` (devDependency). O Chromium do
ambiente fica em `/opt/pw-browsers/chromium` — usar
`chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })`.
Nunca `playwright install`. Se o script rodar fora do repo (scratchpad),
symlinkar `node_modules` — ou apontar `require()` para o `node_modules`
absoluto (padrão que usei nas últimas rodadas):

```js
const { chromium } = require('/home/user/portfolio7aery/node_modules/playwright-core');
```

## Fluxos que valem dirigir

1. **Véu do herói** — carregar (velado), rolar ~800px, esperar ~1,2s
   após cada rolagem (scrub); confirmar Sol aparecendo.
2. **Prova social** — logo após o herói: `#prova` com `.prova-cliente`
   apontando para `https://mi6consorcio.com.br` (`target="_blank"`,
   `rel="noopener"`).
3. **Jornada dos véus** — ids `#veu-01`…`#veu-08` (Saturno é o
   `#veu-06`, formato largo). Para flagrar a entrada orbital, posicionar
   o topo em ~62–78% do viewport (offset lateral alterna por índice);
   confirmar rotação/opacidade animando.
4. **Produtos** — 4 cards no total: 3 escopos (Site / Site + App /
   Site + App + Rede Social) e o card Plus (`.tier-plus`, largura total
   com borda dourada). O CTA do Plus abre o diálogo com
   `data-preset="Modelo preditivo de venda"` e chip
   `Escopo: Modelo preditivo de venda`.
5. **Trabalhe conosco** — `#rede`: `Enviar aplicação` abre o diálogo
   variante `time`. Chip `Trabalhe conosco` no kicker; título `Enviar
   aplicação para o time`.
6. **Diálogo — regra do `hidden`** — os campos e as views usam
   `[hidden]`, mas o CSS base os coloca em `display: grid`. As regras
   `.field[hidden]`, `.apply-done[hidden]` e `[data-apply-form][hidden]`
   forçam `display: none`. Se o diálogo vazar todos os campos ou o
   estado de sucesso, o CSS quebrou. Verificar com:
   ```js
   getComputedStyle(document.querySelector('[data-campo-projeto]')).display
   ```
   deve ser `none` quando a variante for `rede`.
7. **Fila e submit** — submit vazio deve deixar `[data-apply-done]`
   `hidden`; preencher nome/e-mail/mensagem correta faz aparecer `done`
   e grava em `localStorage["wonderspace.fila"]` (`tipo`, `missao` do preset
   quando houver, `nome`).
8. **HUD** — clicar `.hud-link` navega (Lenis scrollTo); classe
   `.rolou` na `.hud-top` após rolar 60px; `[data-hud-pct]` > 0; CTA
   `Aplicar` da appbar abre o diálogo variante `projeto`.
9. **Mobile** (390×844) — `.hud-link`/`.hud-depth` com
   `display: none`, sem scroll horizontal, card Plus empilha
   verticalmente.
10. **Movimento reduzido** (`reducedMotion: 'reduce'`) — véu do herói
    com opacity 0, h1 e orbs com opacity 1: conteúdo visível sem
    timelines rodando.

Zero erros esperados em `console.error` e `pageerror`. Script de
referência da última rodada em `scratchpad/verify-r8.mjs` (padrão a
seguir para novas verificações).

## Gotchas

- Animações são **scrub**: screenshot logo após scroll pega estado
  intermediário; esperar 1,2–1,6s.
- Diálogo tem **dois textareas** com nomes distintos (`mensagem` no
  projeto, `mensagem_rede` no time); a variante inativa fica
  `disabled` para sair do FormData. Não reintroduzir `required` em
  campo escondido.
- `npm run fetch:imagery` rebaixa imagens da NASA/ESA (curl, respeita
  proxy). Só rodar se for trocar iconografia — confere `credits.json`
  depois.
