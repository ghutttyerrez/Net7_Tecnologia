import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Ganhe", "Lucre", "Junte"];

export default function IndiqueGanhe() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Muda a palavra a cada 3 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 text-center">
            <div className="flex items-baseline justify-center">
              <span className="mr-3">Indique e</span>
              <div className="relative text-brand-500 dark:text-brand-400 overflow-hidden min-w-[140px] md:min-w-[160px] flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{
                      y: "100%",
                      opacity: 0,
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                    }}
                    exit={{
                      y: "-100%",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="absolute whitespace-nowrap"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Espaçador invisível para manter largura fixa */}
                <span className="invisible">Junte</span>
              </div>
            </div>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Compartilhe a melhor internet fibra óptica com seus amigos e ganhe
            desconto na sua próxima fatura!
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50/50 via-brand-100/30 to-brand-200/20 dark:from-brand-600/20 dark:via-brand-500/30 dark:to-brand-400/20 border border-brand-200/30 dark:border-brand-300/20 backdrop-blur-sm">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-200/40 via-transparent to-transparent dark:from-brand-500/40 dark:via-transparent dark:to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Information */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-brand-100 dark:bg-brand-500/20">
                      <svg
                        className="h-8 w-8 text-brand-600 dark:text-brand-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                      Como Funciona?
                    </h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 dark:bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                          Indique um amigo
                        </h3>
                        <p className="text-neutral-600 dark:text-white/80 text-sm">
                          Compartilhe nossos planos com amigos e familiares
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 dark:bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                          Ele contrata o serviço
                        </h3>
                        <p className="text-neutral-600 dark:text-white/80 text-sm">
                          Seu amigo assina qualquer um dos nossos planos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 dark:bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                          Vocês ganham desconto
                        </h3>
                        <p className="text-neutral-600 dark:text-white/80 text-sm">
                          Ambos recebem desconto na próxima fatura
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href="https://wa.me/5567993259746?text=Olá! Gostaria de saber mais sobre o programa Indique e Ganhe da Net7 Tecnologia. Como posso indicar amigos e ganhar desconto na minha fatura?"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.555" />
                    </svg>
                    Começar a Indicar
                  </motion.a>
                </div>

                {/* Right side - Benefit Highlight */}
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-3xl blur-3xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-8 md:p-12">
                      <div className="text-white">
                        <div className="text-6xl md:text-7xl font-bold mb-2">
                          R$
                        </div>
                        <div className="text-4xl md:text-5xl font-bold mb-4">
                          50,00
                        </div>
                        <div className="text-lg font-medium opacity-90">
                          de desconto
                        </div>
                        <div className="text-sm opacity-75 mt-2">
                          na próxima fatura
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-neutral-100/70 dark:bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-neutral-700 dark:text-white/90 text-sm">
                      <strong>Sem limite!</strong> Quanto mais indicações, mais
                      descontos você acumula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="max-w-4xl mx-auto bg-neutral-100/50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              Termos e Condições
            </h3>
            <div className="text-neutral-600 dark:text-white/70 text-sm space-y-2">
              <p>
                • O desconto é aplicado após a confirmação da instalação do
                serviço do indicado
              </p>
              <p>
                • Válido apenas para novos clientes que não possuem histórico
                com a Net7 Tecnologia
              </p>
              <p>
                • O desconto é creditado na fatura seguinte à confirmação da
                indicação
              </p>
              <p>
                • Promoção válida por tempo indeterminado, sujeita a alterações
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
