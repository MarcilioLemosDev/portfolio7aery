---
name: verify
description: Receita de verificação em runtime deste portfólio — build, servir e dirigir o site com Playwright (Chromium do ambiente), capturando screenshots e erros de console.
---

# Verificação do portfólio (Next.js estático)

Superfície: GUI no navegador. A página é única (`/`), 100% estática,
com scroll narrativo (GSAP ScrollTrigger + Lenis), HUD de telemetria,
diálogo de aplicação (`<dialog>`) e canvas de estrelas.

## Build + servir

```bash
npm run build            # precisa terminar verde (Turbopack + TypeScript)
npx next start -p 3100   # porta livre de colisões; aguardar HTTP 200
```

## Dirigir

Playwright está em `playwright-core` (devDependency). O Chromium do
ambiente fica em `/opt/pw-browsers/chromium` (symlink para o binário) —
usar `chromium.launch({ executablePath: "/opt/pw-browsers/chromium" })`,
nunca `playwright install`.

Se o script rodar fora do repo (scratchpad), symlinkar `node_modules`
para resolver o import.

Fluxos que valem dirigir (todos já cobertos em rodada anterior):

1. **Véu do herói** — carregar, screenshot (estado velado), rolar ~800px,
   screenshot (Sol surgindo). Esperar ~1,2s após cada rolagem (scrub).
2. **Jornada** — `scrollIntoView` em `#terra`, `#saturno`, `#orbitas`,
   `#rede` + screenshots. Saturno é o formato largo (anéis sem corte).
3. **HUD** — clicar `button[aria-label="Ir para jupiter"]` e conferir
   que a seção chega ao viewport (Lenis scrollTo, ~2,4s).
4. **Fila de espera** — abrir "Aplicar à fila de espera", submit vazio
   deve travar na validação nativa; preencher e conferir `.apply-done`
   e a entrada em `localStorage["7aery.fila"]` (campos tipo/missao).
5. **Rede** — "Aplicar para construir", formulário com campo stack.
6. **Mobile** — viewport 390×844: `.hud-stops` deve estar `display:none`,
   sem scroll horizontal (`scrollWidth <= innerWidth`).
7. **Movimento reduzido** — contexto `reducedMotion: "reduce"`: véu do
   herói com opacity 0, h1 e orbs com opacity 1 (conteúdo visível sem
   animação).

Capturar `console` (type error) e `pageerror` em todos os contextos —
zero é o esperado.

## Gotchas

- As animações são scrub: screenshot logo após scroll pega estado
  intermediário; esperar 1,2–1,5s.
- `npm run fetch:imagery` rebaixa as imagens da NASA (usa curl, respeita
  o proxy). Só rodar se for trocar iconografia; conferir `credits.json`.
