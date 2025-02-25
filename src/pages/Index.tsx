
import { useState } from "react";

const Index = () => {
  const [isLoaded, useState] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Conecte sua empresa com{" "}
                <span className="text-primary">inteligência</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Automatize seu atendimento e transforme a experiência dos seus clientes com soluções inovadoras.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition duration-300">
                Começar agora
              </button>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={"/lovable-uploads/247a559c-60f8-44db-946b-8c546f935a07.png"}
                alt="AI Robot"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que seu atendimento precisa de automação?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como a I9 Appify transforma seu negócio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para transformar seu atendimento?
          </h2>
          <button className="bg-white text-primary px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
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

export default Index;
