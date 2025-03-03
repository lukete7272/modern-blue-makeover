import { useState, useEffect, useRef } from "react";
import { 
  MessageCircle, 
  Menu, 
  X, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Sun,
  Moon,
  BarChart,
  Clock,
  Users,
  MessageSquare,
  Settings,
  Zap,
  Target,
  TrendingUp,
  RefreshCw,
  PieChart,
  AlertCircle,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  { icon: <Zap className="w-6 h-6" />, title: "Automação de Atendimento" },
  { icon: <MessageSquare className="w-6 h-6" />, title: "Mensagens Personalizadas" },
  { icon: <Target className="w-6 h-6" />, title: "Segmentação Inteligente" }
];

const features = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Atendimento Automatizado",
    description: "Automatize respostas para as perguntas mais frequentes dos seus clientes.",
    bullets: [
      "Respostas instantâneas 24/7",
      "Redução de tempo em questões repetitivas",
      "Maior satisfação dos clientes"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Mensagens Personalizadas",
    description: "Envie mensagens relevantes e personalizadas para cada segmento de cliente.",
    bullets: [
      "Comunicação direcionada",
      "Maior taxa de engajamento",
      "Experiência personalizada"
    ]
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Gestão de Relacionamento",
    description: "Centralize todas as conversas e histórico de clientes em um único lugar.",
    bullets: [
      "Visão completa do cliente",
      "Histórico de interações",
      "Aumento da eficiência no atendimento"
    ]
  }
];

const stats = [
  {
    value: "70%",
    label: "Redução de tempo",
    description: "No atendimento de perguntas frequentes"
  },
  {
    value: "85%",
    label: "Taxa de satisfação",
    description: "Dos clientes com respostas automatizadas"
  },
  {
    value: "24/7",
    label: "Disponibilidade",
    description: "Seu negócio sempre disponível"
  }
];

const appFeatures = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Agentes Inteligentes",
    description: "Automatize respostas para as perguntas mais frequentes e reduza o tempo de atendimento.",
    benefits: ["Disponibilidade 24/7", "Respostas rápidas e precisas", "Redução da carga de trabalho da equipe"]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Mensagens Segmentadas",
    description: "Envie mensagens personalizadas para diferentes grupos de clientes de acordo com perfil ou comportamento.",
    benefits: ["Aumento de conversão", "Comunicação mais eficiente", "Melhor experiência do cliente"]
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Automação de Fluxos",
    description: "Crie fluxos automatizados para conduzir seus clientes pela jornada ideal em cada situação.",
    benefits: ["Padronização do atendimento", "Escalabilidade do negócio", "Menos erros operacionais"]
  }
];

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Chatbot Personalizado",
    description: "Atendimento automatizado com personalidade da sua marca"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
    title: "Mensagens Automáticas",
    description: "Envio programado de informações importantes"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    title: "Fluxos Interativos",
    description: "Criação de jornadas automatizadas para os clientes"
  }
];

