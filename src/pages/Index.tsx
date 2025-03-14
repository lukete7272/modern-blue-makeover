
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
  Layers,
  Info,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const highlightItems = [
  { icon: <Zap className="w-6 h-6" />, title: "Automação de Atendimento" },
  { icon: <MessageSquare className="w-6 h-6" />, title: "Mensagens Personalizadas" }
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
    answer: "A implementação básica leva de 3 a 7 dias úteis. Soluções mais complexas podem levar até 2 semanas, dependendo das suas necessidades específicas."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não! Nossa plataforma é projetada para ser fácil de usar, sem necessidade de conhecimentos técnicos. Além disso, oferecemos suporte completo durante todo o processo."
  },
  {
    question: "Como é feita a cobrança?",
    answer: "Trabalhamos com planos mensais ou anuais baseados no volume de mensagens e funcionalidades necessárias. Entre em contato para uma proposta personalizada para seu negócio."
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Sim! Oferecemos uma demonstração gratuita para que você possa ver como a plataforma funciona."
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
              <Link to="/sobre-nos" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Quem Somos</Link>
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
            <Link 
              to="/sobre-nos"
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition py-2 border-b border-gray-100 dark:border-gray-700"
            >
              Quem Somos
            </Link>
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
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-up text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Conecte sua empresa com{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  inteligência
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Automatize seu atendimento e transforme a experiência dos seus clientes com soluções inovadoras de WhatsApp Business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <div className="w-full lg:w-1/2 animate-fade-up animate-float flex justify-center" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Automação de WhatsApp Business"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
            {highlightItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/80 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-3 justify-center">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className="feature-card animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Integrações Disponíveis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Conecte com suas ferramentas favoritas para uma experiência completa
          </p>
          
          <div className="logo-grid max-w-4xl mx-auto">
            {updatedIntegrations.map((integration, index) => (
              <div key={index} className="logo-item">
                <img 
                  src={integration.logo} 
                  alt={`Logo ${integration.name}`} 
                  className="h-12 w-auto object-contain"
                />
                <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Processo simples e rápido para você começar a automatizar seu atendimento
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
                className="step-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 relative">
                  <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                <div className="mt-6 rounded-xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-40 object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Desafios que Resolvemos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Problemas comuns das empresas que nossa solução resolve
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-red-500/10 dark:bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-500">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{challenge.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{challenge.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Por que escolher a I9 Appify?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Veja como nos destacamos em relação a outras soluções
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2">
                <Check className="w-6 h-6 text-primary" />
                <span>I9 Appify</span>
              </h3>
              <ul className="space-y-4">
                {i9Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white flex items-center justify-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                <span>Outras Soluções</span>
              </h3>
              <ul className="space-y-4">
                {otherSolutions.map((solution, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Respostas para as dúvidas mais comuns
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-accordion-item bg-white dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <button 
                  className="faq-accordion-trigger w-full py-4 px-6 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
                <div className={`faq-accordion-content px-6 pb-6 text-gray-600 dark:text-gray-300 ${activeAccordion === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10 dark:bg-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato agora e descubra como a I9 Appify pode ajudar seu negócio a crescer com atendimento automatizado.
          </p>
          <button 
            onClick={openWhatsApp}
            className="group bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition duration-300 text-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <span>Fale com um especialista</span>
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity">Via WhatsApp</span>
          </button>
        </div>
      </section>

      <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="footer-heading text-center md:text-left">I9 Appify</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Soluções inteligentes para automatizar seu atendimento e otimizar seus processos.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="footer-link">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon */}
                </a>
                <a href="#" className="footer-link">
                  <span className="sr-only">Instagram</span>
                  {/* Instagram icon */}
                </a>
                <a href="#" className="footer-link">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon */}
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading text-center md:text-left">Navegação</h3>
              <div className="flex flex-col items-center md:items-start">
                <button onClick={() => scrollToSection('features')} className="footer-link">Benefícios</button>
                <button onClick={() => scrollToSection('how-it-works')} className="footer-link">Como Funciona</button>
                <button onClick={() => scrollToSection('integrations')} className="footer-link">Integrações</button>
                <button onClick={() => scrollToSection('faq')} className="footer-link">FAQ</button>
                <Link to="/sobre-nos" className="footer-link">Quem Somos</Link>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading text-center md:text-left">Legal</h3>
              <div className="flex flex-col items-center md:items-start">
                <Link to="/termos-servico" className="footer-link">Termos de Serviço</Link>
                <Link to="/politica-privacidade" className="footer-link">Política de Privacidade</Link>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading text-center md:text-left">Contato</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2 text-center md:text-left">
                contato@i9appify.com.br
              </p>
              <div className="flex justify-center md:justify-start">
                <button 
                  onClick={openWhatsApp}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition mt-2"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <div className={`cookie-consent ${cookieConsentVisible ? 'visible' : 'hidden'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Utilizamos cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Este site utiliza cookies para melhorar sua experiência de navegação. 
                Ao continuar, você concorda com nossa política de privacidade.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={declineCookies}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Recusar
              </button>
              <button 
                onClick={acceptCookies}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
