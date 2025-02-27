
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* NavBar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
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
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
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
                Automatize seu atendimento e transforme a experiência dos seus clientes com soluções inovadoras.
              </p>
              <button 
                onClick={openWhatsApp}
                className="group bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/30 hover:scale-105 transition duration-300 text-lg font-semibold flex items-center gap-2"
              >
                <span>Começar agora</span>
                <MessageCircle className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded absolute -top-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity">Via WhatsApp</span>
              </button>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Automação Inteligente"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Por que seu atendimento precisa de{" "}
            <span className="text-primary">automação</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como a <span className="text-primary">I9 Appify</span> transforma seu negócio?
          </h2>
          
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl mb-16">
                <div className="space-y-10">
                  {appFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary text-xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full max-w-md">
                <div className="bg-primary/10 p-10 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
                    Pronto para começar?
                  </h3>
                  <div className="flex justify-center">
                    <button 
                      onClick={openWhatsApp}
                      className="group bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-primary/90 hover:scale-105 transition duration-300 text-lg font-semibold flex items-center gap-2"
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

      {/* Simple Steps Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como Funciona em <span className="text-primary">3 Passos Simples</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Os Desafios Que Você Enfrenta no Atendimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            I9 Appify vs Outras Soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-primary mb-6">I9 Appify</h3>
              <ul className="space-y-4">
                {i9Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Outras Soluções</h3>
              <ul className="space-y-4">
                {otherSolutions.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://ldqjunoqeepcdctheidd.supabase.co/storage/v1/object/public/i9appify/Landing%20page%20I9%20Appify/iamgens%20da%20pagina/7-DIAS-DE-GARANTIA%20(1).webp" 
              alt="Selo de Garantia" 
              className="w-full h-auto max-w-xs mx-auto"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            GARANTIA DE SATISFAÇÃO
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Garantia de Satisfação: Sem Custos Extras!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para transformar seu atendimento?
          </h2>
          <div className="flex justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-white text-primary px-10 py-5 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 text-xl font-semibold flex items-center gap-2"
            >
              <span>Agende uma demonstração</span>
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
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

const features = [
  {
    icon: <span className="text-2xl">🎯</span>,
    title: "Aumente a Eficiência",
    description: "Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.",
  },
  {
    icon: <span className="text-2xl">⚡</span>,
    title: "Resposta Instantânea",
    description: "Atenda seus clientes 24/7 com respostas rápidas e precisas.",
  },
  {
    icon: <span className="text-2xl">📈</span>,
    title: "Melhore Resultados",
    description: "Aumente a satisfação dos clientes e impulsione suas vendas.",
  },
];

const stats = [
  {
    value: "+45%",
    label: "Aumento na satisfação do cliente"
  },
  {
    value: "-35%",
    label: "Redução em custos operacionais"
  },
  {
    value: "+60%",
    label: "Aumento na eficiência da equipe"
  }
];

const appFeatures = [
  {
    icon: <span>🔄</span>,
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos com IA avançada",
  },
  {
    icon: <span>💬</span>,
    title: "Respostas Personalizadas",
    description: "Chatbot que aprende com cada interação",
  },
  {
    icon: <span>📊</span>,
    title: "Análise em Tempo Real",
    description: "Métricas e insights para melhorar seu atendimento",
  },
];

const steps = [
  {
    title: "Análise Personalizada",
    description: "Entendemos suas necessidades e criamos uma solução sob medida.",
  },
  {
    title: "Implementação Rápida",
    description: "Setup simples e rápido, sem complicações técnicas.",
  },
  {
    title: "Resultados Imediatos",
    description: "Comece a ver melhorias no seu atendimento desde o primeiro dia.",
  },
];

const challenges = [
  {
    icon: <span>⏰</span>,
    title: "Tempo de Resposta",
    description: "Clientes esperando muito tempo por respostas",
  },
  {
    icon: <span>👥</span>,
    title: "Equipe Sobrecarregada",
    description: "Funcionários dedicados a tarefas repetitivas",
  },
  {
    icon: <span>📱</span>,
    title: "Múltiplos Canais",
    description: "Dificuldade em gerenciar diferentes plataformas",
  },
];

const i9Features = [
  "Atendimento 24/7",
  "IA Personalizada",
  "Setup em 24h",
  "Suporte Dedicado",
];

const otherSolutions = [
  "Horário Limitado",
  "IA Genérica",
  "Setup Demorado",
  "Suporte Básico",
];

const faqs = [
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação é rápida e pode ser concluída em até 24 horas após a contratação.",
  },
  {
    question: "Preciso de conhecimento técnico?",
    answer: "Não! Nossa plataforma é intuitiva e oferecemos todo o suporte necessário.",
  },
  {
    question: "Como funciona o período de teste?",
    answer: "Oferecemos 14 dias de teste gratuito com todas as funcionalidades disponíveis.",
  },
  {
    question: "Posso personalizar as respostas?",
    answer: "Sim! Você tem total controle sobre as respostas e pode personalizá-las conforme sua necessidade.",
  },
];

export default Index;
