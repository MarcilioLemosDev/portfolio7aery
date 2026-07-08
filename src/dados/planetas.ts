// Dados da travessia. As imagens continuam sendo os planetas (NASA/ESA,
// proveniência em public/space/credits.json), mas a narrativa não os nomeia:
// cada véu revela um pedaço do produto e do intuito da marca — claim direto
// no título, sustentação objetiva na frase (referência de tom: lerian.studio).
// Discos usam crop circular com máscara suave; panorâmicas usam shape "wide".

export type Planeta = {
  id: string;
  tema: string;
  titulo: string;
  frase: string;
  img: string;
  alt: string;
  glow: string;
  shape: 'disc' | 'wide';
  pos?: string;
  zoom?: number;
};

export const planetas: Planeta[] = [
  {
    id: 'veu-01',
    tema: 'A nova loja',
    titulo: 'A loja do empresário mudou de endereço.',
    frase:
      'Se toda operação pode virar algoritmo, a nova loja é um funil online, aberta o dia inteiro, gerando leads enquanto o negócio opera.',
    img: '/space/mercurio.jpg',
    alt: 'Mosaico global de Mercúrio registrado pela sonda MESSENGER (NASA)',
    glow: 'rgba(205, 200, 192, 0.5)',
    shape: 'disc',
    zoom: 1.03,
  },
  {
    id: 'veu-02',
    tema: 'Vitrine',
    titulo: 'A vitrine é o topo do funil.',
    frase:
      'Redes sociais, site, app: é onde o cliente passa, olha e decide entrar. Vitrine boa não grita: posiciona e atrai.',
    img: '/space/venus.jpg',
    alt: 'Vista global de Vênus composta com dados das missões Magellan e Pioneer (NASA/JPL)',
    glow: 'rgba(255, 172, 92, 0.5)',
    shape: 'disc',
    zoom: 1.04,
    pos: '50% 48%',
  },
  {
    id: 'veu-03',
    tema: 'Qualificação',
    titulo: 'Dentro da loja, qualificação inteligente.',
    frase:
      'O cliente recebe só a informação que precisa para avançar. Quem chega ao fim do funil, chega pronto para comprar.',
    img: '/space/terra.jpg',
    alt: 'A Terra vista pela tripulação da Apollo 17, a Blue Marble (NASA)',
    glow: 'rgba(122, 172, 255, 0.5)',
    shape: 'disc',
  },
  {
    id: 'veu-04',
    tema: 'Fast checkout',
    titulo: 'No fim do funil, um botão.',
    frase:
      'O lead qualificado cai direto no WhatsApp do seu time, pronto para fechar. Sem formulário infinito, sem fricção.',
    img: '/space/marte.jpg',
    alt: 'Globo de Marte com os vulcões de Tharsis e o Valles Marineris (NASA/JPL/Malin Space Science Systems)',
    glow: 'rgba(255, 142, 92, 0.5)',
    shape: 'disc',
    pos: '46% 47%',
  },
  {
    id: 'veu-05',
    tema: 'Velocidade e escala',
    titulo: 'Arquitetura que aguenta o sucesso.',
    frase:
      'Carregamento num instante e estrutura sólida do primeiro acesso ao pico de tráfego. Crescer não pode ser motivo de colapso.',
    img: '/space/jupiter.jpg',
    alt: 'Retrato de Júpiter em disco completo com a Grande Mancha Vermelha, pelo Hubble (NASA/ESA, programa OPAL)',
    glow: 'rgba(255, 200, 152, 0.42)',
    shape: 'disc',
  },
  {
    id: 'veu-06',
    tema: 'Precisão',
    titulo: 'Engenharia é disciplina.',
    frase:
      'Código revisado, testado e medido antes de ir ao ar. Régua, nunca improviso.',
    img: '/space/saturno.jpg',
    alt: 'Mosaico de Saturno e seus anéis registrado pela sonda Cassini (NASA/JPL/Space Science Institute)',
    glow: 'rgba(240, 218, 170, 0.4)',
    shape: 'wide',
  },
  {
    id: 'veu-07',
    tema: 'Perspectiva',
    titulo: 'Poucos projetos, atenção inteira.',
    frase:
      'O modelo sob aplicação existe por isso: cada trabalho recebe o cuidado de quem não está correndo para o próximo.',
    img: '/space/urano.jpg',
    alt: 'Urano visto pela Voyager 2 (NASA/JPL-Caltech)',
    glow: 'rgba(162, 232, 226, 0.45)',
    shape: 'disc',
  },
  {
    id: 'veu-08',
    tema: 'Time',
    titulo: 'Feito por gente que se importa.',
    frase:
      'Um time pequeno, contratado a dedo. É por isso que a agenda é curta, e por isso que a régua se mantém.',
    img: '/space/netuno.jpg',
    alt: 'Netuno em disco completo, registrado pela Voyager 2 (NASA/JPL)',
    glow: 'rgba(112, 152, 255, 0.5)',
    shape: 'disc',
    pos: '48% 47%',
  },
];

export const paradas = [
  { id: 'sol', label: 'TOPO' },
  { id: 'veu-01', label: '01' },
  { id: 'veu-02', label: '02' },
  { id: 'veu-03', label: '03' },
  { id: 'veu-04', label: '04' },
  { id: 'veu-05', label: '05' },
  { id: 'veu-06', label: '06' },
  { id: 'veu-07', label: '07' },
  { id: 'veu-08', label: '08' },
  { id: 'orbitas', label: 'PRJ' },
  { id: 'rede', label: 'TIME' },
];
