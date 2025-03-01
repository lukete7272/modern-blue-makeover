
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileText } from 'lucide-react';

const PoliticaPrivacidade = () => {
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
          <div className="flex flex-col items-center justify-center mb-12">
            <Shield className="w-20 h-20 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white">
              Política de Privacidade
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
              Sua privacidade é importante para nós. Conheça como protegemos seus dados.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="space-y-10 text-gray-700 dark:text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-primary" />
                  Introdução
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border-l-4 border-primary">
                  <p>
                    A I9 Appify está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossos serviços, visita nosso site ou interage conosco.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Informações que Coletamos
                </h2>
                <p className="mb-4">
                  Coletamos informações quando você visita nosso site, entra em contato conosco ou utiliza nossos serviços. Essas informações incluem dados de contato como nome, email e número de telefone, além de informações sobre como você utiliza nossos serviços.
                </p>
                <p className="mb-4">
                  Também podemos coletar informações técnicas como seu endereço IP, tipo de dispositivo e navegador quando você utiliza nosso site.
                </p>
                <p>
                  Utilizamos cookies para melhorar sua experiência em nosso site, coletar estatísticas e personalizar conteúdo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Como Utilizamos suas Informações</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p>Fornecer, manter e melhorar nossos serviços</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p>Processar transações e enviar notificações relacionadas</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p>Personalizar sua experiência e fornecer conteúdo relevante</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <p>Comunicar sobre atualizações e informações relacionadas</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Atualizações desta Política</h2>
                <p className="mb-2">
                  Esta política pode ser atualizada periodicamente. Publicaremos a versão revisada em nosso site e, quando necessário, notificaremos você sobre mudanças significativas.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contato</h2>
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <p className="text-center mb-4">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
                  </p>
                  <a 
                    href="mailto:contato@i9appify.com" 
                    className="inline-flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    contato@i9appify.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} I9 Appify. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/sobre-nos" className="hover:text-primary transition-colors">Sobre Nós</Link>
            <Link to="/termos-servico" className="hover:text-primary transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliticaPrivacidade;
