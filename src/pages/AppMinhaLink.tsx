import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AppMinhaLink() {
  // Imagens do carrossel (substitua pelos prints reais do app quando tiver)
  const images: { src: string; alt: string }[] = [
    { src: "/screens/screen1.png", alt: "Tela do app 1" },
    { src: "/screens/screen2.png", alt: "Tela do app 2" },
    { src: "/screens/screen3.png", alt: "Tela do app 3" },
    { src: "/screens/screen4.png", alt: "Tela do app 4" },
    { src: "/screens/screen5.png", alt: "Tela do app 5" },
    { src: "/screens/screen6.png", alt: "Tela do app 6" },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Troca automática a cada 3 segundos
  useEffect(() => {
    if (isPaused || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length, isPaused]);
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold hover:text-green-200">
          Aplicativo Net7
        </h1>
        <p className="mt-2 text-white/80  hover:text-green-200 ">
          Gerencie sua internet na palma da mão.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <ul className="space-y-3 text-white/80">
              <li className=" hover:text-green-200">
                • Segunda via e histórico de faturas
              </li>
              <li className=" hover:text-green-200">• Teste de velocidade</li>
              <li className=" hover:text-green-200">
                • Abertura e acompanhamento de chamados
              </li>
              <li className=" hover:text-green-200">
                • Configurações do Wi‑Fi
              </li>
              <li className=" hover:text-green-200">
                • Atualizações e notificações
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* App Store (iOS) */}
              <a
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-gray-200"
                href="https://apps.apple.com"
                aria-label="Baixar na App Store"
                target="_blank"
                rel="noopener noreferrer"
                title="App Store"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.37 1.43c0 1.13-.49 2.2-1.27 3-.84.88-1.98 1.45-3.27 1.35-.15-1.1.49-2.28 1.29-3.1.84-.88 2.23-1.48 3.25-1.25ZM20.66 17.05c-.58 1.42-1.3 2.72-2.33 3.95-.86 1.02-1.88 2.12-3.22 2.12-1.18 0-1.99-.7-3.18-.7-1.23 0-2.03.7-3.18.72-1.37.03-2.44-1.1-3.3-2.1-1.82-2.11-3.2-5.26-2.83-8.25.3-2.37 1.75-4.38 3.84-4.38 1.19 0 2.08.75 3.12.75 1.02 0 1.67-.75 3.15-.75 1.36 0 2.78.75 3.65 2.04-.96.6-1.4 1.43-1.4 2.64 0 1.13.44 2.06 1.16 2.73.68.63 1.59 1.03 2.52 1.03.17 0 .32-.01.47-.06Z"
                  />
                </svg>
                App Store
              </a>

              {/* Google Play */}
              <a
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-gray-200"
                href="https://play.google.com/store/apps/details?id=br.com.aplicativoprovedor.net7tecnologia&hl=pt_BR"
                aria-label="Baixar na Google Play"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Play"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <defs>
                    <linearGradient id="gpGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#34A853" />
                      <stop offset="0.5" stopColor="#FBBC05" />
                      <stop offset="1" stopColor="#EA4335" />
                    </linearGradient>
                  </defs>
                  <polygon points="2,2 18,10 2,18" fill="url(#gpGrad)" />
                  <polygon points="2,2 8,6 2,10" fill="#4285F4" opacity="0.9" />
                  <polygon
                    points="2,10 8,14 2,18"
                    fill="#34A853"
                    opacity="0.9"
                  />
                </svg>
                Google Play
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[9/16] rounded-2xl border border-white/10 bg-black/40 overflow-hidden relative"
            aria-label="Carrossel de telas do aplicativo"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Imagem atual com crossfade, empilhada para não mostrar fundo */}
            <AnimatePresence>
              <motion.img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].alt}
                className="absolute inset-0 h-full w-full object-cover select-none"
                draggable={false}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Controles: anterior / próximo */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
              <button
                type="button"
                aria-label="Imagem anterior"
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                onClick={prev}
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12.7 4.7a1 1 0 0 1 0 1.4L9.82 9l2.88 2.9a1 1 0 1 1-1.42 1.4l-3.6-3.6a1 1 0 0 1 0-1.4l3.6-3.6a1 1 0 0 1 1.42 0Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Próxima imagem"
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                onClick={next}
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.3 15.3a1 1 0 0 1 0-1.4L10.18 11 7.3 8.1A1 1 0 1 1 8.72 6.7l3.6 3.6a1 1 0 0 1 0 1.4l-3.6 3.6a1 1 0 0 1-1.42 0Z"
                  />
                </svg>
              </button>
            </div>

            {/* Indicadores (bolinhas) */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para imagem ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
