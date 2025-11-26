import { TranslationData, PortfolioItem } from './types';

export const CONTACT_INFO = {
  name: "Jade Malaquias",
  instagram: "@jademalaquiaseventos",
  phone: "+55 27 99904-8414",
  // Added ?text parameter with URL encoded message: "Oi, vim pelo seu site e gostaria de agendar uma consultoria para o meu evento."
  whatsappLink: "https://wa.me/5527999048414?text=Oi%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consultoria%20para%20o%20meu%20evento.",
};

export const PORTFOLIO_IMAGES: PortfolioItem[] = [
  {
    id: 'v-1',
    src: 'https://videos.pexels.com/video-files/4534579/4534579-hd_1920_1080_25fps.mp4',
    poster: 'https://images.pexels.com/videos/4534579/free-video-4534579.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Filme: Detalhes do vestido',
    category: 'casamento',
    type: 'video'
  },
  {
    id: 'p-1',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    alt: 'Retrato elegante dos noivos',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-2',
    src: 'https://images.unsplash.com/photo-1511285560982-13e61b075ad5?auto=format&fit=crop&w=1200&q=85',
    alt: 'O beijo no altar',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-3',
    src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1200&q=85',
    alt: 'Saída dos noivos com festa',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'v-2',
    src: 'https://videos.pexels.com/video-files/3195959/3195959-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.pexels.com/videos/3195959/free-video-3195959.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Filme: Troca de alianças',
    category: 'casamento',
    type: 'video'
  },
  {
    id: 'p-4',
    src: 'https://images.unsplash.com/photo-1583939003029-4c9e1c6df705?auto=format&fit=crop&w=1200&q=85',
    alt: 'Caminhando juntos rumo ao futuro',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-5',
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85',
    alt: 'Troca de votos emocionada',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-6',
    src: 'https://images.unsplash.com/photo-1624485677181-961c64118356?auto=format&fit=crop&w=1200&q=85',
    alt: 'Intimidade e cumplicidade',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-7',
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    alt: 'Entrada triunfal na cerimônia',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-8',
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
    alt: 'A felicidade da noiva',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-9',
    src: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Conexão e amor',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-10',
    src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=85',
    alt: 'O abraço após o sim',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-11',
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Casamento ao ar livre',
    category: 'casamento',
    type: 'image'
  },
  {
    id: 'p-12',
    src: 'https://images.unsplash.com/photo-1507259226098-191d6d26db52?auto=format&fit=crop&w=1200&q=85',
    alt: 'Olhares apaixonados',
    category: 'casamento',
    type: 'image'
  }
];

