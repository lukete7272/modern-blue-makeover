
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
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-16 h-16 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Política de Privacidade
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-primary" />
                  Introdução
                </h2>
                <p>
                  A I9 Appify está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos serviços, visita nosso site ou interage conosco.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Informações que Coletamos
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informações de Contato:</strong> Nome, endereço de e-mail, número de telefone, empresa e cargo.</li>
                  <li><strong>Informações de Uso:</strong> Como você interage com nossos serviços, incluindo funcionalidades acessadas e tempo de uso.</li>
                  <li><strong>Informações de Dispositivo:</strong> Tipo de dispositivo, sistema operacional, endereço IP e identificadores únicos de dispositivo.</li>
                  <li><strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies para melhorar sua experiência, coletar estatísticas e personalizar conteúdo.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Como Utilizamos suas Informações</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer, manter e melhorar nossos serviços;</li>
                  <li>Processar transações e enviar notificações relacionadas;</li>
                  <li>Personalizar sua experiência e fornecer conteúdo relevante;</li>
                  <li>Comunicar sobre atualizações, ofertas e informações relacionadas;</li>
                  <li>Proteger nossos serviços e prevenir atividades fraudulentas;</li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Compartilhamento de Informações</h2>
                <p>
                  Podemos compartilhar suas informações com:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Parceiros de negócios e fornecedores que nos auxiliam na prestação de serviços;</li>
                  <li>Autoridades competentes, quando legalmente exigido;</li>
                  <li>Terceiros, em caso de reorganização empresarial, fusão, venda ou transferência de ativos.</li>
                </ul>
                <p className="mt-2">
                  Nunca vendemos ou alugamos suas informações pessoais a terceiros para fins de marketing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Seus Direitos</h2>
                <p>
                  Você tem direito a:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Acessar, corrigir ou excluir seus dados pessoais;</li>
                  <li>Limitar ou se opor ao processamento de seus dados;</li>
                  <li>Receber seus dados em formato portável;</li>
                  <li>Retirar seu consentimento a qualquer momento.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco pelo e-mail: <a href="mailto:privacidade@i9appify.com.br" className="text-primary hover:underline">privacidade@i9appify.com.br</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Atualizações desta Política</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Publicaremos a versão revisada em nosso site e, quando necessário, notificaremos você sobre mudanças significativas.
                </p>
                <p className="mt-2">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
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

export default PoliticaPrivacidade;
