
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
  Clock,
  Users,
  MessageSquare,
  Settings,
  Zap,
  Target,
  TrendingUp,
  RefreshCw,
  AlertCircle,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

// Define data arrays for the components
const highlightItems = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Resposta Rápida"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Atendimento Humanizado"
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Disponível 24/7"
  }
];

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Comunicação Eficiente",
    description: "Torne seu atendimento mais ágil e organizado, garantindo respostas rápidas e precisas para seus clientes.",
    bullets: [
      "Automação de respostas para dúvidas frequentes",
      "Atendimento personalizado e escalável",
      "Redução do tempo de espera do cliente"
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Experiência Aprimorada",
    description: "Ofereça uma experiência excepcional aos seus clientes, com respostas rápidas e personalizadas.",
    bullets: [
      "Mensagens personalizadas por segmento de cliente",
      "Comunicação clara e objetiva",
      "Suporte disponível quando o cliente precisa"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Crescimento de Vendas",
    description: "Aumente suas conversões com um atendimento eficiente que não deixa oportunidades escaparem.",
    bullets: [
      "Recuperação de clientes potenciais",
      "Redução do abandono durante o atendimento",
      "Aumento da satisfação e fidelização"
    ]
  }
];

const stats = [
  {
    value: "85%",
    label: "Redução no tempo de resposta",
    description: "Tempo médio de atendimento melhorado significativamente"
  },
  {
    value: "63%",
    label: "Aumento de conversões",
    description: "Mais vendas fechadas com atendimento automatizado"
  },
  {
    value: "24/7",
    label: "Disponibilidade",
    description: "Seu negócio sempre disponível para os clientes"
  }
];

// Modificando simplifiedAppFeatures para remover "Atendimento Prioritário"
const simplifiedAppFeatures = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Automação de Respostas",
    description: "Respostas automáticas para perguntas frequentes, permitindo atendimento imediato mesmo fora do horário comercial.",
    benefits: [
      "Atendimento 24/7 sem intervenção humana",
      "Redução de tempo em perguntas repetitivas",
      "Padrão de resposta uniforme para todos os clientes"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Respostas Rápidas",
    description: "Templates de mensagens prontas para agilizar a comunicação com seus clientes em diferentes situações.",
    benefits: [
      "Comunicação padronizada e profissional",
      "Agilidade no atendimento ao cliente",
      "Redução de erros de digitação e formatação"
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Configuração Simples",
    description: "Implementação rápida e sem complicações, permitindo que você comece a usar o sistema em poucos minutos.",
    benefits: [
      "Sem necessidade de conhecimentos técnicos",
      "Personalização conforme as necessidades do seu negócio",
      "Suporte dedicado durante a configuração"
    ]
  }
];

// Atualizando a lista de integrações conforme solicitado
const updatedIntegrations = [
  {
    name: "WhatsApp Business",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
  },
  {
    name: "WhatsApp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
  },
  {
    name: "Google Agenda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png"
  },
  {
    name: "Google Drive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png"
  },
  {
    name: "Gmail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
  },
  {
    name: "Google Docs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/512px-Google_Docs_logo_%282014-2020%29.svg.png"
  },
  {
    name: "Google Sheets",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/512px-Google_Sheets_logo_%282014-2020%29.svg.png"
  },
  {
    name: "Supabase",
    logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
  }
];

const steps = [
  {
    title: "Entre em contato",
    description: "Agende uma demonstração gratuita e conheça como podemos transformar seu atendimento ao cliente.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Configuração personalizada",
    description: "Configuramos o sistema de acordo com as necessidades específicas do seu negócio.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Comece a usar",
    description: "Aproveite os benefícios da automação em seu WhatsApp Business e veja os resultados imediatos.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  }
];

const challenges = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Demora nas respostas",
    description: "Clientes cada vez mais impacientes esperam respostas imediatas, independente do horário.",
    solution: "Automatização que garante respostas instantâneas 24 horas por dia, 7 dias por semana."
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Inconsistência no atendimento",
    description: "Diferentes atendentes podem oferecer informações divergentes ou incompletas.",
    solution: "Respostas padronizadas e precisas para garantir consistência em todos os atendimentos."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Volume de mensagens",
    description: "Dificuldade em gerenciar a quantidade crescente de mensagens recebidas diariamente.",
    solution: "Sistema que organiza e prioriza mensagens, permitindo atendimento eficiente mesmo com grande volume."
  }
];

const i9Features = [
  "Implementação rápida e sem complicações",
  "Atendimento 24/7 com respostas automáticas",
  "Suporte técnico personalizado",
  "Sem necessidade de conhecimentos técnicos",
  "Facilidade de uso para qualquer empresa"
];

