import { Service, Testimonial, FAQItem, PortfolioItem } from './types';

export const CONTACT_INFO = {
  name: "Jade Malaquias",
  instagram: "@jademalaquiaseventos",
  phone: "+55 27 99904-8414",
  whatsappLink: "https://wa.me/5527999048414",
  tagline: "Transformando sonhos em realidade."
};

export const SERVICES: Service[] = [
  {
    id: 'full',
    title: "Assessoria Completa",
    shortDescription: "Do planejamento inicial ao grande dia, cuidamos de absolutamente tudo.",
    fullDescription: "Ideal para casais que buscam tranquilidade total. Acompanhamos cada etapa do processo, desde a definição do orçamento até o último minuto da festa.",
    includes: [
      "Planejamento financeiro e cronograma geral",
      "Indicação e negociação com todos os fornecedores",
      "Visitas técnicas e degustações",
      "Revisão de contratos",
      "Organização do cortejo e protocolo",
      "Assessoria completa no dia do evento"
    ],
    priceRange: "Sob consulta (Personalizado)",
    categories: ['casamento']
  },
  {
    id: 'day-of',
    title: "Cerimonial do Dia",
    shortDescription: "Coordenação impecável para que vocês apenas aproveitem o momento.",
    fullDescription: "Para casais que já contrataram os fornecedores, mas precisam de uma regência profissional no dia para garantir que tudo saia como planejado.",
    includes: [
      "Reunião de alinhamento 30 dias antes",
      "Confirmação com fornecedores contratados",
      "Montagem do cronograma do dia (minuto a minuto)",
      "Supervisão da montagem",
      "Coordenação da cerimônia e recepção",
      "Resolução de imprevistos"
    ],
    priceRange: "Sob consulta",
    categories: ['casamento']
  },
  {
    id: 'planning',
    title: "Planejamento de Eventos",
    shortDescription: "Bodas, 15 anos e eventos corporativos com sofisticação.",
    fullDescription: "Organização estratégica para eventos sociais e corporativos que exigem excelência e um toque de exclusividade.",
    includes: [
      "Concepção do tema e estilo",
      "Gestão de convidados (RSVP)",
      "Logística e infraestrutura",
      "Contratação de buffet e decoração",
      "Acompanhamento integral"
    ],
    priceRange: "Sob consulta",
    categories: ['social', 'corporativo']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Ana & Lucas",
    text: "A Jade foi um anjo nas nossas vidas. Cada detalhe do nosso casamento teve a mão dela. A calma e a experiência de 13 anos fizeram toda a diferença.",
    image: "https://picsum.photos/seed/wedding1/100/100"
  },
  {
    id: '2',
    name: "Mariana Souza",
    text: "Contratei para meus 15 anos e foi mágico. A organização impecável permitiu que minha mãe aproveitasse a festa sem se preocupar com nada.",
    image: "https://picsum.photos/seed/wedding2/100/100"
  },
  {
    id: '3',
    name: "Beatriz & João",
    text: "Profissionalismo define. Ela resolveu problemas que nem ficamos sabendo no dia. A melhor escolha que fizemos para o nosso casamento.",
    image: "https://picsum.photos/seed/wedding3/100/100"
  },
  {
    id: '4',
    name: "Carla & Pedro",
    text: "Simplesmente perfeita. O carinho e a atenção aos detalhes nos deixaram muito seguros. Recomendo de olhos fechados!",
    image: "https://picsum.photos/seed/wedding4/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "A Jade atende diferentes tipos de eventos?",
    answer: "Sim! Embora nossa especialidade seja casamentos, também realizamos bodas, aniversários de 15 anos e eventos corporativos exclusivos com o mesmo nível de excelência."
  },
  {
    question: "É apenas para casamentos?",
    answer: "Não, atendemos todo tipo de celebração que exija planejamento detalhado e execução sofisticada."
  },
  {
    question: "Como funciona a contratação?",
    answer: "Iniciamos com uma reunião (presencial ou online) para entender seu sonho. Após isso, apresentamos uma proposta personalizada. Não oferecemos consultoria gratuita, mas a primeira conversa de alinhamento é essencial."
  },
  {
    question: "Atende online e presencial?",
    answer: "Sim. A assessoria pode ser realizada de forma híbrida, com reuniões online para otimizar o tempo, mas com presença física em visitas técnicas e, claro, no dia do evento."
  },
  {
    question: "Como é o acompanhamento até o evento?",
    answer: "Você terá acesso direto à Jade e sua equipe via WhatsApp e reuniões periódicas. Criamos um cronograma detalhado para que nenhuma etapa seja esquecida."
  }
];

// Curated list of high-end wedding images emphasizing ceremony moments and couples
export const PORTFOLIO_IMAGES: PortfolioItem[] = [
  {
    id: 'v-1',
    src: 'https://videos.pexels.com/video-files/4534579/4534579-hd_1920_1080_25fps.mp4',
    poster: 'https://images.pexels.com/videos/4534579/free-video-4534579.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Filme: Detalhes do vestido',
    category: 'Casamento',
    type: 'video'
  },
  {
    id: 'p-1',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    alt: 'Retrato elegante dos noivos',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-2',
    src: 'https://images.unsplash.com/photo-1511285560982-13e61b075ad5?auto=format&fit=crop&w=1200&q=85',
    alt: 'O beijo no altar',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-3',
    src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1200&q=85',
    alt: 'Saída dos noivos com festa',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'v-2',
    src: 'https://videos.pexels.com/video-files/3195959/3195959-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.pexels.com/videos/3195959/free-video-3195959.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Filme: Troca de alianças',
    category: 'Casamento',
    type: 'video'
  },
  {
    id: 'p-4',
    src: 'https://images.unsplash.com/photo-1583939003029-4c9e1c6df705?auto=format&fit=crop&w=1200&q=85',
    alt: 'Caminhando juntos rumo ao futuro',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-5',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85',
    alt: 'Troca de votos emocionada',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-6',
    src: 'https://images.unsplash.com/photo-1624485677181-961c64118356?auto=format&fit=crop&w=1200&q=85',
    alt: 'Intimidade e cumplicidade',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-7',
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    alt: 'Entrada triunfal na cerimônia',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-8',
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
    alt: 'A felicidade da noiva',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-9',
    src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Conexão e amor',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-10',
    src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=85',
    alt: 'O abraço após o sim',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-11',
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Casamento ao ar livre',
    category: 'Casamento',
    type: 'image'
  },
  {
    id: 'p-12',
    src: 'https://images.unsplash.com/photo-1507259226098-191d6d26db52?auto=format&fit=crop&w=1200&q=85',
    alt: 'Olhares apaixonados',
    category: 'Casamento',
    type: 'image'
  }
];