export const TRANSLATIONS: Record<'pt' | 'en', TranslationData> = {
  pt: {
    ui: {
      nav: {
        about: "Sobre",
        services: "Serviços",
        portfolio: "Portfólio",
        contact: "Fale Conosco"
      },
      hero: {
        tagline: "Transformando o evento dos seus sonhos em realidade",
        subtitle: "Assessoria de eventos e cerimonial com 13 anos de experiência.",
        cta: "Fale com a Jade"
      },
      about: {
        badge: "Sobre Mim",
        title: "13 Anos de Paixão por Realizar Sonhos",
        p1: "Com mais de uma década dedicada ao mercado de eventos, minha missão vai além da organização: é sobre acolhimento e execução detalhista.",
        p2: "Transformo a ansiedade do planejamento em tranquilidade, garantindo que cada detalhe, do cronograma à decoração, reflita a essência única de quem celebra. A perfeição mora nos detalhes, e eu cuido de todos eles para você.",
        cta: "Ver meu trabalho",
        imageAlt: "Jade Malaquias, mulher negra com visual profissional e elegante"
      },
      services: {
        title: "Nossos Serviços",
        filters: {
          all: "Todos",
          wedding: "Casamentos",
          social: "15 Anos & Bodas",
          corporate: "Corporativo"
        },
        card: {
          details: "Ver Detalhes"
        },
        empty: "Nenhum serviço encontrado para esta categoria."
      },
      process: {
        badge: "Passo a Passo",
        title: "Como Funciona",
        steps: [
          { title: "Reunião Inicial", desc: "Entendemos seus sonhos e expectativas." },
          { title: "Planejamento", desc: "Cronograma e orçamento definidos." },
          { title: "Fornecedores", desc: "Curadoria e contratação dos melhores." },
          { title: "Grande Dia", desc: "Execução perfeita para você celebrar." }
        ]
      },
      portfolio: {
        title: "Portfólio",
        subtitle: "Momentos reais, emoções eternas"
      },
      ctaSecondary: {
        text: "\"Quer viver o casamento dos seus sonhos com tranquilidade e perfeição em cada detalhe?\"",
        button: "Fale com a Jade"
      },
      faq: {
        title: "Dúvidas Frequentes"
      },
      footer: {
        role: "Assessoria & Cerimonial",
        rights: "Todos os direitos reservados."
      },
      modal: {
        includes: "O que está incluso:",
        investment: "Investimento",
        disclaimer: "* Não oferecemos consultoria gratuita. O orçamento é enviado após a primeira reunião.",
        button: "Solicitar Orçamento"
      }
    },
    services: [
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
    ],
    testimonials: [
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
    ],
    faqs: [
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
    ]
  },
  en: {
    ui: {
      nav: {
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact Us"
      },
      hero: {
        tagline: "Transforming the event of your dreams into reality",
        subtitle: "Event planning and coordination with 13 years of experience.",
        cta: "Talk to Jade"
      },
      about: {
        badge: "About Me",
        title: "13 Years of Passion for Making Dreams Come True",
        p1: "With over a decade dedicated to the event market, my mission goes beyond organization: it is about welcoming and detailed execution.",
        p2: "I transform planning anxiety into tranquility, ensuring that every detail, from the schedule to the decoration, reflects the unique essence of those celebrating. Perfection lies in the details, and I take care of all of them for you.",
        cta: "See my work",
        imageAlt: "Jade Malaquias, a black woman with a professional and elegant look"
      },
      services: {
        title: "Our Services",
        filters: {
          all: "All",
          wedding: "Weddings",
          social: "Social & Anniversaries",
          corporate: "Corporate"
        },
        card: {
          details: "View Details"
        },
        empty: "No services found for this category."
      },
      process: {
        badge: "Step by Step",
        title: "How It Works",
        steps: [
          { title: "Initial Meeting", desc: "We understand your dreams and expectations." },
          { title: "Planning", desc: "Schedule and budget defined." },
          { title: "Vendors", desc: "Curation and hiring of the best." },
          { title: "The Big Day", desc: "Perfect execution for you to celebrate." }
        ]
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Real moments, eternal emotions"
      },
      ctaSecondary: {
        text: "\"Do you want to live the wedding of your dreams with tranquility and perfection in every detail?\"",
        button: "Talk to Jade"
      },
      faq: {
        title: "Frequently Asked Questions"
      },
      footer: {
        role: "Event Planning & Coordination",
        rights: "All rights reserved."
      },
      modal: {
        includes: "What's included:",
        investment: "Investment",
        disclaimer: "* We do not offer free consultation. The quote is sent after the first meeting.",
        button: "Request Quote"
      }
    },
    services: [
      {
        id: 'full',
        title: "Full Coordination",
        shortDescription: "From initial planning to the big day, we take care of absolutely everything.",
        fullDescription: "Ideal for couples seeking total peace of mind. We accompany every step of the process, from budget definition to the last minute of the party.",
        includes: [
          "Financial planning and general schedule",
          "Indication and negotiation with all vendors",
          "Technical visits and tastings",
          "Contract review",
          "Procession and protocol organization",
          "Full coordination on the event day"
        ],
        priceRange: "Upon request (Customized)",
        categories: ['casamento']
      },
      {
        id: 'day-of',
        title: "Day-of Coordination",
        shortDescription: "Impeccable coordination so you can just enjoy the moment.",
        fullDescription: "For couples who have already hired vendors but need professional direction on the day to ensure everything goes as planned.",
        includes: [
          "Alignment meeting 30 days prior",
          "Confirmation with hired vendors",
          "Creation of the day's schedule (minute by minute)",
          "Setup supervision",
          "Ceremony and reception coordination",
          "Unforeseen event resolution"
        ],
        priceRange: "Upon request",
        categories: ['casamento']
      },
      {
        id: 'planning',
        title: "Event Planning",
        shortDescription: "Anniversaries, 15th birthdays, and corporate events with sophistication.",
        fullDescription: "Strategic organization for social and corporate events requiring excellence and a touch of exclusivity.",
        includes: [
          "Theme and style conception",
          "Guest management (RSVP)",
          "Logistics and infrastructure",
          "Catering and decoration hiring",
          "Full accompaniment"
        ],
        priceRange: "Upon request",
        categories: ['social', 'corporativo']
      }
    ],
    testimonials: [
      {
        id: '1',
        name: "Ana & Lucas",
        text: "Jade was an angel in our lives. Every detail of our wedding had her hand in it. Her calmness and 13 years of experience made all the difference.",
        image: "https://picsum.photos/seed/wedding1/100/100"
      },
      {
        id: '2',
        name: "Mariana Souza",
        text: "I hired her for my 15th birthday and it was magical. The impeccable organization allowed my mother to enjoy the party without worrying about anything.",
        image: "https://picsum.photos/seed/wedding2/100/100"
      },
      {
        id: '3',
        name: "Beatriz & João",
        text: "Professionalism defines her. She solved problems we didn't even know about on the day. The best choice we made for our wedding.",
        image: "https://picsum.photos/seed/wedding3/100/100"
      },
      {
        id: '4',
        name: "Carla & Pedro",
        text: "Simply perfect. The care and attention to detail made us feel very secure. I recommend her with my eyes closed!",
        image: "https://picsum.photos/seed/wedding4/100/100"
      }
    ],
    faqs: [
      {
        question: "Does Jade handle different types of events?",
        answer: "Yes! Although our specialty is weddings, we also handle anniversaries, 15th birthdays, and exclusive corporate events with the same level of excellence."
      },
      {
        question: "Is it only for weddings?",
        answer: "No, we cater to any type of celebration requiring detailed planning and sophisticated execution."
      },
      {
        question: "How does the hiring process work?",
        answer: "We start with a meeting (in-person or online) to understand your dream. After that, we present a personalized proposal. We do not offer free consultation, but the first alignment conversation is essential."
      },
      {
        question: "Do you serve online and in-person?",
        answer: "Yes. The advisory can be done in a hybrid way, with online meetings to optimize time, but with physical presence on technical visits and, of course, on the event day."
      },
      {
        question: "How is the follow-up until the event?",
        answer: "You will have direct access to Jade and her team via WhatsApp and periodic meetings. We create a detailed schedule so that no step is forgotten."
      }
    ]
  }
};