const otherSolutions = [
  "Implementação complexa e demorada",
  "Atendimento limitado ao horário comercial",
  "Suporte técnico genérico",
  "Exige conhecimentos técnicos avançados",
  "Difícil adaptação para pequenas empresas"
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [cookieConsentVisible, setCookieConsentVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  // Refs para as seções para animação ao scroll
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Effect para inicializar o dark mode baseado nas preferências do usuário
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

  // Effect para gerenciar o consentimento de cookies
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
    setCookieConsentVisible(!hasConsent);
  }, []);

  // Effect para adicionar listeners de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Atualizar estado de scroll para navbar
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calcular progresso de leitura
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = (scrollTop / scrollableHeight) * 100;
      setScrollPercentage(percentage);
      
      // Adicionar animações ao scroll
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
      {/* Barra de Progresso de Leitura */}
      <div 
        className="reading-progress-bar" 
        style={{ transform: `scaleX(${scrollPercentage / 100})` }}
        aria-hidden="true"
      />

      {/* NavBar */}
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
            
            {/* Menu mobile toggle */}
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
      
      {/* Mobile menu */}
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
      
      {/* Hero Section - Melhorada com imagem mais profissional */}
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="Automação de WhatsApp Business"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Destacados do serviço */}
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

      {/* Features Section - Melhorada */}
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

      {/* Stats Section */}
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

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </section>

      {/* App Features Section - Modificado para remover itens não oferecidos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Como a <span className="text-primary">I9 Appify</span> transforma seu negócio?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossa solução facilita sua comunicação com recursos básicos
          </p>
          
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl mb-16">
                <div className="space-y-10">
                  {simplifiedAppFeatures.map((feature, index) => (
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

      {/* Integrations Section - Atualizado com as ferramentas mencionadas */}
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

      {/* Simple Steps Section - Melhorada */}
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-3 font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2"></div>
      </section>
      
      {/* Challenge Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Desafios que <span className="text-primary">Resolvemos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nosso sistema foi projetado para superar os obstáculos comuns no atendimento ao cliente
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{challenge.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{challenge.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm uppercase text-primary font-semibold mb-2">Nossa solução:</h4>
                  <p className="text-gray-700 dark:text-gray-300">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Por que <span className="text-primary">escolher</span> a I9 Appify?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Compare nossa solução com outras disponíveis no mercado
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-center text-primary mb-6">I9 Appify</h3>
              <div className="space-y-4">
                {i9Features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl shadow-md p-8 border-t-4 border-gray-300 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-center text-gray-600 dark:text-gray-400 mb-6">Outras Soluções</h3>
              <div className="space-y-4">
                {otherSolutions.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={openWhatsApp}
              className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition duration-300 text-lg font-semibold inline-flex items-center gap-2"
            >
              <span>Quero saber mais</span>
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Tire suas principais dúvidas sobre nossos serviços
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(0)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Como começar a usar a solução?</span>
                  {activeAccordion === 0 ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {activeAccordion === 0 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Para começar, basta entrar em contato conosco pelo WhatsApp. Agendaremos uma demonstração gratuita para mostrar como nossa solução pode ajudar seu negócio, e depois configuraremos tudo de acordo com suas necessidades específicas.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Preciso ter conhecimentos técnicos?</span>
                  {activeAccordion === 1 ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {activeAccordion === 1 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Não, nossa solução foi projetada para ser fácil de usar mesmo para pessoas sem conhecimentos técnicos. Nossa equipe cuida de toda a implementação e configuração, e oferecemos suporte contínuo para ajudar você a aproveitar ao máximo o sistema.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(2)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Quanto tempo leva para implementar?</span>
                  {activeAccordion === 2 ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {activeAccordion === 2 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      A implementação é rápida e pode ser concluída em poucos dias, dependendo da complexidade do seu negócio. Trabalhamos para que você comece a ver resultados o mais rápido possível.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(3)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">Como funciona a automação de respostas?</span>
                  {activeAccordion === 3 ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {activeAccordion === 3 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Nossa solução utiliza automação para responder perguntas frequentes automaticamente. Configuramos mensagens pré-definidas para as dúvidas mais comuns dos seus clientes, permitindo respostas instantâneas a qualquer hora. Para questões mais complexas, o sistema transfere a conversa para um atendente humano.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ainda tem dúvidas? Entre em contato para uma conversa personalizada
              </p>
              <button 
                onClick={openWhatsApp}
                className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-primary/90 transition duration-300 text-base font-medium inline-flex items-center gap-2"
              >
                <span>Falar com um especialista</span>
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 blue-gradient relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pronto para transformar seu <span className="text-primary">atendimento</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Entre em contato agora mesmo e descubra como podemos ajudar seu negócio a crescer com uma comunicação mais eficiente e automatizada.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-primary text-white px-10 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition duration-300 text-xl font-semibold inline-flex items-center gap-3"
            >
              <span>Começar agora</span>
              <MessageCircle className="w-6 h-6" />
            </button>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Sem compromisso. Veja uma demonstração gratuita.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">I9 Appify</div>
              <p className="text-gray-400 mb-4">
                Soluções inovadoras para automação de atendimento via WhatsApp Business.
              </p>
              <div className="flex space-x-4 mt-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/sobre-nos" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link>
                </li>
                <li>
                  <Link to="/termos-servico" className="text-gray-400 hover:text-white transition-colors">Termos de Serviço</Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>WhatsApp: (31) 99398-8889</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>contato@i9appify.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Belo Horizonte, MG</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent */}
      {cookieConsentVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-sm md:text-base">
                <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <Link to="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={declineCookies}
                  className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 text-sm transition"
                >
                  Recusar
                </button>
                <button 
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 text-sm transition"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
