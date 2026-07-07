# Conceito — 7Aery (portfólio de Marcílio Lemos)

## A marca

O projeto chama-se **7Aery** (logo em `public/logo.svg`, ciano
`#3cc9e9`). O site é acessado a partir do perfil profissional do
Marcílio no Instagram — quem chega já sabe quem ele é. Por isso:

- A **marca assina o herói**; o nome do Marcílio fica no rodapé.
- Copy **sem primeira pessoa e sem frases de efeito**. O visitante é
  quem faz a travessia — isso se mostra, não se diz.
- A **captação aparece já no herói**: resumo direto do modelo
  (aplicação + fila de espera) e CTA imediato. O scroll aprofunda quem
  quiser ir além.

## A ideia central: remoção de véus

O site é uma narrativa em camadas. O scroll **remove véus**: cada
seção começa velada (escura, coberta) e se revela conforme o usuário
avança — imagem surgindo do escuro, texto subindo em seguida.

A jornada segue o sistema solar de dentro para fora, e depois o que
existe além:

1. **Sol** — o herói. Nome, posição, promessa ("Cada rolagem remove um
   véu"). O primeiro véu se ergue sobre o próprio Sol.
2. **Mercúrio → Netuno** — oito véus, um por planeta, cada um amarrando
   uma qualidade do trabalho a um fato real do planeta:
   velocidade, beleza, presença, ambição, escala, precisão,
   perspectiva, profundidade.
3. **Órbitas (produtos)** — depois de Netuno, a região rara.
4. **A Rede (além do sistema)** — campo profundo do Hubble, o convite
   for tech.

Se o fio esticar em rodadas futuras: galáxias, constelações,
nebulosas, estrelas nomeadas.

## Escassez

O desenvolvedor não busca clientes; clientes vêm até ele.

- **Nenhum preço público.**
- Produtos são "missões" com **aplicação para fila de espera**:
  1. **Órbita I — Site**
  2. **Órbita II — Site + App**
  3. **Órbita III — Site + App + Instagram**
- Tom: agenda deliberadamente limitada, convite após avaliação,
  "vagas limitadas por trimestre".

## A primeira rede social for tech do mundo

Chamada específica para quem trabalha com tecnologia: aplicar para
**construir** a rede (não apenas usá-la).

- Conceito: o oposto do feed infinito — **realidade aumentada** que
  devolve a interação ao mundo real; "a tela é só a lente".
- Cada membro recebe um **novo nick celeste**: um planeta, uma estrela,
  uma constelação. "O seu já existe. Está esperando por você."
- Mistério deliberado: "detalhes apenas para aprovados".

## Iconografia

Somente fontes oficiais (domínio público / CC BY 4.0 com crédito):

- https://www.jpl.nasa.gov/images/
- https://www.nasa.gov/stem-content/nasa-image-and-video-library/ (usada — `npm run fetch:imagery`)
- https://esahubble.org/images/archive/top100/ e https://esahubble.org/
- https://science.nasa.gov/mission/webb/multimedia/images/

Proveniência das imagens atuais: `public/space/credits.json`.

## Referência de estilo

- **Simplicidade** (referência dada: mi6consorcio.com.br) — página
  única, narrativa direta, sem excesso de elementos.
- Estética de missão espacial: tipografia larga, mono para telemetria
  (HUD com progresso "profundidade" e paradas SOL→∞), dourado solar
  como cor de destaque.

## Processo de desenvolvimento

- **R1 (feita): piloto** — jornada completa, produtos, rede,
  formulários locais (sem backend), verificação em runtime.
- **R2 (feita): migração para Astro** — mesma UX/UI, agora no framework
  do site da MI6 (Astro estático), para o deploy na Vercel se comportar
  como o do mi6-site (preview por branch, sem os 404 do import inicial).
- **R3 (feita): marca e calibragem** — identidade 7Aery no herói (logo +
  captação imediata), copy sem primeira pessoa, recorte dos planetas com
  máscara suave (Júpiter trocado pelo disco completo do Hubble/ESA) e
  rolagem ~20% mais curta.
- **Dogfooding via Vercel**: cada push = Preview URL; o proprietário
  testa e traz ajustes.
- **Rodadas livres**: refinamentos guiados pelo uso (copy, backend dos
  formulários, novas camadas além do sistema solar, domínio próprio,
  analytics, SEO fino).
