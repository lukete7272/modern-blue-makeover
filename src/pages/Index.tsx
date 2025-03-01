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
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: "Atendimento Prioritário",
    description: "Identificação e priorização de mensagens importantes, garantindo atenção imediata aos assuntos mais urgentes.",
    benefits: [
      "Classificação automática de mensagens por prioridade",
      "Alertas para mensagens que precisam de atenção urgente",
      "Melhor organização do fluxo de trabalho"
    ]
  }
];

const simplifiedGalleryItems = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Automação de WhatsApp",
    description: "Atendimento automatizado para perguntas frequentes, liberando sua equipe para tarefas mais complexas."
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    title: "Modelos de Resposta",
    description: "Templates pré-configurados para diferentes cenários de atendimento ao cliente."
  }
];

// Restaurado para incluir Supabase
const updatedIntegrations = [
  {
    name: "WhatsApp Business",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
  },
  {
    name: "Google Workspace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
  },
  {
    name: "Microsoft 365",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png"
  },
  {
    name: "WooCommerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/512px-WooCommerce_logo.svg.png"
  },
  {
    name: "Mercado Livre",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mercado_Libre.svg/512px-Mercado_Libre.svg.png"
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
      document.documentElement.classList().remove('dark');
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
      
      {/* Hero Section - Melhorada */}
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
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

      {/* Gallery Section - Modificado para remover itens não oferecidos */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Veja a I9 Appify em Ação
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Exemplos reais de casos de uso da nossa solução
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {simplifiedGalleryItems.map((item, index) => (
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

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Integre com as Ferramentas que Você Já Usa
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Nossa plataforma se conecta facilmente com ferramentas essenciais
          </p>
          
          <div className="logo-grid max-w-4xl mx-auto">
            {
