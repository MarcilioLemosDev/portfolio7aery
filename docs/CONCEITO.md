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

## Como o produto se vende: a nova loja

O paralelo central da venda (fio do site, a partir da R6): quem quer
empreender pensa em "abrir uma loja". O produto da 7Aery **é** a loja —
na forma moderna. Se toda operação pode ser traduzida em algoritmo, o
funil online é a própria estrutura que gera leads para o empresário:

1. **Vitrine** (topo do funil) — redes sociais, site, app: onde o
   cliente passa, olha e decide entrar.
2. **Qualificação inteligente** — dentro da "loja", o cliente recebe só
   a informação necessária para se qualificar; quem chega ao fim chega
   pronto.
3. **Fast checkout** — um botão no fim do funil: o lead qualificado cai
   direto no WhatsApp do time comercial (como no site da MI6) ou no
   fluxo de aplicação.

Referências de venda estudadas (mesma turma de amigos dev):

- **lerian.studio** — claim direto + sustentação objetiva; produtos como
  módulos nomeados; sem poesia vazia.
- **firstbase.io** — vende o resultado ("start your dream business"),
  nunca a tarefa; **prova social imediatamente após o hero**;
  complexidade quebrada em passos simples; autoridade e escala como
  validação. É o motivo de a seção da MI6 vir logo depois do Sol.

## Método de desenvolvimento: Triplo Diamante

Método próprio do Marcílio (contexto para as rodadas — **não** vai ao
site literalmente):

1. **Entender** — levantar as informações necessárias para a solução.
2. **Desenvolvimento livre** — várias versões sem conceito de "errado",
   até chegar à versão final (estas rodadas de dogfooding são isso).
3. **Deploy.**

No site, o método aparece só como alusão na linha do processo em
Projetos: "Entender → versões livres → deploy".

## Escassez

O desenvolvedor não busca clientes; clientes vêm até ele.

- **Nenhum preço público.**
- Produtos com **aplicação para fila de espera** (pivô da R7):
  1. **Site** — a vitrine essencial
  2. **Site + App** — vitrine e loja, com qualificação embutida
  3. **Site + App + Rede Social** — o funil inteiro, até o WhatsApp
     do time
  4. **Plus: Modelo preditivo de venda** — para qualquer escopo;
     acompanha a conversa vendedor↔lead e devolve estatísticas e
     insights (ex.: o momento certo de chamar o fechamento)
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
- **R4 (feita): órbita e sobriedade** — planetas entram em varredura
  orbital lateral (lados alternados, arco + rotação + véu de brilho),
  recorte ainda mais dissolvido, Sol do herói corrigido no mobile (vmax)
  e produtos sem metáfora espacial (referência de tom: lerian.studio —
  nomes funcionais, descrição objetiva, escassez mantida).
- **R5 (feita): appbar, narrativa e prova social** — appbar estilo
  lerian (marca, Projetos, A rede, profundidade e CTA Aplicar; fundo
  blur após rolar); os véus deixaram de nomear os planetas e passaram a
  revelar produto e intuito da marca (claim + sustentação, arco
  promessa→pilares→prova→ação); prova social "Último projeto entregue"
  com logo da MI6 Consórcio linkando mi6consorcio.com.br.
- **R6 (feita): o fio da loja** — prova social movida para logo após o
  Sol (posição firstbase); véus 01–04 contam a tese da nova loja
  (mudou de endereço → vitrine → qualificação → fast checkout) e 05–08
  seguem com os pilares de execução; produtos na linguagem do funil
  (vitrine essencial / vitrine e loja / o funil inteiro) + linha do
  processo "Entender → versões livres → deploy".
- **R7 (feita): pivô do produto e jargão zero** — quarto item na
  oferta: Plus "Modelo preditivo de venda" (card destacado de largura
  total); tier 3 vira "Site + App + Rede Social"; a palavra "véu" e o
  vocabulário místico saíram da copy visível (eyebrows viram
  `NN · Tema`, chip do diálogo vira "Escopo:", parada do trilho vira
  REDE); seção da rede social reescrita limpa (recruta engenharia,
  design e produto; "vagas limitadas · detalhes na conversa"). O
  conceito dos véus segue vivo como estrutura visual — só não é mais
  nomeado.
- **R14 (feita): órbita única, os planetas giram numa mesma elipse** —
  virada do conceito de novo (agora desk **e** mobile, ao contrário da
  R13 que era só desktop): em vez de cada véu ter um planeta grande
  centralizado (ou a mini-órbita por planeta no trilho da R13), os 8
  planetas passam a girar numa **única elipse** — um círculo no chão
  visto de frente, como uma porta giratória. O scroll vertical dirige a
  rotação (o gesto continua pra cima/baixo, mas a leitura é de giro
  lateral); cada planeta faz sua passagem mais próxima do observador
  (frente da elipse: maior, mais claro, na frente) e o texto do véu
  correspondente entra por crossfade. Componente novo `Orbita.astro`
  substitui as 8 seções empilhadas + o `Planeta.astro` (removido); o
  trilho voltou a ser dots simples. Fallback legível sem JS. Verificado
  em runtime: frente 0→7 em ordem casando com o texto ativo, mobile sem
  overflow, reduced-motion com os 8 textos visíveis.
