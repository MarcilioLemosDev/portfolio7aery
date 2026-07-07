// Dados da travessia (Sol → Netuno). Imagens em public/space/ (NASA, domínio
// público; proveniência em public/space/credits.json). Discos usam crop
// circular; panorâmicas (Saturno) usam shape "wide".

export type Planeta = {
  id: string;
  nome: string;
  tema: string;
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
    id: 'mercurio',
    nome: 'Mercúrio',
    tema: 'Velocidade',
    frase:
      'O planeta mais veloz do sistema. Performance não é detalhe técnico — é a primeira impressão.',
    img: '/space/mercurio.jpg',
    alt: 'Mosaico global de Mercúrio registrado pela sonda MESSENGER (NASA)',
    glow: 'rgba(205, 200, 192, 0.5)',
    shape: 'disc',
    zoom: 1.03,
  },
  {
    id: 'venus',
    nome: 'Vênus',
    tema: 'Beleza',
    frase:
      'O ponto mais brilhante do céu noturno. Interface é o que convence antes de qualquer palavra.',
    img: '/space/venus.jpg',
    alt: 'Vista global de Vênus composta com dados das missões Magellan e Pioneer (NASA/JPL)',
    glow: 'rgba(255, 172, 92, 0.5)',
    shape: 'disc',
    zoom: 1.04,
    pos: '50% 48%',
  },
  {
    id: 'terra',
    nome: 'Terra',
    tema: 'Presença',
    frase:
      'O único lugar onde os seus clientes vivem. A sua presença digital precisa ser habitável.',
    img: '/space/terra.jpg',
    alt: 'A Terra vista pela tripulação da Apollo 17 — a Blue Marble (NASA)',
    glow: 'rgba(122, 172, 255, 0.5)',
    shape: 'disc',
  },
  {
    id: 'marte',
    nome: 'Marte',
    tema: 'Ambição',
    frase:
      'O próximo mundo da humanidade. Para quem não aceita o tamanho atual do próprio negócio.',
    img: '/space/marte.jpg',
    alt: 'Globo de Marte com os vulcões de Tharsis e o Valles Marineris (NASA/JPL/Malin Space Science Systems)',
    glow: 'rgba(255, 142, 92, 0.5)',
    shape: 'disc',
    pos: '46% 47%',
  },
  {
    id: 'jupiter',
    nome: 'Júpiter',
    tema: 'Escala',
    frase:
      'Grande o bastante para blindar o sistema inteiro. Arquitetura que cresce sem colapsar.',
    img: '/space/jupiter.jpg',
    alt: 'Retrato de Júpiter em disco completo com a Grande Mancha Vermelha, pelo Hubble (NASA/ESA, programa OPAL)',
    glow: 'rgba(255, 200, 152, 0.42)',
    shape: 'disc',
  },
  {
    id: 'saturno',
    nome: 'Saturno',
    tema: 'Precisão',
    frase:
      'Anéis matematicamente perfeitos. Engenharia é disciplina — nunca improviso.',
    img: '/space/saturno.jpg',
    alt: 'Mosaico de Saturno e seus anéis registrado pela sonda Cassini (NASA/JPL/Space Science Institute)',
    glow: 'rgba(240, 218, 170, 0.4)',
    shape: 'wide',
  },
  {
    id: 'urano',
    nome: 'Urano',
    tema: 'Perspectiva',
    frase:
      'Gira num eixo que nenhum outro planeta ousou. Ver diferente é método de trabalho.',
    img: '/space/urano.jpg',
    alt: 'Urano visto pela Voyager 2 (NASA/JPL-Caltech)',
    glow: 'rgba(162, 232, 226, 0.45)',
    shape: 'disc',
  },
  {
    id: 'netuno',
    nome: 'Netuno',
    tema: 'Profundidade',
    frase:
      'O mais distante e o mais raro. O que tem valor quase nunca está na superfície.',
    img: '/space/netuno.jpg',
    alt: 'Netuno em disco completo, registrado pela Voyager 2 (NASA/JPL)',
    glow: 'rgba(112, 152, 255, 0.5)',
    shape: 'disc',
    pos: '48% 47%',
  },
];

export const paradas = [
  { id: 'sol', label: 'SOL' },
  { id: 'mercurio', label: 'MER' },
  { id: 'venus', label: 'VÊN' },
  { id: 'terra', label: 'TER' },
  { id: 'marte', label: 'MAR' },
  { id: 'jupiter', label: 'JÚP' },
  { id: 'saturno', label: 'SAT' },
  { id: 'urano', label: 'URA' },
  { id: 'netuno', label: 'NET' },
  { id: 'orbitas', label: 'ÓRB' },
  { id: 'rede', label: '∞' },
];
