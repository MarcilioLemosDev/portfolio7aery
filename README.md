# portfolio7aery

Portfólio-narrativa de **Marcílio Lemos — Desenvolvedor de Software · Brasil**.

O conceito é **remoção de véus**: cada rolagem revela uma camada do
sistema solar — do Sol a Netuno — até sair do sistema e encontrar a
chamada para a primeira rede social *for tech* do mundo. Iconografia
real da NASA (domínio público). Detalhes do produto em
[`docs/CONCEITO.md`](docs/CONCEITO.md).

## Stack

- **Astro** (site estático) — mesmo framework do site da MI6
- **GSAP ScrollTrigger** (véus scrub) + **Lenis** (scroll suave), num
  único `<script>` empacotado pelo Vite em `src/pages/index.astro`
- Canvas próprio para o céu estrelado com paralaxe
- Fontes via Fontsource (Space Grotesk Variable + IBM Plex Mono) — sem
  chamadas externas em build
- Zero dependências de UI; design system em `src/styles/global.css`

## Rodar

```bash
npm install
npm run dev        # desenvolvimento (astro dev)
npm run build      # build de produção → dist/
npm run preview    # serve o build local
```

## Deploy na Vercel (dogfooding)

1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
   O framework **Astro** é detectado automaticamente (build `astro build`,
   saída `dist/`).
2. **Cada push em qualquer branch gera um Preview Deployment com URL
   própria** — é assim que testamos cada versão.
3. A branch de produção (`main`) publica a URL principal quando receber
   merge.

> Se um deploy antigo der 404, confira em Settings → Build & Deployment
> se o **Framework Preset** está como **Astro** e o **Output Directory**
> como `dist` (o import inicial, feito quando o repo estava vazio, pode
> ter fixado o preset errado).

Sem variáveis de ambiente nesta fase.

## Imagens

As imagens vivem em `public/space/` e vêm da
[NASA Image and Video Library](https://images.nasa.gov) (domínio
público; proveniência em `public/space/credits.json`). Para rebaixar ou
trocar a curadoria:

```bash
npm run fetch:imagery
```

## Estado do piloto

- Formulários de aplicação (fila de espera e rede) **ainda não têm
  backend**: registram em `localStorage["7aery.fila"]` e mostram o estado
  de sucesso. Integração real (e-mail/planilha/CRM) é rodada futura.
- Conteúdo e copy são a primeira versão — feitos para evoluir em
  rodadas de desenvolvimento livre.