const updatedIntegrations = [
  { name: "Google Sheets", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" },
  { name: "Google Drive", logo: "https://cdn.worldvectorlogo.com/logos/google-drive.svg" },
  { name: "Google Calendar", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" },
  { name: "Gmail", logo: "https://cdn.worldvectorlogo.com/logos/gmail-icon-2.svg" },
  { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
  { name: "Google Docs", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg" }
];

const steps = [
  {
    title: "Defina seus objetivos",
    description: "Conversamos para entender suas necessidades específicas e definir a melhor estratégia de automação.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Implementação rápida",
    description: "Configuramos a solução em poucos dias, sem complexidade técnica e com total suporte da nossa equipe.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Resultados imediatos",
    description: "Veja seus processos de atendimento sendo otimizados e a satisfação dos clientes aumentando rapidamente.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
  }
];

const challenges = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Tempo Limitado",
    description: "Sua equipe não consegue dar conta do volume de mensagens recebidas diariamente.",
    solution: "Automação de 70% das perguntas frequentes, liberando tempo para questões realmente importantes."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Equipe Reduzida",
    description: "Faltam colaboradores para atender a todos os clientes com a velocidade esperada.",
    solution: "Multiplique sua capacidade de atendimento sem aumentar a equipe, através da tecnologia."
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Inconsistência",
    description: "Diferentes atendentes dão informações contraditórias, gerando confusão.",
    solution: "Padronização das respostas através de fluxos inteligentes e respostas pré-aprovadas."
  }
];

const i9Features = [
  "Integração rápida e sem código",
  "Personalização completa para sua marca",
  "Fluxos automatizados personalizáveis",
  "Suporte técnico dedicado",
  "Escalabilidade conforme seu crescimento"
];

const otherSolutions = [
  "Necessidade de codificação complexa",
  "Personalização limitada",
  "Fluxos rígidos pré-definidos",
  "Suporte por tickets impessoal",
  "Custos crescentes por usuário/mensagem"
];

const faqItems = [
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação básica leva de 3 a 5 dias úteis. Soluções mais complexas podem levar até 2 semanas, dependendo das suas necessidades específicas."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não! Nossa plataforma é projetada para ser fácil de usar, sem necessidade de conhecimentos técnicos. Além disso, oferecemos suporte completo durante todo o processo."
  },
  {
    question: "Vocês oferecem suporte após a implementação?",
    answer: "Sim, todos os nossos planos incluem suporte contínuo após a implementação. Estamos sempre disponíveis para ajudar com ajustes, otimizações e novas funcionalidades."
  },
  {
    question: "Como é feita a cobrança?",
    answer: "Trabalhamos com planos mensais ou anuais baseados no volume de mensagens e funcionalidades necessárias. Entre em contato para uma proposta personalizada para seu negócio."
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Sim! Oferecemos uma demonstração gratuita para que você possa ver como a plataforma funciona com seus próprios dados e necessidades."
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [cookieConsentVisible, setCookieConsentVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
    setCookieConsentVisible(!hasConsent);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = (scrollTop / scrollableHeight) * 100;
      setScrollPercentage(percentage);
      
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('animate-fade-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5531993988889`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookieConsentVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setCookieConsentVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      <div 
        className="reading-progress-bar" 
        style={{ transform: `scaleX(${scrollPercentage / 100})` }}
        aria-hidden="true"
      />

      <nav className="sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">I9 Appify</div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Benefícios</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Como Funciona</button>
              <button onClick={() => scrollToSection('integrations')} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Integrações</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">FAQ</button>
              <button onClick={openWhatsApp} className="bg-primary/10 text-primary px-4 py-1 rounded-lg hover:bg-primary/20 transition">
                Contato
              </button>
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
            
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
              <button 
                className="p-2" 
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'visible' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold text-primary">I9 Appify</div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-2 border-b border-gray-100 dark:border-gray-700"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-2 border-b border-gray-100 dark:border-gray-700"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('integrations')} 
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-2 border-b border-gray-100 dark:border-gray-700"
            >
              Integrações
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-2 border-b border-gray-100 dark:border-gray-700"
            >
              FAQ
            </button>
            <button 
              onClick={openWhatsApp}
              className="bg-primary text-white px-6 py-3 rounded-xl shadow-md mt-4 hover:bg-primary/90 transition"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
      
      <section className="relative py-24 overflow-hidden blue-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Conecte sua empresa com{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  inteligência
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Automatize seu atendimento e transforme a experiência dos seus clientes com soluções inovadoras de WhatsApp Business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="cta-button group text-lg"
                >
                  <span>Começar agora</span>
                  <MessageCircle className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity">Via WhatsApp</span>
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300 text-lg flex items-center gap-2"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-up animate-float" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Automação de WhatsApp Business"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {highlightItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/80 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Por que seu atendimento precisa de{" "}
            <span className="text-primary">automação</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossas soluções oferecem benefícios reais para seu negócio, transformando a experiência de atendimento ao cliente de forma completa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className="feature-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 blue-gradient relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-xl hover-scale">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</div>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Como a <span className="text-primary">I9 Appify</span> transforma seu negócio?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossa plataforma inteligente automatiza seu atendimento com recursos avançados
          </p>
          
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl mb-16">
                <div className="space-y-10">
                  {appFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 animate-on-scroll"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 text-primary mb-4 md:mb-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                        {feature.benefits && (
                          <div className="mt-4 space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <div className="bg-primary/10 dark:bg-primary/20 p-10 rounded-2xl shadow-lg border border-primary/20 dark:border-primary/30">
                  <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-10">
                    Pronto para começar?
                  </h3>
                  <div className="flex justify-center">
                    <button 
                      onClick={openWhatsApp}
                      className="group bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition duration-300 text-lg font-semibold flex items-center gap-2"
                    >
                      <span>Agende uma demonstração</span>
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity">Via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Veja a I9 Appify em Ação
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Exemplos reais de casos de uso da nossa plataforma
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg hover-scale">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Integre com as Ferramentas que Você Já Usa
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossa plataforma se conecta facilmente com ferramentas essenciais
          </p>
          
          <div className="logo-grid max-w-4xl mx-auto">
            {updatedIntegrations.map((integration, index) => (
              <div key={index} className="logo-item">
                <div className="h-16 w-24 flex items-center justify-center">
                  <img 
                    src={integration.logo} 
                    alt={integration.name} 
                    className="max-h-12 max-w-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">{integration.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={openWhatsApp}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 text-base font-medium inline-flex items-center gap-2"
            >
              <span>Precisa de uma integração específica?</span>
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Como Funciona em <span className="text-primary">3 Passos Simples</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossa implementação é rápida e eficiente, garantindo resultados imediatos para o seu negócio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepRefs.current[index] = el}
                className="step-card animate-on-scroll relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{step.description}</p>
                
                <div className="mt-5 h-48 overflow-hidden rounded-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Os Desafios Que Você Enfrenta no Atendimento
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Problemas comuns que a I9 Appify ajuda a resolver em seu dia a dia
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{challenge.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{challenge.description}</p>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-primary">
                    <span className="font-medium">Nossa solução:</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            I9 Appify vs Outras Soluções
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Entenda por que somos a escolha ideal para seu negócio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 dark:border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-6">I9 Appify</h3>
              <ul className="space-y-4">
                {i9Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Outras Soluções</h3>
              <ul className="space-y-4">
                {otherSolutions.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-red-100 dark:bg-red-900 p-1 rounded-full">
                      <X className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Tire suas dúvidas sobre a I9 Appify
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <span className="font-medium text-left text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeAccordion === index ? "max-h-60 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-gradient-to-r from-primary/90 to-blue-600/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Entre em contato agora mesmo e descubra como a I9 Appify pode ajudar seu negócio a crescer.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-white text-primary px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300 text-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <span>Falar com um consultor</span>
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </section>
      
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">I9 Appify</h3>
              <p className="text-gray-400 mb-4">
                Automação inteligente de WhatsApp para transformar o atendimento do seu negócio.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition">
                    Benefícios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition">
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('integrations')} className="text-gray-400 hover:text-white transition">
                    Integrações
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/termos-servico" className="text-gray-400 hover:text-white transition">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" className="text-gray-400 hover:text-white transition">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Contato</h4>
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 mb-4"
              >
                <span>WhatsApp</span>
                <MessageCircle className="w-4 h-4" />
              </button>
              <div className="flex mt-4">
                <a href="https://www.instagram.com/i9_appify" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <span className="sr-only">Instagram</span>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-white transition">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
          </div>
          <div className="flex gap-2">
            <button 
              onClick={declineCookies}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Recusar
            </button>
            <button 
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .blue-gradient {
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f0fe 100%);
        }
        
        .dark .blue-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #111827 100%);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .dark .glass-card {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .feature-card {
          padding: 2rem;
          border-radius: 1rem;
          background-color: white;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        
        .dark .feature-card {
          background-color: #1e293b;
          border: 1px solid #334155;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .step-card {
          padding: 2rem;
          border-radius: 1rem;
          background-color: white;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .dark .step-card {
          background-color: #1e293b;
          border: 1px solid #334155;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: 100;
          transition: all 0.3s ease;
        }
        
        .dark .mobile-menu {
          background-color: #1e293b;
        }
        
        .mobile-menu.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .mobile-menu.visible {
          opacity: 1;
          pointer-events: all;
        }
        
        .reading-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--color-primary);
          transform-origin: 0%;
          z-index: 1000;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.03);
        }
        
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .logo-item:hover {
          transform: translateY(-5px);
        }
        
        .cta-button {
          position: relative;
          background-color: var(--color-primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        
        .cta-button:hover {
          background-color: var(--color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        :root {
          --color-primary: #3b82f6;
          --color-primary-dark: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Index;
