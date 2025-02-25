import { useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              <button className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition duration-300 text-lg font-semibold">
                Começar agora
              </button>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Tecnologia Moderna"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Por que seu atendimento precisa de{" "}
            <span className="text-primary">automação</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
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

      {/* App Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como a <span className="text-primary">I9 Appify</span> transforma seu negócio?
          </h2>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
            <div className="w-full lg:w-1/2">
              <div className="space-y-10">
                {appFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary text-2xl">
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
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-10 rounded-2xl w-full">
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
                  Pronto para começar?
                </h3>
                <button className="w-full bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-105 transition duration-300 text-lg font-semibold">
                  Agende uma demonstração
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como Funciona em <span className="text-primary">3 Passos Simples</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg animate-fade-up relative"
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
                className="p-6 bg-white rounded-xl shadow-lg animate-fade-up"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-primary/5 rounded-xl">
              <h3 className="text-xl font-semibold text-primary mb-4">I9 Appify</h3>
              <ul className="space-y-3">
                {i9Features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Outras Soluções</h3>
              <ul className="space-y-3">
                {otherSolutions.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="mt-4 text-yellow-400">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
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
          <div className="w-24 h-24 mx-auto mb-6">
            <img src="/guarantee-seal.png" alt="Selo de Garantia" className="w-full h-full" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Garantia de Satisfação
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos 30 dias de garantia total de satisfação. Se você não estiver completamente satisfeito, devolvemos 100% do seu investimento.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para transformar seu atendimento?
          </h2>
          <button className="bg-white text-primary px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300">
            Agende uma demonstração
          </button>
        </div>
      </section>
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

const testimonials = [
  {
    name: "João Silva",
    role: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "A I9 Appify revolucionou nosso atendimento ao cliente. Não consigo imaginar nossa operação sem ela.",
  },
  {
    name: "Maria Santos",
    role: "Gerente de Operações",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Reduzimos nosso tempo de resposta em 80% com a solução da I9 Appify.",
  },
  {
    name: "Carlos Oliveira",
    role: "Diretor Comercial",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "A melhor decisão que tomamos foi implementar a I9 Appify no nosso atendimento.",
  },
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
