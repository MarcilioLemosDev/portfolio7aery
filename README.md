# portfolio7aery — BlueDome Team

Landing page da **BlueDome Team** (**WonderBlues**) — um time de
profissionais de TI unidos por uma causa maior. Página única em Astro
estático, tema de planetas, com o foco no **formulário qualificado de 5
fases**. Domínio de produção: **7aery.com**.

O visual (céu estrelado em canvas, Terra no herói, HUD) vem do front-end
existente; o conteúdo e o funil foram refeitos para o novo propósito. O
backend é um **fluxo do Power Automate** que grava cada aplicação numa
linha de planilha.

## As 5 fases (componente `Quiz.astro`)

1. **Quem é você** — LinkedIn, idade, tempo na área de TI, estado (BR), cidade
2. **Fé** — Você acredita em Jesus Cristo?
3. **Signo** — Qual é o seu signo?
4. **O chamado** — 144.000 pacificadores: você quer fazer parte?
5. **Aplicação** — revisão das respostas + consentimento + envio

## Stack

- **Astro 7** (`output: 'static'`), Vite bundler, `@astrojs/sitemap`
- **i18n**: `pt` (padrão), `en`, `fr` (en/fr servem pt via fallback)
- **GSAP ScrollTrigger** + **Lenis** (scroll suave), num `<script>`
  central em `src/pages/index.astro`
- **Canvas próprio** para o céu estrelado com paralaxe
- Fontes via Fontsource (Space Grotesk Variable + IBM Plex Mono),
  empacotadas no build — zero chamadas externas em runtime
- **Zero dependências de UI**; design system em `src/styles/global.css`

## Arquitetura resumida

```
src/
├── pages/index.astro          # página única (head inline + script central)
├── components/
│   ├── Heroi.astro            # herói (Terra ao fundo, pinned + véu); CTA "Começar"
│   ├── ProvaSocial.astro      # manifesto WonderBlues (pós-herói)
│   ├── Quiz.astro             # FORMULÁRIO DE 5 FASES + envio ao Power Automate
│   ├── Hud.astro              # appbar (marca + idioma + "Aplicar")
│   └── Rodape.astro           # BlueDome Team · 7aery.com
└── styles/global.css          # tokens e todo o CSS
public/
├── logo.svg, favicon.svg      # marca BlueDome (globo + setas)
└── space/*.jpg + credits.json # iconografia NASA/ESA, com proveniência
```

## Backend — Power Automate (365 Business Basic)

O envio (fase 5) é um `POST` JSON. A URL do fluxo é lida da variável de
ambiente **`PUBLIC_POWER_AUTOMATE_URL`** (exposta ao cliente pelo Vite).
Enquanto ela não existir, o site roda em **modo demonstração**: valida e
registra o payload no console do navegador, sem enviar.

Passo a passo:

1. No **Power Automate**, crie um fluxo com o gatilho
   **"Quando uma solicitação HTTP for recebida"**.
2. Schema JSON do corpo:

   ```json
   {
     "type": "object",
     "properties": {
       "linkedin":     { "type": "string" },
       "idade":        { "type": "string" },
       "tempo_ti":     { "type": "string" },
       "estado":       { "type": "string" },
       "cidade":       { "type": "string" },
       "crenca_jesus": { "type": "string" },
       "signo":        { "type": "string" },
       "pacificadores":{ "type": "string" },
       "consentimento":{ "type": "string" },
       "origem":       { "type": "string" },
       "data_envio":   { "type": "string" }
     }
   }
   ```

3. Ação **Excel Online (Business) → Adicionar uma linha a uma tabela**,
   mapeando cada coluna da planilha para o campo correspondente.
4. Salve — o Power Automate gera a **URL HTTP POST**.
5. Na Vercel, defina a env var `PUBLIC_POWER_AUTOMATE_URL` com essa URL
   (Project → Settings → Environment Variables) e faça um redeploy. Para
   rodar local, crie um `.env` com a mesma variável.

### Planilha

Crie uma **Tabela** (Inserir → Tabela) no Excel do seu 365
(OneDrive/SharePoint), com uma coluna para cada campo acima.

## Rodar

```bash
npm install
npm run dev            # dev server (astro dev)
npm run build          # build de produção → dist/
npm run preview        # serve o build local (astro preview)
```

## Deploy — Vercel

Repositório conectado à Vercel (`marcilio-lemos-projects/portfolio7aery`).
Cada push gera um Preview Deployment; a produção publica a partir de
`main`. Framework: **Astro** · saída: **`dist`**. Configure o domínio
**7aery.com** e a env var `PUBLIC_POWER_AUTOMATE_URL` no painel.

## Iconografia

Imagens em `public/space/`, de fontes oficiais (NASA Image Library —
domínio público; ESA/Hubble — CC BY 4.0). Proveniência em
`public/space/credits.json`.
