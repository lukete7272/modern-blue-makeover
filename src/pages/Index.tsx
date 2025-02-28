
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Menu, X, Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  // Refs para as seções para animação ao scroll
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* NavBar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">I9 Appify</div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-primary transition">Benefícios</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-primary transition">Como Funciona</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-primary transition">FAQ</button>
              <button onClick={openWhatsApp} className="bg-primary/10 text-primary px-4 py-1 rounded-lg hover:bg-primary/20 transition">
                Contato
              </button>
            </div>
            
            {/* Menu mobile toggle */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'visible' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold text-primary">I9 Appify</div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-xl font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-xl font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-xl font-medium text-gray-800 hover:text-primary transition py-2 border-b border-gray-100"
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Conecte sua empresa com{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  inteligência
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
                  className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-300 text-lg flex items-center gap-2"
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
                className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/80"
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary text-2xl">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Melhorada */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Por que seu atendimento precisa de{" "}
            <span className="text-primary">automação</span>?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
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
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{bullet}</span>
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
                <div className="text-lg text-gray-600">{stat.label}</div>
                <div className="mt-3 text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Como a <span className="text-primary">I9 Appify</span> transforma seu negócio?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Nossa plataforma inteligente automatiza seu atendimento com recursos avançados
          </p>
          
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl mb-16">
                <div className="space-y-10">
                  {appFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary text-2xl mb-4 md:mb-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        {feature.benefits && (
                          <div className="mt-4 space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-primary" />
                                <span className="text-gray-700 text-sm">{benefit}</span>
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
                <div className="bg-primary/10 p-10 rounded-2xl shadow-lg border border-primary/20">
                  <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
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

      {/* Simple Steps Section - Melhorada */}
      <section id="how-it-works" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Como Funciona em <span className="text-primary">3 Passos Simples</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                
                <div className="mt-5 h-48 overflow-hidden rounded-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Os Desafios Que Você Enfrenta no Atendimento
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Problemas comuns que a I9 Appify ajuda a resolver em seu dia a dia
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center text-primary">
                    <span className="font-medium">Nossa solução:</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                  <p className="text-gray-700 mt-2">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            I9 Appify vs Outras Soluções
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Entenda por que somos a escolha ideal para seu negócio
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-6">I9 Appify</h3>
              <ul className="space-y-4">
                {i9Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Outras Soluções</h3>
              <ul className="space-y-4">
                {otherSolutions.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-red-100 p-1 rounded-full">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Com Accordeon */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Tire suas dúvidas sobre a I9 Appify
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-accordion-item mb-4 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <button 
                  className="faq-accordion-trigger w-full p-6 bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-left text-gray-900">{faq.question}</h3>
                    {activeAccordion === index ? 
                      <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    }
                  </div>
                </button>
                <div className={`px-6 bg-white transition-all duration-300 ${activeAccordion === index ? 'py-6 border-t border-gray-100' : 'max-h-0 py-0 overflow-hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA no final do FAQ */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ainda tem dúvidas?</h3>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto mb-8 animate-float">
            <img 
              src="https://ldqjunoqeepcdctheidd.supabase.co/storage/v1/object/public/i9appify/Landing%20page%20I9%20Appify/iamgens%20da%20pagina/7-DIAS-DE-GARANTIA%20(1).webp" 
              alt="Selo de Garantia" 
              className="w-full h-auto max-w-xs mx-auto drop-shadow-lg"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            GARANTIA DE SATISFAÇÃO
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Garantia de Satisfação: Sem Custos Extras!
          </p>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
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

      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

// Destacados do hero section
const highlightItems = [
  {
    icon: "🔒",
    title: "100% Seguro e Confiável"
  },
  {
    icon: "🚀",
    title: "Implementação em 24h"
  },
  {
    icon: "💬",
    title: "Atendimento 24/7"
  }
];

// Features section com bullets adicionais
const features = [
  {
    icon: <span className="text-2xl">🎯</span>,
    title: "Aumente a Eficiência",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
    bullets: [
      "Reduza tempo de resposta em até 80%",
      "Automatize respostas para perguntas frequentes",
      "Libere sua equipe para tarefas estratégicas"
    ]
  },
  {
    icon: <span className="text-2xl">⚡</span>,
    title: "Resposta Instantânea",
    description: "Atenda seus clientes 24/7 com respostas rápidas e precisas, melhorando a experiência.",
    bullets: [
      "Atendimento disponível 24 horas por dia",
      "Respostas personalizadas e contextuais",
      "Integração com múltiplos canais"
    ]
  },
  {
    icon: <span className="text-2xl">📈</span>,
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

// App features com benefícios adicionais
const appFeatures = [
  {
    icon: <span>🔄</span>,
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos com IA avançada que aprende e evolui com cada interação.",
    benefits: [
      "Reconhecimento de intenção do usuário",
      "Resposta contextual baseada em histórico",
      "Aprendizado contínuo e melhoria automática"
    ]
  },
  {
    icon: <span>💬</span>,
    title: "Respostas Personalizadas",
    description: "Chatbot que aprende com cada interação e personaliza o atendimento para cada cliente.",
    benefits: [
      "Mensagens adaptadas ao perfil do cliente",
      "Personalização por segmento e histórico",
      "Templates pré-configurados para cada situação"
    ]
  },
  {
    icon: <span>📊</span>,
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

// Challenges com soluções
const challenges = [
  {
    icon: <span>⏰</span>,
    title: "Tempo de Resposta",
    description: "Clientes esperando muito tempo por respostas, gerando insatisfação.",
    solution: "Respostas automáticas e instantâneas 24/7, sem tempo de espera."
  },
  {
    icon: <span>👥</span>,
    title: "Equipe Sobrecarregada",
    description: "Funcionários dedicados a tarefas repetitivas que poderiam ser automatizadas.",
    solution: "Automação inteligente que libera sua equipe para tarefas estratégicas."
  },
  {
    icon: <span>📱</span>,
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
