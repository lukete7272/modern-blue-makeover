
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const SobreNos = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/5531993988889`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <div className="text-xl font-bold text-primary">I9 Appify</div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Sobre Nós
          </h1>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 animate-fade-in">
              <p className="mb-6">
                A <span className="text-primary font-semibold">I9 Appify</span> nasceu com a missão de revolucionar o atendimento ao cliente, proporcionando soluções inovadoras que impulsionam o crescimento e a performance do seu negócio.
              </p>
              
              <p className="mb-6">
                Somos especialistas na combinação de inovação, tecnologia e inteligência, criando estratégias que otimizam o atendimento e geram mais vendas para empresas que desejam se destacar no mercado.
              </p>
              
              <p className="mb-6">
                Nosso compromisso é transformar a experiência do cliente através de um atendimento excepcional, eficiente e personalizado. Na I9 Appify, acreditamos que cada interação é uma oportunidade para fortalecer marcas, fidelizar clientes e alcançar novos patamares de sucesso.
              </p>
              
              <p className="font-semibold text-xl text-primary">
                🚀 Junte-se a nós e leve seu negócio mais longe!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comunicação</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Facilitamos a conexão entre sua empresa e seus clientes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inovação</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Utilizamos tecnologias avançadas para revolucionar seu atendimento.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Resultados</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  Focamos em gerar crescimento mensurável para seu negócio.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={openWhatsApp}
              className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition duration-300 text-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <span>Fale com nossa equipe</span>
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default SobreNos;
