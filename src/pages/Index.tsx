
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

      {/* App Features Section */}
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

      {/* Gallery Section */}
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
        
        {/* Decorative elements */}
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Challenges Section */}
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

      {/* Compare Solutions Section */}
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

      {/* FAQ Section - Com Accordeon */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Tire suas dúvidas sobre a I9 Appify
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-accordion-item mb-4 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <button 
                  className="faq-accordion-trigger w-full p-6 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-left text-gray-900 dark:text-white">{faq.question}</h3>
                    {activeAccordion === index ? 
                      <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    }
                  </div>
                </button>
                <div 
                  id={`faq-content-${index}`}
                  className={`px-6 bg-white dark:bg-gray-900 transition-all duration-300 ${activeAccordion === index ? 'py-6 border-t border-gray-100 dark:border-gray-700' : 'max-h-0 py-0 overflow-hidden'}`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA no final do FAQ */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Ainda tem dúvidas?</h3>
            <button 
              onClick={openWhatsApp}
              className="bg-primary/10 text-primary px-8 py-3 rounded-xl hover:bg-primary/20 transition duration-300 text-lg font-medium inline-flex items-center gap-2"
            >
              <span>Fale com um especialista</span>
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto mb-8 animate-float">
            <img 
              src="https://ldqjunoqeepcdctheidd.supabase.co/storage/v1/object/public/i9appify/Landing%20page%20I9%20Appify/iamgens%20da%20pagina/7-DIAS-DE-GARANTIA%20(1).webp" 
              alt="Selo de Garantia" 
              className="w-full h-auto max-w-xs mx-auto drop-shadow-lg"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            GARANTIA DE SATISFAÇÃO
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Garantia de Satisfação: Sem Custos Extras!
          </p>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Entre em contato agora mesmo e descubra como a I9 Appify pode revolucionar sua comunicação com clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-white text-primary px-10 py-5 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 text-xl font-semibold flex items-center gap-2 justify-center"
            >
              <span>Agende uma demonstração</span>
              <MessageCircle className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl shadow-lg hover:bg-white/10 transition duration-300 text-xl font-semibold"
            >
              Conhecer recursos
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="footer-heading">I9 Appify</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Soluções inteligentes para automatização de atendimento via WhatsApp.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Produtos</h3>
              <a href="#" className="footer-link">Automação de Atendimento</a>
              <a href="#" className="footer-link">Agente Inteligente</a>
              <a href="#" className="footer-link">Análise de Conversas</a>
              <a href="#" className="footer-link">Integrações</a>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Links Úteis</h3>
              <a href="#" className="footer-link">Sobre Nós</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Contato</a>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-heading">Suporte</h3>
              <a href="#" className="footer-link">Política de Privacidade</a>
              <a href="#" className="footer-link">Termos de Serviço</a>
              <a href="#" className="footer-link">FAQ</a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Chat no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Cookie Consent Banner */}
      <div className={`cookie-consent ${cookieConsentVisible ? 'visible' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              <p>Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <a href="#" className="text-primary underline">Política de Cookies</a>.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={declineCookies}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Recusar
              </button>
              <button 
                onClick={acceptCookies}
                className="px-4 py-2 text-sm text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
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

// Destacados do hero section
const highlightItems = [
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "100% Seguro e Confiável"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Implementação em 24h"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Atendimento 24/7"
  }
];

// Features section com bullets adicionais
const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Aumente a Eficiência",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
    bullets: [
      "Reduza tempo de resposta em até 80%",
      "Automatize respostas para perguntas frequentes",
      "Libere sua equipe para tarefas estratégicas"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Resposta Instantânea",
    description: "Atenda seus clientes 24/7 com respostas rápidas e precisas, melhorando a experiência.",
    bullets: [
      "Atendimento disponível 24 horas por dia",
      "Respostas personalizadas e contextuais",
      "Integração com múltiplos canais"
    ]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Melhore Resultados",
    description: "Aumente a satisfação dos clientes e impulsione suas vendas com atendimento eficiente.",
    bullets: [
      "Aumente as taxas de conversão em até 40%",
      "Melhore a satisfação dos clientes",
      "Obtenha insights valiosos para seu negócio"
    ]
  },
];

// Stats com mais detalhes
const stats = [
  {
    value: "+45%",
    label: "Aumento na satisfação do cliente",
    description: "Baseado em pesquisas com clientes atuais"
  },
  {
    value: "-35%",
    label: "Redução em custos operacionais",
    description: "Economia média mensal para nossos clientes"
  },
  {
    value: "+60%",
    label: "Aumento na eficiência da equipe",
    description: "Medido após 30 dias de implementação"
  }
];

// App features com benefícios adicionais - Alterado de chatbot para agente
const appFeatures = [
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos com IA avançada que aprende e evolui com cada interação.",
    benefits: [
      "Reconhecimento de intenção do usuário",
      "Resposta contextual baseada em histórico",
      "Aprendizado contínuo e melhoria automática"
    ]
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Respostas Personalizadas",
    description: "Agente que aprende com cada interação e personaliza o atendimento para cada cliente.",
    benefits: [
      "Mensagens adaptadas ao perfil do cliente",
      "Personalização por segmento e histórico",
      "Templates pré-configurados para cada situação"
    ]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Análise em Tempo Real",
    description: "Métricas e insights para melhorar seu atendimento e tomar decisões baseadas em dados.",
    benefits: [
      "Dashboard intuitivo com KPIs principais",
      "Relatórios personalizados por período",
      "Alertas de performance e oportunidades"
    ]
  },
];

// Steps com imagens
const steps = [
  {
    title: "Análise Personalizada",
    description: "Entendemos suas necessidades e criamos uma solução sob medida para seu negócio.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Implementação Rápida",
    description: "Setup simples e rápido, sem complicações técnicas. Estamos ao seu lado em cada etapa.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Resultados Imediatos",
    description: "Comece a ver melhorias no seu atendimento desde o primeiro dia de operação.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
];

// Gallery items - Alterado de chatbot para agente
const galleryItems = [
  {
    title: "Dashboard de Atendimento",
    description: "Visualize todos os atendimentos em um só lugar, com métricas em tempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Agente Automatizado",
    description: "Agente inteligente que aprende com cada interação para melhorar o atendimento.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Relatórios Detalhados",
    description: "Análise detalhada de desempenho e insights para otimizar seu atendimento.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Integração com WhatsApp",
    description: "Conecte-se com seus clientes diretamente pelo WhatsApp Business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Catálogo de Produtos",
    description: "Apresente seu catálogo de produtos diretamente pelo WhatsApp.",
    image: "https://images.unsplash.com/photo-1556742208-999815fca738?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Gerenciamento de Equipe",
    description: "Gerencie sua equipe de atendimento com facilidade e eficiência.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

// Novas integrações - apenas com as ferramentas solicitadas
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
    name: "Google Sheets",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/512px-Google_Sheets_logo_%282014-2020%29.svg.png"
  },
  {
    name: "Gmail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
  },
  {
    name: "Supabase",
    logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4"
  }
];

// Challenges com soluções
const challenges = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Tempo de Resposta",
    description: "Clientes esperando muito tempo por respostas, gerando insatisfação.",
    solution: "Respostas automáticas e instantâneas 24/7, sem tempo de espera."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Equipe Sobrecarregada",
    description: "Funcionários dedicados a tarefas repetitivas que poderiam ser automatizadas.",
    solution: "Automação inteligente que libera sua equipe para tarefas estratégicas."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Múltiplos Canais",
    description: "Dificuldade em gerenciar diferentes plataformas de comunicação.",
    solution: "Integração com múltiplos canais em uma única plataforma unificada."
  },
];

// Features I9 vs Outros
const i9Features = [
  "Atendimento 24/7 sem interrupções",
  "IA Personalizada para seu negócio",
  "Setup em 24h sem complicações",
  "Suporte Dedicado e exclusivo",
  "Integração com sistemas existentes",
  "Relatórios detalhados e insights"
];

const otherSolutions = [
  "Horário Limitado de atendimento",
  "IA Genérica e pré-configurada",
  "Setup Demorado e complexo",
  "Suporte Básico compartilhado",
  "Integrações limitadas ou inexistentes",
  "Relatórios básicos ou pagos à parte"
];

// FAQs melhorados
const faqs = [
  {
    question: "Como funciona a automação do WhatsApp?",
    answer: "Nossa solução utiliza inteligência artificial para automatizar respostas e interações no WhatsApp, mantendo um atendimento personalizado e eficiente 24/7."
  },
  {
    question: "É necessário ter conhecimento técnico?",
    answer: "Não! Nossa plataforma é intuitiva e fácil de usar. Oferecemos suporte completo para configuração e treinamento da sua equipe."
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação é rápida, geralmente entre 24 a 48 horas após a contratação. Nosso time oferece suporte durante todo o processo."
  },
  {
    question: "É compatível com meu WhatsApp Business?",
    answer: "Sim! Nossa solução é totalmente compatível com WhatsApp Business e pode ser integrada facilmente com seus sistemas existentes."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Oferecemos 7 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do seu investimento, sem questionamentos."
  },
];

export default Index;
