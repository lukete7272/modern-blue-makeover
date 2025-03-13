
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Check, AlertCircle } from 'lucide-react';

const TermosServico = () => {
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
            <FileText className="w-16 h-16 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Termos de Serviço
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-medium italic">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
                <p className="mt-4">
                  Bem-vindo à I9 Appify. Estes Termos de Serviço ("Termos") regem seu acesso e uso dos serviços da I9 Appify. Ao usar ou acessar os Serviços, você concorda com estes Termos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Check className="w-6 h-6 mr-2 text-primary" />
                  Uso dos Serviços
                </h2>
                <p className="mb-4">
                  Você deve seguir todas as políticas disponibilizadas a você dentro dos Serviços. Não utilize nossos Serviços de forma inadequada. Podemos suspender ou interromper o fornecimento de nossos Serviços se você não cumprir nossos termos ou políticas.
                </p>
                <p>
                  O uso dos Serviços não lhe confere a propriedade de nenhum direito de propriedade intelectual sobre nossos Serviços ou o conteúdo que você acessar. Você não pode usar o conteúdo de nossos Serviços a menos que obtenha permissão do proprietário ou que seja permitido por lei.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sua Conta</h2>
                <p className="mb-4">
                  Para usar alguns de nossos Serviços, você pode precisar criar uma conta. Você é responsável por manter a segurança de sua conta e senha. A I9 Appify não pode e não será responsável por qualquer perda ou dano resultante de sua falha em cumprir com os requisitos de segurança.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Privacidade e Proteção de Dados</h2>
                <p className="mb-4">
                  Nossa <Link to="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</Link> explica como tratamos seus dados pessoais e protegemos sua privacidade quando você usa nossos Serviços. Ao utilizar nossos Serviços, você concorda que a I9 Appify pode usar esses dados de acordo com nossas políticas de privacidade.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Suporte Técnico e Ajustes</h2>
                <p className="mb-4">
                  Nosso Suporte Técnico resolve problemas críticos que impedem o funcionamento do agente ou integrações. Exemplos incluem: queda do agente, falha em integrações, bloqueio de acesso ao painel, erros na coleta de dados e bugs recorrentes.
                </p>
                <p className="mb-4">
                  Nosso SLA garante resposta em até 24 horas (6 horas para plano PRO) e solução em até 48 horas após diagnóstico. O suporte técnico está incluso em todos os planos.
                </p>
                <p className="mb-4">
                  Ajustes são modificações não críticas no fluxo, conteúdo ou configurações do agente. Exemplos incluem: atualizar promoções, corrigir respostas automáticas, personalizar o tom de comunicação, modificar horários de funcionamento ou alterar menus interativos.
                </p>
                <p className="mb-4">
                  Cada plano inclui um número específico de ajustes: Essential (2 ajustes, R$150/hora adicional), Completo (5 ajustes, R$150/hora ou Pacote Ouro R$800/10 ajustes) e PRO (8 ajustes, R$150/hora adicional). Os ajustes são entregues em até 72 horas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-primary" />
                  Modificações nos Serviços
                </h2>
                <p>
                  A I9 Appify está constantemente melhorando seus Serviços. Podemos adicionar ou remover funcionalidades ou recursos, e podemos suspender ou interromper um Serviço por completo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sobre estes Termos</h2>
                <p className="mb-4">
                  Podemos modificar estes termos para refletir alterações na lei ou mudanças em nossos Serviços. Publicaremos avisos sobre modificações nestes termos nesta página.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contato</h2>
                <p>
                  Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco pelo e-mail: <a href="mailto:contato@i9appify.com" className="text-primary hover:underline">contato@i9appify.com</a>
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

export default TermosServico;
