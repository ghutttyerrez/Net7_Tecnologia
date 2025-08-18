import { motion } from "framer-motion";

/* No começo pensei em colocar os preços nos cards mais estudando e vendo outros sites percebi que o foco é mais nas velocidades e recursos do que no preço em si. Então, mantive os preços como comentários para possível uso futuro, mas não exibi-los diretamente. */
// Isso ajuda a manter o foco na performance e recursos dos planos, que é o mais importante para os usuários.

const planos = [
  {
    nome: "Combo Mega",
    velocidade: "200",
    preco: "89.90", // Mantido para possível uso futuro, mas não exibido
    features: [
      "Download 200 Mbps",
      "Upload 200 Mbps",
      "Wi‑Fi Premium",
      "Suporte 24/7",
    ],
  },
  {
    nome: "Combo Super",
    velocidade: "500",
    preco: "119.90", // Mantido para possível uso futuro, mas não exibido
    features: [
      "Download 500 Mbps",
      "Upload 500 Mbps",
      "Wi‑Fi Premium",
      "IP dinâmico",
    ],
  },
  {
    nome: "Combo Ultra",
    velocidade: "750",
    preco: "149.90", // Mantido para possível uso futuro, mas não exibido
    features: [
      "Download 750 Mbps",
      "Upload 750 Mbps",
      "Wi‑Fi 6",
      "IP dedicado",
    ],
  },
  {
    nome: "Combo Hyper",
    velocidade: "1000",
    preco: "179.90", // Mantido para possível uso futuro, mas não exibido
    features: [
      "Download 900 Mbps",
      "Upload 900 Mbps",
      "Wi‑Fi 6",
      "Atendimento prioritário",
    ],
  },
];

export default function Planos() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Degradê sutil dos cantos - mais escuro para contraste */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/35 to-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/55 via-black/25 to-black/65 z-10" />

          {/* Hero Background Image Responsiva */}
          <picture className="absolute inset-0 w-full h-full">
            {/* Desktop - telas grandes (1024px+) */}
            <source
              media="(min-width: 1024px)"
              srcSet="/hero/hero-plans-main.jpg"
            />
            {/* Tablet - telas médias (768px - 1023px) */}
            <source
              media="(min-width: 768px)"
              srcSet="/hero/hero-plans-tablet.jpg"
            />
            {/* Mobile - telas pequenas (até 767px) */}
            <source
              media="(max-width: 767px)"
              srcSet="/hero/hero-plans-mobile.jpg"
            />
            {/* Fallback para navegadores que não suportam picture */}
            <img
              src="/hero/hero-plans-main.jpg"
              alt="Pessoa usando internet fibra óptica"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 flex items-center min-h-[400px] md:min-h-[500px]">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/80 leading-tight drop-shadow-2xl">
                Assine o melhor plano de{" "}
                <motion.span
                  className="text-brand-700 dark:text-brand-300 drop-shadow-2xl"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -10, 0, -8, 0, -6, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 1.0,
                    ease: "easeOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                  }}
                >
                  internet banda larga
                </motion.span>{" "}
                com fibra óptica pra sua casa.
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="py-16 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-brand-400 mb-4"
          >
            Novas velocidades, novos streamings e o mesmo preço!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-700 dark:text-white/80 text-lg max-w-3xl mx-auto"
          >
            Transparência total: velocidade real e suporte humano. Escolha o
            plano ideal para sua casa ou empresa.
          </motion.p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section" id="planos-cards">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planos.map((plano, i) => (
              <motion.div
                key={plano.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  // Transição de saída mais rápida
                  exit: { duration: 0.15, ease: "easeIn" },
                  // Transições específicas para diferentes propriedades
                  scale: { duration: 0.25, ease: "easeOut" },
                  y: { duration: 0.25, ease: "easeOut" },
                  // Saída rápida quando sai do hover
                  whileHover: false,
                }}
                className="relative rounded-2xl overflow-hidden border cursor-pointer transform-gpu transition-all duration-150 bg-white dark:bg-neutral-900 border-neutral-200 hover:border-neutral-300 hover:shadow-lg dark:bg-gradient-to-b dark:from-brand-600/20 dark:via-brand-500/30 dark:to-brand-400/40 dark:border-brand-300/20 dark:hover:border-brand-200/40 dark:hover:shadow-brand-500/20"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 pointer-events-none hidden dark:block bg-gradient-to-t from-brand-500/40 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 pointer-events-none hidden dark:block bg-gradient-to-t from-brand-400/20 via-transparent to-transparent opacity-0 dark:hover:opacity-100 transition-opacity duration-150 hover:duration-300" />

                {/* Content */}
                <div className="relative p-6 flex flex-col h-full text-center dark:bg-black/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-700 dark:text-white/80">
                      {plano.nome}
                    </h3>
                  </div>

                  {/* Velocidade */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                        {plano.velocidade}
                      </span>
                      <span className="text-lg font-medium text-neutral-700 dark:text-white/80">
                        MB
                      </span>
                    </div>
                  </div>

                  {/* Valores */}
                  <div className="mb-6">
                    <p className="text-sm text-neutral-700 dark:text-white/80">
                      Para saber os valores, fale com nossa equipe.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-2 text-sm text-neutral-700 dark:text-white/80">
                      {plano.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instalação grátis */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-green-100 border border-green-300 text-green-700 dark:bg-green-500/20 dark:border-green-400/30 dark:text-green-300">
                      Instalação Grátis
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    {/* Assine Rápido */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        scale: { duration: 0.2, ease: "easeOut" },
                        exit: { duration: 0.1, ease: "easeIn" },
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-150 hover:duration-200 rounded-lg px-4 py-3 font-medium text-white text-sm transform-gpu"
                    >
                      <motion.svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{
                          duration: 0.25,
                          exit: { duration: 0.1 },
                        }}
                      >
                        <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                        <path d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6" />
                      </motion.svg>
                      Assine Rápido!
                    </motion.button>

                    {/* WhatsApp */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        scale: { duration: 0.2, ease: "easeOut" },
                        exit: { duration: 0.1, ease: "easeIn" },
                      }}
                      href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no plano ${plano.nome} de ${plano.velocidade}MB e gostaria de saber os valores.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-150 hover:duration-200 rounded-lg px-4 py-3 font-medium text-white text-sm transform-gpu"
                    >
                      <motion.svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.15,
                          exit: { duration: 0.1 },
                        }}
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </motion.svg>
                      WhatsApp
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
