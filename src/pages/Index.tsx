import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import CookieConsent from "react-cookie-consent";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const features = [
    {
      title: "Automação de Atendimento",
      description: "Automatize respostas para perguntas frequentes e agilize o atendimento ao cliente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M8 13h2" />
          <path d="M8 17h2" />
          <path d="M14 13h2" />
          <path d="M14 17h2" />
        </svg>
      ),
    },
    {
      title: "Integração com Sistemas",
      description: "Conecte o WhatsApp com seu CRM, ERP ou sistema de gestão para uma experiência unificada.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M17 6.1H3" />
          <path d="M21 12.1H3" />
          <path d="M15.1 18H3" />
          <path d="M19 6v12c0 1.1.9 2 2 2h.1" />
        </svg>
      ),
    },
    {
      title: "Chatbot Inteligente",
      description: "Utilize inteligência artificial para oferecer respostas contextuais e personalizadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
    },
    {
      title: "Análise de Conversas",
      description: "Obtenha insights valiosos sobre as interações com clientes para melhorar seu atendimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
    },
    {
      title: "Mensagens em Massa",
      description: "Envie comunicados, promoções e atualizações para múltiplos clientes de uma só vez.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M5 7 3 5" />
          <path d="M9 5 5 9" />
          <path d="m13 5-8 8" />
          <path d="m17 5-8 8" />
          <path d="M21 5 5 21" />
          <path d="M21 9 9 21" />
          <path d="M21 13 13 21" />
          <path d="M21 17 17 21" />
          <path d="M21 21 19 19" />
        </svg>
      ),
    },
    {
      title: "Múltiplos Atendentes",
      description: "Gerencie várias conversas simultâneas com uma equipe de atendimento integrada.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechSolutions",
      content: "A I9 Appify transformou completamente nosso atendimento ao cliente. Conseguimos automatizar 70% das interações e nosso tempo de resposta caiu de horas para minutos.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Ana Oliveira",
      role: "Gerente de Marketing, Boutique Elegance",
      content: "Implementamos o chatbot da I9 Appify e nossas vendas aumentaram em 35%. A capacidade de responder rapidamente às dúvidas dos clientes fez toda a diferença.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Roberto Mendes",
      role: "Proprietário, Restaurante Sabor Brasileiro",
      content: "Com a solução da I9 Appify, conseguimos gerenciar nossos pedidos por WhatsApp de forma organizada e eficiente. Nossos clientes adoram a praticidade!",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const pricingPlans = [
    {
      name: "Básico",
      price: "R$ 97",
      period: "/mês",
      description: "Ideal para pequenos negócios iniciando no WhatsApp Business.",
      features: [
        "1 número de WhatsApp",
        "Até 500 mensagens/mês",
        "Chatbot com respostas automáticas",
        "Atendimento em horário comercial",
        "Relatórios básicos",
      ],
      cta: "Começar Agora",
      highlighted: false,
    },
    {
      name: "Profissional",
      price: "R$ 197",
      period: "/mês",
      description: "Perfeito para empresas em crescimento que precisam de mais recursos.",
      features: [
        "3 números de WhatsApp",
        "Até 2.000 mensagens/mês",
        "Chatbot avançado com IA",
        "Integração com CRM",
        "Múltiplos atendentes",
        "Relatórios avançados",
        "Suporte prioritário",
      ],
      cta: "Escolher Plano",
      highlighted: true,
    },
    {
      name: "Empresarial",
      price: "R$ 497",
      period: "/mês",
      description: "Solução completa para empresas que precisam de atendimento em larga escala.",
      features: [
        "10 números de WhatsApp",
        "Mensagens ilimitadas",
        "Chatbot com IA personalizada",
        "Integrações avançadas",
        "Equipe ilimitada de atendentes",
        "Análise de sentimento",
        "API completa",
        "Suporte 24/7",
      ],
      cta: "Contatar Vendas",
      highlighted: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolucione seu atendimento com WhatsApp Business
              </h1>
              <p className="text-xl mb-8">
                Automatize conversas, aumente vendas e melhore a satisfação dos seus clientes com nossa plataforma inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#planos"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-lg transition duration-300 text-center"
                >
                  Ver Planos
                </a>
                <a
                  href="#contato"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-lg transition duration-300 text-center"
                >
                  Falar com Consultor
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/hero-image.png"
                alt="WhatsApp Business Automation"
                className="rounded-lg shadow-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="recursos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos que transformam seu atendimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece tudo que você precisa para criar uma experiência excepcional para seus clientes no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 bg-blue-50 p-3 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Centenas de empresas já transformaram seu atendimento com a I9 Appify.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mb-6"
                />
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <h4 className="text-lg font-bold">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="planos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que cabem no seu orçamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o tamanho e as necessidades do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                  plan.highlighted
                    ? "border-2 border-blue-500 relative"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-blue-500 text-white text-center py-2 font-medium">
                    Mais Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mr-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition duration-300 ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white" id="contato">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como a I9 Appify pode ajudar seu negócio a crescer com o WhatsApp Business.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Seu telefone"
              className="w-full px-4 py-3 rounded-lg text-gray-800 mb-4"
              required
            />
            <textarea
              placeholder="Como podemos ajudar?"
              className="w-full px-4 py-3 rounded-lg text-gray-800 mb-6"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition duration-300"
            >
              Solicitar Demonstração
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">I9 Appify</h3>
              <p className="text-gray-300 mb-4">
                Soluções inovadoras para automação de atendimento via WhatsApp Business.
              </p>
              <div className="flex gap-4">
                {/* Only keep Instagram icon */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/sobre-nos" className="text-gray-300 hover:text-white transition">Sobre Nós</Link>
                </li>
                <li>
                  <Link to="/termos-servico" className="text-gray-300 hover:text-white transition">Termos de Serviço</Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" className="text-gray-300 hover:text-white transition">Política de Privacidade</Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp: (31) 99398-8889
                </p>
                <p className="text-gray-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  contato@i9appify.com.br
                </p>
                <p className="text-gray-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  Belo Horizonte, MG
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2023 I9 Appify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <CookieConsent
          location="bottom"
          buttonText="Aceitar"
          cookieName="i9appify-cookie-consent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ background: "#4285F4", color: "white", fontSize: "13px" }}
          expires={150}
          onAccept={() => setShowCookieConsent(false)}
        >
          Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <Link to="/politica-privacidade" className="text-blue-300 hover:text-blue-200">
            Política de Privacidade
          </Link>
          .
        </CookieConsent>
      )}
    </div>
  );
};

export default Index;
