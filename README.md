# portfolio7aery

Portfólio-narrativa de **Marcílio Lemos — Desenvolvedor de Software · Brasil**.

O conceito é **remoção de véus**: cada rolagem revela uma camada do
sistema solar — do Sol a Netuno — até sair do sistema e encontrar a
chamada para a primeira rede social *for tech* do mundo. Iconografia
real da NASA (domínio público). Detalhes do produto em
[`docs/CONCEITO.md`](docs/CONCEITO.md).

## Stack

- **Next.js 16** (App Router, 100% estático) + React 19 + TypeScript
- **GSAP ScrollTrigger** (véus scrub) + **Lenis** (scroll suave)
- Canvas próprio para o céu estrelado com paralaxe
- Fontes via Fontsource (Space Grotesk Variable + IBM Plex Mono) — sem
  chamadas externas em build
- Zero dependências de UI; design system em `app/globals.css`

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
npm start        # servir o build
```

## Deploy na Vercel (dogfooding)

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o
   repositório `MarcilioLemosDev/portfolio7aery` (framework Next.js é
   detectado sozinho — não precisa configurar nada).
2. **Cada push em qualquer branch gera um Preview Deployment com URL
   própria** — é assim que testamos cada versão.
3. A branch de produção (padrão `main`) publica a URL principal quando
   receber merge.

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
  backend**: registram em `localStorage` e mostram o estado de sucesso.
  Integração real (e-mail/planilha/CRM) é rodada futura.
- Conteúdo e copy são a primeira versão — feitos para evoluir em
  rodadas de desenvolvimento livre.