- **R13 (revertida em R14): planeta grande vira órbita no trilho (desktop)** — o
  planeta centralizado de cada véu (com a revelação cinematográfica)
  sai do centro e a metáfora fica mais literal: o trilho de paradas
  vira uma órbita em miniatura, cada planeta girando dentro do próprio
  anel, giro amarrado ao scroll da página inteira, velocidade
  decrescente (Mercúrio mais rápido, Netuno mais lento). O véu migra
  pro trilho: o planetinha nasce apagado e acende ao ativar a seção,
  ficando aceso depois. Mudança **desktop-only** (≥1000px, onde o
  trilho já vivia) — mobile mantém o planeta grande e a revelação
  exatamente como antes, já que o trilho não cabe em tela estreita.
- **R12 (feita): normalização das imagens mata o recorte cru** — a
  abordagem de `maskStops` por planeta (R11) foi insuficiente: o
  problema real era que cada foto-fonte enquadrava o disco num tamanho
  diferente (Terra preenchia só 66,7% do quadro, Netuno 56,6%), então a
  margem preta *da própria foto* cobria as estrelas como um halo escuro
  com borda dura. Solução definitiva: `scripts/normalize-discos.mjs`
  reenquadra cada imagem para o disco ficar centralizado e preencher
  ~90% do quadro. Com todas normalizadas, uma **única máscara** serve
  para todos (sem `pos`/`zoom`/`maskStops` por planeta), e ela fica
  transparente já em ~87% — antes da borda nítida do disco — então a
  linha dura nunca aparece. Verificado por perfil de luminância radial:
  nenhum "penhasco" (queda >100 num passo); transições suaves de 11–28,
  comparáveis à Vênus (referência que já estava correta).
- **R11 (feita): recorte calibrado por imagem + Via Láctea** — primeira
  tentativa (insuficiente, ver R12): `maskStops` por planeta em
  `planetas.ts`. A parte que ficou: fundo da seção "Trabalhe conosco"
  trocado do Hubble Deep Field (esparso, não combinava mais com a copy
  aterrada pós-R8) pela Via Láctea — composição Spitzer/Hubble/Chandra
  do centro galático (NASA, domínio público), arquivo renomeado de
  `campo-profundo.jpg` para `via-lactea.jpg`.
- **R10 (feita): revelação em vez de chegada** — a entrada orbital (R4:
  planeta voando da lateral com giro) foi substituída pelo mecanismo
  original do herói: o planeta já está na posição final, e o scroll só
  clareia o brilho e expande a máscara radial (`--reveal` 0→1) — o véu
  abre de um núcleo apagado até o recorte calibrado, sem nenhum
  deslocamento. O texto (`.p-copy`) ganhou fade puro no scroll-trigger
  e uma flutuação ambiente contínua e independente do scroll (loop
  `sine.inOut`, poucos pixels, dessincronizada por seção). Motivação do
  cliente: "os planetas parecem já estar ali... e se apresentam
  conforme a rolagem" — a métafora vira revelação, não chegada,
  coerente com o conceito fundador dos véus.
- **R9 (feita): seletor de idioma (estrutura)** — Astro i18n routing
  configurado (`pt` padrão sem prefixo, `en` e `fr` com
  `fallbackType: 'rewrite'`): `/en/` e `/fr/` já respondem 200 e
  servem o conteúdo pt-BR automaticamente, sem duplicar a página.
  Seletor "PT-BR ⌄" na appbar, ao lado do Aplicar (dropdown com as
  três opções, fecha ao clicar fora). **Tradução real para inglês e
  francês fica para uma próxima rodada** — decisão explícita do
  cliente para não misturar estrutura com conteúdo na mesma entrega.
- **R8 (feita): Trabalhe conosco e diálogo corrigido** — a seção da
  "rede" vira uma sessão simples de trabalhe conosco: "O time cresce
  por aplicação · engenharia, design e produto"; parada do trilho vira
  TIME, link da appbar vira Time. Ajuste da copy da seção 08 (agora
  fala do time, não de "profundidade além do sistema"). Corrigido um
  bug do CSS que fazia o diálogo vazar todos os campos e o estado
  "done" ao mesmo tempo: `.field`, `.apply-done` e `[data-apply-form]`
  agora respeitam `[hidden]` explicitamente.
- **Dogfooding via Vercel**: cada push = Preview URL; o proprietário
  testa e traz ajustes.
- **Rodadas livres**: refinamentos guiados pelo uso (copy, backend dos
  formulários, novas camadas além do sistema solar, domínio próprio,
  analytics, SEO fino).
